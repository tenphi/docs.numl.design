parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XCav":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./index-cb4cc784.js");class e extends t.W{static get params(){return{input:!0,provideValue:!0}}init(){this.isPopup=this.host.hasAttribute("nu-popup"),this.isPopup&&this.forceLinkValue(),this.host.nuListBox=this,this.options=[],super.init(),this.setName("listbox"),this.setContext("listbox",this,!0),this.linkContext("button",t=>{t&&this.linkValue&&(t.listbox=this,t.popup&&t.setAria("haspopup","listbox"))}),this.on("keydown",t=>{this.onKeyDown(t)})}setValue(e,s){e!==this.value&&(super.setValue(e,s),setTimeout(()=>{const e=this.activeOption;e&&(0,t.s)(this.host,e.host)}))}onKeyDown(t){const e=this.orderedOptions,s=this.activeOption;if(!e.length||s&&!e.includes(s))return;const i=e.indexOf(s);let o;switch(t.key){case"Home":if(!this.isEdgeMoveAllowed())return;o=e[0].value;break;case"End":if(!this.isEdgeMoveAllowed())return;o=e.slice(-1)[0].value;break;case"ArrowUp":if(i>0)o=e[i-1].value;else{if(-1!==i)return;o=e.slice(-1)[0].value}this.openPopup();break;case"ArrowDown":if(i<e.length-1)o=e[i+1].value;else{if(-1!==i)return;o=e[0].value}this.openPopup();break;case"Enter":t.target===this.host&&this.isPopup&&this.nu("popup").then(t=>t.close());default:return}t.nuListBoxHandled=!0,setTimeout(()=>{this.setValue(o)}),t.preventDefault()}isEdgeMoveAllowed(){if(!this.isPopup)return!0;const t=this.host.nuPopup;return!t||t.isOpen}openPopup(){if(!this.isPopup)return;const t=this.host.nuPopup;t&&!t.isOpen&&this.button&&this.button.set(!0,!0)}addOption(t){this.options.includes(t)||this.options.push(t)}get orderedOptions(){const e=this.options.map(t=>t.host);return(0,t.d)(this.host,"[nu-option]:not([disabled])").filter(t=>e.includes(t)).map(t=>this.options.find(e=>e.host===t)).filter(t=>t)}get activeOption(){return this.options.find(e=>(0,t.i)(e.value,this.value))}removeOption(t){this.options.includes(t)||this.options.splice(this.options.indexOf(t),1)}getOptionByValue(e){return this.options.find(s=>(0,t.i)(s.value,e))}}exports.default=e;
},{"./index-cb4cc784.js":"CCAw"}]},{},[], null)
//# sourceMappingURL=listbox-bc6e4392.dd62b142.js.map