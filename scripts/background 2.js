const API_URL = 'https://api.adblock-for-youtube.com';
const youtubeAdRegexesFallback = ["(doubleclick.net)","(adservice.google.)","(youtube.com/api/stats/ads)","(&ad_type=)","(&adurl=)","(-pagead-id.)","(doubleclick.com)","(/ad_status.)","(/api/ads/)","(/googleads)","(/pagead/gen_)","(/pagead/lvz?)","(/pubads.)","(/pubads_)","(/securepubads)","(=adunit&)","(googlesyndication.com)","(innovid.com)","(youtube.com/pagead/)","(google.com/pagead/)","(flashtalking.com)","(googleadservices.com)","(s0.2mdn.net/ads)","(www.youtube.com/ptracking)","(www.youtube.com/pagead)","(www.youtube.com/get_midroll_)"].join('|');

const settings = {
  ads: localStorage.ads === "true",
  annotations: localStorage.ads === "true",
  youtubeAdRegex: new RegExp(localStorage.youtubeAdRegex || youtubeAdRegexesFallback),
};

const updateYoutubeAdRegexes = () => {
  fetch(`${API_URL}/api/v1/adregex`)
    .then(response => response.json())
    .then(response => {
      localStorage.youtubeAdRegex = response;
      settings.youtubeAdRegex = new RegExp(response);
    })
    .catch(e => {
      console.error(e);
    });
};

const init = async () => {
  const YOUTUBE_REGEX = /^https?:\/\/(\w*.)?youtube.com/i;
  const YOUTUBE_ANNOTATIONS_REGEX = /^https?:\/\/(\w*.)?youtube\.com\/annotations_invideo\?/;
  const tabTracker = new Set();
  const log = () => { };

  log("%cINIT EXTENSION", "color: green;");

  updateYoutubeAdRegexes();

  // Sync setting changes from other conext parts of the extension
  window.addEventListener("storage", ({ key, newValue }) => {
    if (["ads", "annotations"].includes(key)) {
      log("%cAPPLY SETTING", "color: green;", `settings.${key}=${newValue}`);
      settings[key] = newValue === "true";
    }

    if (key === "ads") {
      for (const tabId of tabTracker) {
        chrome.tabs.sendMessage(tabId, {
          action: "CHANGE_SETTINGS",
          payload: {
            enabled: newValue === "true",
          },
        });
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

  // Add cosmetic filters to all youtube tabs
  chrome.runtime.onMessage.addListener(({ action }, { tab }, sendResponse) => {
    if (action === "PAGE_READY") {
      sendResponse({ yt: tabTracker.has(tab.id), enabled: settings.ads });
    }
  });

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
}
init();

const details = chrome.runtime.getManifest();

var installUrl = `https://get.adblock-for-youtube.com/install?v=${details.version}&xtid=${chrome.runtime.id}`;
var uninstallUrl = `https://get.adblock-for-youtube.com/uninstall?v=${details.version}&xtid=${chrome.runtime.id}`;
var updateUrl = `https://get.adblock-for-youtube.com/update?v=${details.version}&xtid=${chrome.runtime.id}`;

chrome.runtime.setUninstallURL(uninstallUrl);

chrome.runtime.onInstalled.addListener(({ reason }, previousVersion) => {
  if (reason === "install") {
    // Initially set settings
    localStorage.ads = settings.ads = true;
    localStorage.annotations = settings.annotations = false;
    chrome.tabs.create({ url: installUrl });
  }

  if (reason == "update") {

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
      } catch (error) { }
    }
  }
});

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);


// Check for update page
try {

  (async () => {

    var updateResponse = await fetch(`${API_URL}/api/v1/update?v=${details.version}&xtid=${chrome.runtime.id}`);
    updateResponse = await updateResponse.json();

    if (updateResponse.hasOwnProperty('open') && updateResponse.open == true) {

      let updatePageVersion = window.localStorage.getItem('updatePageVersion');

      console.log(updatePageVersion);

      if (!updatePageVersion) {

        updatePageVersion = details.version.replaceAll('.', '');
      }

      updatePageVersion = parseInt(updatePageVersion);

      console.log(updatePageVersion);

      if (updatePageVersion >= parseInt(updateResponse.version)) {

        return;
      }

      let url = updateUrl;

      if (updateResponse.hasOwnProperty('url')) {

        url = updateUrl + `?v=${details.version}&xtid=${chrome.runtime.id}`;
      }

      updatePageVersion

      chrome.tabs.create({ url: url });

      window.localStorage.setItem('updatePageVersion', updateResponse.version.toString());
    }
  })();

} catch (e) {

  console.error(e);
}

ga('create', 'UA-226361667-1', 'auto');
ga('set', 'checkProtocolTask', function() {});
ga('require', 'displayfeatures');
ga('send', 'pageview', 'background.html?v=' + details.version);

// reload every 24h to calculate DAU
setTimeout(function () {
  window.location.reload();
}, 86400 * 1000);

