parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"smi6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./index-cb4cc784.js");class i extends t.W{static get params(){return{contextValue:!0,provideValue:!1}}init(){this.props.disabled=(t=>{const i=null!=t;return i?this.unlinkListBox():this.linkListBox(),i}),this.forceLinkValue(),this.host.nuOption=this,super.init(),this.linkContext("listbox",t=>{this.listbox&&this.removeOption(),this.listbox=t,t&&this.hasValue&&(this.addOption(t),this.setCurrent())},!1),this.on("click",()=>{this.doAction("input",this.value),this.doAction("close")})}disconnected(){super.disconnected(),this.listbox&&this.hasValue&&this.removeOption()}fromContextValue(t){this.log("link context value",t),this.listbox&&(this.addOption(),this.setCurrent())}setValue(t,i){this.unlinkListBox(),super.setValue(t,i),this.linkListBox()}linkListBox(){this.listbox&&this.hasValue&&!this.disabled&&(this.addOption(),this.setCurrent())}unlinkListBox(){this.listbox&&this.hasValue&&this.removeOption()}addOption(t=this.listbox){t.addOption(this)}setCurrent(){const i=!!this.listbox&&(0,t.i)(this.value,this.listbox.value);this.setMod("current",i),this.setAria("selected",i||null),this.listbox&&i&&this.listbox.setAria("activedescendant",this.uniqId)}removeOption(){this.listbox&&this.listbox.removeOption(this)}}exports.default=i;
},{"./index-cb4cc784.js":"CCAw"}]},{},[], null)
//# sourceMappingURL=option-d37d9461.79f3d975.js.map