parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DEwC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./index-dbc64107.js");class t extends e.B{connected(){const{host:t}=this,n=this.parent=this.host.parentNode;n&&n.nuElement&&!n.hasAttribute("describedby")&&n.setAttribute("describedby",this.nuId);let s=!1,o=!1;t.hidden=!0,this.setMod("tooltip",!0);const i=()=>{s=!0,o||(this.nu("fixate").then(e=>e.start()),t.hidden=!1,n.nuSetMod("tooltip-shown",!0),setTimeout(()=>{(0,e.f)(t)}))},d=()=>{s=!1,o=!1,this.nu("fixate").then(e=>e.end()),t.hidden=!0,n.nuSetMod("tooltip-shown",!1)},r=()=>{o=!0,s||(this.nu("fixate").then(e=>e.start()),t.hidden=!1,n.nuSetMod("tooltip-shown",!0))},h=()=>{o=!1,s||(this.nu("fixate").then(e=>e.end()),t.hidden=!0,n.nuSetMod("tooltip-shown",!1))};n.addEventListener("mouseenter",i),n.addEventListener("mouseleave",d),this.removeListeners=(()=>{n.removeEventListener("mouseenter",i),n.removeEventListener("mouseleave",d)}),t.nuSetContextHook("focus",e=>{e?r():h()})}disconnected(){const e=this.removeListeners;e&&e()}}exports.default=t;
},{"./index-dbc64107.js":"KYFX"}]},{},[], null)
//# sourceMappingURL=tooltip-bd78b5e1.fa35a6b7.js.map