const API_URL = "https://api.adblock-for-youtube.com";

const youtubeAdRegexesFallback = [
  "(googleads.g.doubleclick.net)",
  "(=adunit&)",
  "(/pubads.)",
  "(/pubads_)",
  "(/api/ads/)",
  "(/googleads_)",
  "(innovid.com)",
  "(/pagead/lvz?)",
  "(/pagead/gen_)",
  "(doubleclick.com)",
  "(google.com/pagead/)",
  "(youtube.com/pagead/)",
  "(googlesyndication.com)",
  "(www.youtube.com/get_midroll_)",
].join("|");

const adBlockingSelectorsFallback = [
  '#player-ads',
  '#merch-shelf',
  '#masthead-ad',
  '#offer-module',
  '.ytp-ad-button',

  'ytd-ad-slot-renderer',
  '.ytd-ad-slot-renderer',
  '.ytp-ad-progress-list',

  '.ytd-merch-shelf-renderer',
  'ytd-companion-slot-renderer',
  '.ytd-companion-slot-renderer',
  '.ytd-in-feed-ad-layout-renderer',
  '.ytd-action-companion-ad-renderer',
  '.ytp-ad-player-overlay-flyout-cta',
  'ytd-promoted-sparkles-web-renderer',

  '.ad-showing > .html5-video-container',
  '.ytd-player-legacy-desktop-watch-ads-renderer',
  '.ytd-rich-item-renderer > ytd-ad-slot-renderer',
  'a[href^="https://www.googleadservices.com/pagead/aclk?"]',
  '#contents > ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)',

  'ytd-display-ad-renderer',
  '.ytd-carousel-ad-renderer',
  'ytd-compact-promoted-video-renderer',
  '.ytd-promoted-sparkles-text-search-renderer',
  '.masthead-ad-control',
  '#ad_creative_3',
  '#footer-ads',

  'ytd-promoted-video-renderer',
  '.ad-container',
  '.ad-div',
  '.video-ads',
  '.ytd-mealbar-promo-renderer',
  '.sparkles-light-cta',
  '#watch-channel-brand-div',
  '#watch7-sidebar-ads'
].join(',');

const settings = {
  ads: localStorage.ads === "true",
  annotations: localStorage.ads === "true",
  youtubeAdRegex: new RegExp(
    localStorage.youtubeAdRegex || youtubeAdRegexesFallback
  ),
  adBlockingSelectors: localStorage.adBlockingSelectors || adBlockingSelectorsFallback
};

const setResponseFields = (fieldName, value) => {
  localStorage[fieldName] = value;
  settings[fieldName] = value
}

const updateYoutubeAdRegexes = () => {
  fetch(`${API_URL}/api/v1/adregex?version=${chrome.runtime.getManifest().version}`)
    .then((response) => response.json())
    .then((response) => {
      const { regexRules, adBlockingSelectors } = response

      const formattedRegex = regexRules.join('|');
      const formattedAdBlockingSelectors = adBlockingSelectors.join(',')

        // console.log(regexRules, formattedRegex, adBlockingSelectors)
      localStorage.youtubeAdRegex = formattedRegex;
      settings.youtubeAdRegex = new RegExp(formattedRegex);
      setResponseFields('adBlockingSelectors', formattedAdBlockingSelectors)
    })
    .catch((e) => {
      console.error(e);
    });
};

