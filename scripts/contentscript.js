const WEBSTORE_LINK = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`;

class Blocker {
  constructor(enabled, adBlockSelectors) {
    this.filters = [
      new CosmeticFilter(adBlockSelectors),
      new Dialog(enabled),
      new SkipVideoAds(),
    ];
    this.enabled = enabled;

    if (enabled) {
      this.start()
    }
  }

  start() {
    this.filters.forEach((filter) => {
      filter.start();
    });
    this.enabled = true;
  }
}

class Dialog {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.handleClose = this.handleClose.bind(this);
    if (this.enabled) {
      chrome.storage.local.get(["ratingDialogShown"], (result) => {
        if (!result.ratingDialogShown) {
          try {
            this.create();
          } catch (e) {
            console.error(e);
          }
        }
      });

      waitFor(
        "ytd-app",
        (target) => {
          new MutationObserver(([mutation]) => {
            if (this.dialog && mutation.target) {
              const isWatchPage = mutation.target.hasAttribute("is-watch-page");
              this.dialog.style.display = isWatchPage ? "none" : "block";
            }
          }).observe(target, {
            attributes: true,
            attributeFilter: ["is-watch-page"],
          });
        },
        100
      );
    }
  }

  handleClose(event) {
    document.body.removeChild(this.dialog);
    chrome.storage.local.set({ ratingDialogShown: true });
  }

  create() {
    // Create dialog
    const dialog = document.createElement("DIV");
    dialog.classList.add("ab4yt-dialog");

    // Create closeIcon
    const closeIcon = document.createElement("A");
    closeIcon.classList.add("ab4yt-close-icon");
    closeIcon.appendChild(document.createTextNode(" "));
    closeIcon.addEventListener("click", this.handleClose);
    dialog.appendChild(closeIcon);

    // Create header
    const header = document.createElement("DIV");
    header.appendChild(
      document.createTextNode(chrome.i18n.getMessage("extension_name"))
    );
    header.classList.add("ab4yt-dialog-header");
    dialog.appendChild(header);

    // Create ShareLink
    const webstoreLink = document.createElement("A");
    webstoreLink.classList.add("ab4yt-webstore-link");
    webstoreLink.setAttribute("href", `${WEBSTORE_LINK}/reviews`);
    webstoreLink.setAttribute("target", "_blank");
    webstoreLink.appendChild(
      document.createTextNode(chrome.i18n.getMessage("rate_this_extension"))
    );
    webstoreLink.addEventListener("click", this.handleClose);
    dialog.appendChild(webstoreLink);

    const stylesheet = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.appendChild(
      document.createTextNode(`
      .ab4yt-dialog {
        display: none;
        background-color: #000000c7;
        position: fixed;
        right: 10px;
        z-index: 99999999999;
        top: 68px;
        padding: 0;
        margin: 0;
        border-radius: 4px;
        border: 1px solid white;
        text-align: center;
      }

      .ab4yt-close-icon {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 10px;
        height: 10px;
        opacity: 0.8;
      }
      .ab4yt-close-icon:hover {
        opacity: 1;
      }
      .ab4yt-close-icon:before, .ab4yt-close-icon:after {
        position: absolute;
        left: 5px;
        content: ' ';
        height: 10px;
        width: 2px;
        background-color: white;
      }
      .ab4yt-close-icon:before {
        transform: rotate(45deg);
      }
      .ab4yt-close-icon:after {
        transform: rotate(-45deg);
      }

      .ab4yt-dialog-header {
        font-size: 16px;
        padding: 16px 24px;
        color: white;
      }

      .ab4yt-webstore-link {
        display: block;
        font-size: 13px;
        color: white;
        padding: 16px 24px;
        text-decoration: none;
        opacity: 0.8;
        border-top: 1px solid white;
        text-transform: uppercase;
      }

      .ab4yt-webstore-link:hover {
        opacity: 1;
      }
    `)
    );
    dialog.appendChild(stylesheet);
    dialog.style.display = this.enabled ? "block" : "none";

    this.dialog = dialog;

    domReady(() => {
      document.body.appendChild(this.dialog);
    });

    return dialog;
  }

  start() {
    this.enabled = true;
  }
}

class CosmeticFilter {
  adBlockSelectors = ''

  constructor(adBlockSelectors) {
    this.adBlockSelectors = adBlockSelectors
  }

  start() {
    if (!this.adBlockSelectors) {
      return;
    }

    const cssContent = `${this.adBlockSelectors} { display: none !important; }`;

    const styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    styleEl.textContent = cssContent;
    (document.head || document.documentElement).appendChild(styleEl);
  }
}

class SkipVideoAds {
  start() {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.innerHTML = 'function setConstant(source,args){function setConstant(source,property,value,stack){if(!property||!matchStackTrace(stack,(new Error).stack)){return}var constantValue;if(value==="undefined"){constantValue=undefined}else{return}var canceled=false;var mustCancel=function mustCancel(value){if(canceled){return canceled}canceled=value!==undefined&&constantValue!==undefined&&typeof value!==typeof constantValue;return canceled};var trapProp=function trapProp(base,prop,configurable,handler){if(!handler.init(base[prop])){return false}var origDescriptor=Object.getOwnPropertyDescriptor(base,prop);var prevSetter;if(origDescriptor instanceof Object){if(!origDescriptor.configurable){return false}base[prop]=constantValue;if(origDescriptor.set instanceof Function){prevSetter=origDescriptor.set}}Object.defineProperty(base,prop,{configurable:configurable,get:function get(){return handler.get()},set:function set(a){if(prevSetter!==undefined){prevSetter(a)}handler.set(a)}});return true};var setChainPropAccess=function setChainPropAccess(owner,property){var chainInfo=getPropertyInChain(owner,property);var base=chainInfo.base;var prop=chainInfo.prop,chain=chainInfo.chain;var undefPropHandler={factValue:undefined,init:function init(a){this.factValue=a;return true},get:function get(){return this.factValue},set:function set(a){if(this.factValue===a){return}this.factValue=a;if(a instanceof Object){setChainPropAccess(a,chain)}}};var endPropHandler={init:function init(a){if(mustCancel(a)){return false}return true},get:function get(){return constantValue},set:function set(a){if(!mustCancel(a)){return}constantValue=a}};if(!chain){var isTrapped=trapProp(base,prop,false,endPropHandler);return}var propValue=owner[prop];if(propValue instanceof Object||typeof propValue==="object"&&propValue!==null){setChainPropAccess(propValue,chain)}trapProp(base,prop,true,undefPropHandler)};setChainPropAccess(window,property)}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(pos===-1){return{base:base,prop:chain}}var prop=chain.slice(0,pos);if(base===null){return{base:base,prop:prop,chain:chain}}var nextBase=base[prop];chain=chain.slice(pos+1);if(nextBase!==undefined){return getPropertyInChain(nextBase,chain)}Object.defineProperty(base,prop,{configurable:true});return{base:base,prop:prop,chain:chain}}function toRegExp(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var DEFAULT_VALUE=".?";var FORWARD_SLASH="/";if(input===""){return new RegExp(DEFAULT_VALUE)}if(input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH){return new RegExp(input.slice(1,-1))}var escaped=input.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||stackMatch===""){return true}var stackRegexp=toRegExp(stackMatch);var refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return getNativeRegexpTest().call(stackRegexp,refinedStackTrace)}function getNativeRegexpTest(){return Object.getOwnPropertyDescriptor(RegExp.prototype,"test").value}var updatedArgs=args?[].concat(source).concat(args):[source];try{setConstant.apply(this,updatedArgs)}catch(e){console.log(e)}}function jsonPrune(source,args){function jsonPrune(source,propsToRemove,requiredInitialProps,stack){if(!!stack&&!matchStackTrace(stack,(new Error).stack)){return}var log=console.log.bind(console);var prunePaths=propsToRemove!==undefined&&propsToRemove!==""?propsToRemove.split(/ +/):[];var requiredPaths=requiredInitialProps!==undefined&&requiredInitialProps!==""?requiredInitialProps.split(/ +/):[];function isPruningNeeded(root){if(!root){return false}var shouldProcess;if(prunePaths.length===0&&requiredPaths.length>0){var rootString=JSON.stringify(root);var matchRegex=toRegExp(requiredPaths.join(""));var shouldLog=matchRegex.test(rootString);if(shouldLog){log(window.location.hostname,root);shouldProcess=false;return shouldProcess}}for(var i=0;i<requiredPaths.length;i+=1){var requiredPath=requiredPaths[i];var lastNestedPropName=requiredPath.split(".").pop();var hasWildcard=requiredPath.indexOf(".*.")>-1||requiredPath.indexOf("*.")>-1||requiredPath.indexOf(".*")>-1||requiredPath.indexOf(".[].")>-1||requiredPath.indexOf("[].")>-1||requiredPath.indexOf(".[]")>-1;var details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);shouldProcess=!hasWildcard;for(var _i=0;_i<details.length;_i+=1){if(hasWildcard){shouldProcess=!(details[_i].base[lastNestedPropName]===undefined)||shouldProcess}else{shouldProcess=!(details[_i].base[lastNestedPropName]===undefined)&&shouldProcess}}}return shouldProcess}var jsonPruner=function jsonPruner(root){if(prunePaths.length===0&&requiredPaths.length===0){log(window.location.hostname,root);return root}try{if(isPruningNeeded(root)===false){return root}prunePaths.forEach((function(path){var ownerObjArr=getWildcardPropertyInChain(root,path,true);ownerObjArr.forEach((function(ownerObj){if(ownerObj!==undefined&&ownerObj.base){delete ownerObj.base[ownerObj.prop]}}))}))}catch(e){log(e.toString())}return root};var nativeJSONParse=JSON.parse;var jsonParseWrapper=function jsonParseWrapper(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}var root=nativeJSONParse.apply(JSON,args);return jsonPruner(root)};jsonParseWrapper.toString=nativeJSONParse.toString.bind(nativeJSONParse);JSON.parse=jsonParseWrapper;var nativeResponseJson=Response.prototype.json;var responseJsonWrapper=function responseJsonWrapper(){var promise=nativeResponseJson.apply(this);return promise.then((function(obj){return jsonPruner(obj)}))};if(typeof Response==="undefined"){return}Response.prototype.json=responseJsonWrapper}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||stackMatch===""){return true}var stackRegexp=toRegExp(stackMatch);var refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return getNativeRegexpTest().call(stackRegexp,refinedStackTrace)}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var output=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var pos=chain.indexOf(".");if(pos===-1){if(chain===getWildcardSymbol()||chain==="[]"){for(var key in base){if(Object.prototype.hasOwnProperty.call(base,key)){output.push({base:base,prop:key})}}}else{output.push({base:base,prop:chain})}return output}var prop=chain.slice(0,pos);var shouldLookThrough=prop==="[]"&&Array.isArray(base)||prop===getWildcardSymbol()&&base instanceof Object;if(shouldLookThrough){var nextProp=chain.slice(pos+1);var baseKeys=Object.keys(base);baseKeys.forEach((function(key){var item=base[key];getWildcardPropertyInChain(item,nextProp,lookThrough,output)}))}var nextBase=base[prop];chain=chain.slice(pos+1);if(nextBase!==undefined){getWildcardPropertyInChain(nextBase,chain,lookThrough,output)}return output}function toRegExp(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var DEFAULT_VALUE=".?";var FORWARD_SLASH="/";if(input===""){return new RegExp(DEFAULT_VALUE)}if(input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH){return new RegExp(input.slice(1,-1))}var escaped=input.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getWildcardSymbol(){return"*"}function getNativeRegexpTest(){return Object.getOwnPropertyDescriptor(RegExp.prototype,"test").value}var updatedArgs=args?[].concat(source).concat(args):[source];try{jsonPrune.apply(this,updatedArgs)}catch(e){console.log(e)}}const params1={args:["ytInitialPlayerResponse.adPlacements","undefined"]};const params2={args:["playerResponse.adPlacements","undefined"]};const params3={args:["0.playerResponse.adPlacements 0.playerResponse.playerAds playerResponse.adPlacements playerResponse.playerAds adPlacements playerAds"]};setConstant(params1,params1.args);setConstant(params2,params2.args);jsonPrune(params3,params3.args);';
    const injectionElement = document.head || document.documentElement;
    injectionElement.appendChild(scriptTag);

    if (scriptTag.parentNode) {
      scriptTag.parentNode.removeChild(scriptTag);
    }
  }
}

function waitFor(selector, callback, timeout) {
  const element = document.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    if (timeout) {
      return window.setTimeout(() => {
        return window.requestAnimationFrame(() => {
          waitFor(selector, callback);
        });
      }, timeout);
    }
    return window.requestAnimationFrame(() => {
      waitFor(selector, callback);
    });
  }
}

function domReady(callback) {
  if (document.readyState === "complete") {
    callback();
  } else {
    window.addEventListener("load", callback, {
      once: true,
    });
  }
}

// Notify background so it can inject cosmetic filter
chrome.runtime.sendMessage(
  {
    action: "PAGE_READY",
  },
  ({ yt, enabled, adBlockSelectors }) => {
    if (!yt) {
      return;
    }

    if (!/youtube\.com/.test(window.location.origin)) {
      return;
    }

    if (!window.blocker) {
      window.blocker = new Blocker(enabled, adBlockSelectors);
    } else if (enabled) {
      window.blocker.start();
    }
  }
);
