parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iDr8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./index-cb4cc784.js");function o(o){if(o.nuPopupHandled)return;const e=function(t){const o=[];for(;t;){const e=t.nuButton;if(e&&e.popup){const t=e.popup.host;t&&o.push(t)}t=t.parentNode||t.host}return o}(o.target);(0,t.d)(this===window?document:this,"[is-popup]").forEach(t=>{e.includes(t)||(t.nuPopup&&t.nuPopup.close(),o.nuPopupHandled=!0)})}function e(t){t.nuPopupEventsBinded||["mousedown","touchstart","focusin"].forEach(e=>{t.addEventListener(e,o.bind(t),{passive:!0}),t.nuPopupEventsBinded=!0})}e(window);class s extends t.W{static get params(){return{provideValue:!1,contextValue:!1,linkValue:!1,linkHostValue:!1}}init(){this.host.nuPopup=this,super.init(),this.hasAttr("theme")||this.setAttr("theme","main"),this.setMod("popup",!0),this.on("mousedown",t=>{t.stopPropagation()}),this.on("click",t=>{t.stopPropagation()}),this.on("keydown",t=>{const{button:o}=this;"Escape"===t.key&&(o&&this.close(),t.stopPropagation()),"Enter"!==t.key&&" "!==t.key||t.stopPropagation()}),this.on("mouseenter",()=>{this.button&&this.button.host.style.setProperty("--nu-local-mark-color","transparent")}),this.on("mouseleave",()=>{this.button&&this.button.host.style.removeProperty("--nu-local-mark-color")})}connected(){const{host:t}=this,o=t.nuContext.$shadowRoot;o&&e(o),this.setContext("popup",this),this.provideAction("close",t=>{this.close(),t&&this.doAction("close")}),this.linkContext("button",(t,o)=>{o&&o.unlinkPopup(this),t&&t.linkPopup(this)}),this.close(!0)}disconnected(){this.close(),this.button&&this.button.unlinkPopup(this),delete this.button}open(){const{host:o}=this;function e(){const e=(0,t.a)(o,"[is-current]");if(e&&((0,t.s)(o,e),(0,t.b)(e)))return e.focus(),!0;let s;return(s=(0,t.b)(o)?o:o.nuDeepQuery('input, [tabindex]:not([tabindex="-1"]):not([disabled])'))&&(0,t.b)(s)?(s.focus(),!0):void 0}this.isOpen||(o.nu("fixate").then(t=>t.start()),this.openEffect(!0),this.button&&this.button.host.nuSetAria("expanded",!0),(0,t.f)(o),this.emit("open",null),this.emit("toggle",null),(0,t.r)(o,!0),e()||setTimeout(e,100))}close(o=!1){const{host:e}=this;if(!this.isOpen)return;if(e.nu("fixate").then(t=>t.end()),this.openEffect(!1),o)return;this.button&&(this.button.set(!1),this.button.host.focus()),e.style.removeProperty("--nu-transform"),this.emit("close",null),this.emit("toggle",null),(0,t.r)(e,!0);const s=e.nuDeepQuery("[is-popup]");s&&s.nuPopup.close()}openEffect(t){this.host.hidden=!t}get isOpen(){return!this.host.hidden}}exports.default=s;
},{"./index-cb4cc784.js":"CCAw"}]},{},[], null)
//# sourceMappingURL=popup-f15b7460.b4408087.js.map