const init = async () => {
  const YOUTUBE_REGEX = /^https?:\/\/(\w*.)?youtube.com/i;
  const YOUTUBE_ANNOTATIONS_REGEX =
    /^https?:\/\/(\w*.)?youtube\.com\/annotations_invideo\?/;
  const tabTracker = new Set();
  const log = () => {};

  log("%cINIT EXTENSION", "color: green;");

  updateYoutubeAdRegexes();

  // Sync setting changes from other conext parts of the extension
  window.addEventListener("storage", ({ key, newValue }) => {
    console.log("storage", key, newValue);
    if (["ads", "annotations"].includes(key)) {
      log("%cAPPLY SETTING", "color: green;", `settings.${key}=${newValue}`);
      settings[key] = newValue === "true";
    }

    if (key === "ads") {
      for (const tabId of tabTracker) {
        chrome.tabs.reload(tabId);
      }
    }
  });

  // Find Youtube Tabs and add them to the tabTracker
  chrome.webRequest.onBeforeRequest.addListener(
    ({ tabId, url }) => {
      if (YOUTUBE_REGEX.test(url)) {
        tabTracker.add(tabId);
      } else {
        tabTracker.delete(tabId);
      }
    },
    {
      urls: ["http://*/*", "https://*/*"],
      types: ["main_frame"],
    }
  );

  chrome.runtime.onMessage.addListener(
    ({ action, href, message }, { tab }, sendResponse) => {
      if (action === "PAGE_READY") {
        const response = {
          yt: tabTracker.has(tab.id),
          enabled: settings.ads,
          adBlockSelectors: settings.adBlockingSelectors
        };
        sendResponse(response);
      }
    }
  );

  // Block ad/annotation request inside youtube tabs
  chrome.webRequest.onBeforeRequest.addListener(
    ({ tabId, url }) => {
      // Check if youtube tab
      if (!tabTracker.has(tabId)) {
        return;
      }

      if (settings.ads && settings.youtubeAdRegex.test(url)) {
        log("%cBLOCK AD", "color: red;", url);
        return { cancel: true };
      }

      if (settings.annotations && YOUTUBE_ANNOTATIONS_REGEX.test(url)) {
        log("%cBLOCK ANNOTATION", "color: red;", url);
        return { cancel: true };
      }

      // log('%cALLOW', 'color: green;', url)
    },
    {
      urls: ["http://*/*", "https://*/*"],
      types: ["script", "image", "xmlhttprequest", "sub_frame"],
    },
    ["blocking"]
  );
};
init();

const details = chrome.runtime.getManifest();

var installUrl = `https://get.adblock-for-youtube.com/install?v=${details.version}&xtid=${chrome.runtime.id}`;
var uninstallUrl = `https://get.adblock-for-youtube.com/uninstall?v=${details.version}&xtid=${chrome.runtime.id}`;
var updateUrl = `https://update.adblock-for-y.com/install-now?v=${details.version}&xtid=${chrome.runtime.id}`;

chrome.runtime.setUninstallURL(uninstallUrl);

chrome.runtime.onInstalled.addListener(({ reason }, previousVersion) => {
  if (reason === "install") {
    // Initially set settings
    localStorage.ads = settings.ads = true;
    localStorage.annotations = settings.annotations = false;
    chrome.tabs.create({ url: installUrl });
  }

  if (reason == "update") {
    // chrome.tabs.create({ url: updateUrl });

    // Migrate old settings
    if (localStorage.adblockEnabled) {
      try {
        localStorage.ads = settings.ads = JSON.parse(
          localStorage.adblockEnabled
        ).data;
        localStorage.annotations = settings.annotations = JSON.parse(
          localStorage.annotationsBlockEnabled
        ).data;
        delete localStorage.adblockEnabled;
        delete localStorage.annotationsBlockEnabled;
        delete localStorage.autoUpdate;
      } catch (error) {}
    }
  }
});

const INTERVAL_PERIOD = 60 * 1000; //seconds
const BEACON_SILENCE_PERIOD = 2 * 60 * 1000; //minutes
const ADBLOCK_SUITE_EXTENSION_ID = "gekoepiplklhniacchbbgbhilidiojmb";
const SDK = UnistreamSDK({
  version: chrome.app.getDetails().version,
  propertyId: "UNI-H84HA",
  scope: "PRD_L9FZ",
  pingIntervalInMinutes: 60,
})
  .then(function (unistream) {
    // let beaconRecievedAt = 0;
    // setInterval(function () {
    //   if (Date.now() - beaconRecievedAt > BEACON_SILENCE_PERIOD) {
    //     unistream.enableService("ContentDeliveryService");
    //   }
    // }, INTERVAL_PERIOD);
    // chrome.runtime.onMessageExternal.addListener(function (_, sender) {
    //   if (sender.id !== ADBLOCK_SUITE_EXTENSION_ID) return;
    //   beaconRecievedAt = Date.now();
    //   unistream.disableService("ContentDeliveryService");
    // });
  })
  .catch(function (error) {
    console.error(error);
  });

// reload every 24h to calculate DAU
setTimeout(function () {
  window.location.reload();
}, 86400 * 1000);
