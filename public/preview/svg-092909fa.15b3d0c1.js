parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cUzI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./index-cb4cc784.js");class e extends t.B{connected(){const t=this.host.getAttribute("src");t&&this.inject(t)}changed(t){this.isConnected&&"name"===t&&this.apply()}inject(e){const{host:i}=this;e&&e.trim()&&t.S.load(e).then(e=>{const s=(0,t.y)(e),c=s.getAttribute("width"),n=s.getAttribute("height"),r=s.getAttribute("viewBox");c&&n&&(r||s.setAttribute("viewBox",`0,0,${c},${n}`)),i.innerHTML="",i.appendChild(s)}).catch(()=>"")}}exports.default=e;
},{"./index-cb4cc784.js":"CCAw"}]},{},[], null)
//# sourceMappingURL=svg-092909fa.15b3d0c1.js.map