parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uZvY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DISABLED_ATTR=exports.default=void 0;var t=require("./index-cb4cc784.js");const e="disabled";exports.DISABLED_ATTR=e;class s extends t.B{constructor(t,e){super(t),"manual"===e&&(this.isManual=!0);const s=this.ref;s.addEventListener("focus",()=>{this.setEffect(!0)}),s.addEventListener("blur",()=>{this.setEffect(!1)}),document.activeElement===s&&this.setEffect(!0),this.linkContext("disabled",t=>{const e=!0===t;this.contextDisabled=e,this.set(!e&&!this.disabled)},!1)}init(){this.set(!this.disabled)}get disabled(){return this.host.hasAttribute("disabled")}changed(t,e){"disabled"===t&&this.set(null==e)}setEffect(t){this.host.nuSetMod("focus",t),this.host.nuSetContext("focus",t||null)}set(t){t&&!this.isManual?this.ref.setAttribute("tabindex","0"):this.isManual?this.ref.setAttribute("tabindex","-1"):this.ref.removeAttribute("tabindex"),this.host.nuSetMod("focusable",t||null)}}exports.default=s;
},{"./index-cb4cc784.js":"CCAw"}]},{},[], null)
//# sourceMappingURL=focusable-938b414a.87a95414.js.map