parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BVSQ":[function(require,module,exports) {
var define;
var o,r=function(){var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(o,r){if(!e[o]){e[o]={};for(var n=0;n<o.length;n++)e[o][o.charAt(n)]=n}return e[o][r]}var s={compressToBase64:function(o){if(null==o)return"";var n=s._compress(o,6,function(o){return r.charAt(o)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return null==o?"":""==o?null:s._decompress(o.length,32,function(n){return t(r,o.charAt(n))})},compressToUTF16:function(r){return null==r?"":s._compress(r,15,function(r){return o(r+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:s._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=s.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;e<t;e++){var i=r.charCodeAt(e);n[2*e]=i>>>8,n[2*e+1]=i%256}return n},decompressFromUint8Array:function(r){if(null==r)return s.decompress(r);for(var n=new Array(r.length/2),e=0,t=n.length;e<t;e++)n[e]=256*r[2*e]+r[2*e+1];var i=[];return n.forEach(function(r){i.push(o(r))}),s.decompress(i.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":s._compress(o,6,function(o){return n.charAt(o)})},decompressFromEncodedURIComponent:function(o){return null==o?"":""==o?null:(o=o.replace(/ /g,"+"),s._decompress(o.length,32,function(r){return t(n,o.charAt(r))}))},compress:function(r){return s._compress(r,16,function(r){return o(r)})},_compress:function(o,r,n){if(null==o)return"";var e,t,s,i={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(s=0;s<o.length;s+=1)if(u=o.charAt(s),Object.prototype.hasOwnProperty.call(i,u)||(i[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(i,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=i[a],e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),i[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=i[a],e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:s._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(r,n,e){var t,s,i,p,u,c,a,l=[],f=4,h=4,d=3,m="",v=[],w={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(i=0,u=Math.pow(2,2),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;switch(i){case 0:for(i=0,u=Math.pow(2,8),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;a=o(i);break;case 1:for(i=0,u=Math.pow(2,16),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;a=o(i);break;case 2:return""}for(l[3]=a,s=a,v.push(a);;){if(w.index>r)return"";for(i=0,u=Math.pow(2,d),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;switch(a=i){case 0:for(i=0,u=Math.pow(2,8),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;l[h++]=o(i),a=h-1,f--;break;case 1:for(i=0,u=Math.pow(2,16),c=1;c!=u;)p=w.val&w.position,w.position>>=1,0==w.position&&(w.position=n,w.val=e(w.index++)),i|=(p>0?1:0)*c,c<<=1;l[h++]=o(i),a=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[a])m=l[a];else{if(a!==h)return null;m=s+s.charAt(0)}v.push(m),l[h++]=s+m.charAt(0),s=m,0==--f&&(f=Math.pow(2,d),d++)}}};return s}();"function"==typeof o&&o.amd?o(function(){return r}):"undefined"!=typeof module&&null!=module&&(module.exports=r);
},{}],"wMNP":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"CzFT":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"wMNP"}],"HiX9":[function(require,module,exports) {
"use strict";var _lzString=_interopRequireDefault(require("lz-string"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}let hash,scale,markup,size;require("_bundle_loader")(require.resolve("./numl/index")).then(e=>{console.log("NUDE is loaded",`v${e.default.version}`)});const root=document.querySelector("#content"),theme=document.querySelector("nu-theme"),props=document.querySelector("nu-props"),html=document.querySelector("html"),{dataset:dataset}=html,LIGHT_SCHEME="nu-scheme-light",DARK_SCHEME="nu-scheme-dark",HIGH_CONTRAST="nu-contrast-high",LOW_CONTRAST="nu-contrast-low",REDUCE_MOTION="nu-reduce-motion";function clearSchemeSwitch(){[LIGHT_SCHEME,DARK_SCHEME].forEach(e=>html.classList.remove(e))}function clearContrastSwitch(){[HIGH_CONTRAST,LOW_CONTRAST].forEach(e=>html.classList.remove(e))}function clearReducedMotionSwitch(){[REDUCE_MOTION].forEach(e=>html.classList.remove(e))}function setScheme(e){switch(clearSchemeSwitch(),e){case"light":case"dark":dataset.nuScheme=e;break;default:delete dataset.nuScheme}}function setContrast(e){switch(clearContrastSwitch(),e){case"high":case"normal":dataset.nuContrast=e;break;default:delete dataset.nuContrast}}function setReducedMotion(e){switch(clearReducedMotionSwitch(),e){case"yes":dataset.nuReduceMotion="";break;default:delete dataset.nuReduceMotion}}function applyOptions(e={}){theme.setAttribute("hue","hue"in e?e.hue:270),"auto"===e.saturationType?theme.removeAttribute("saturation"):theme.setAttribute("saturation",e.saturation||50),"main"!==e.themeType?theme.setAttribute("mod",e.themeType):theme.removeAttribute("mod"),e.pastel?theme.setAttribute("pastel",""):theme.removeAttribute("pastel"),props.setAttribute("gap",`${e.gap||".5"}rem`),props.setAttribute("radius",`${e.radius||".5"}rem`),props.setAttribute("border-width",`${e.borderWidth||"1"}px`),props.setAttribute("transition-time",`${e.transitionTime||"80"}ms`),setScheme(e.scheme||"auto"),setContrast(e.contrast||"auto"),setReducedMotion(e.reducedMotion||!1),window.location===window.parent.location&&(document.body.style.backgroundColor="var(--nu-main-bg-color)")}function preview(){const currentHash=window.location.hash.slice(1);if(currentHash===hash)return;let data={};try{data=JSON.parse(decodeURIComponent(currentHash))}catch(e){try{data=JSON.parse(_lzString.default.decompressFromEncodedURIComponent(currentHash))}catch(e){return void console.log("!",e)}}size=data.size||"md",scale=data.scale||1,markup=data.markup||"",markup=markup.replace(/responsive="[^"]+?"/g,e=>e.replace(/[\d.]+/g,e=>String(Number(e)*scale)));const{body:body}=document;body.style.width=`${100/scale}%`,body.style.height=`${100/scale}%`,body.style.transform=`scale(${scale}, ${scale})`,body.style.transformOrigin="left top",markup=markup.replace(/<script>[^]+?<\/script>/gm,s=>{try{eval(s.slice(8,-9))}catch(e){console.log("preview:",e.toString())}return""}),root.innerHTML=markup,root.setAttribute("size",size),hash=currentHash,applyOptions(data.options)}window.addEventListener("beforeunload",e=>{const t=document.querySelector('[nu-id="redirect-url"], #redirect-url'),{href:r}=document.activeElement;t&&r&&(t.hidden=!0,t.innerText=r,e.preventDefault(),e.returnValue="")}),preview();
},{"lz-string":"BVSQ","_bundle_loader":"CzFT","./numl/index":[["numl.1479ab21.js","qsfB"],"numl.1479ab21.js.map","qsfB"]}],"ZinA":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("CzFT");b.register("js",require("ZinA"));
},{}]},{},[0,"HiX9"], null)
//# sourceMappingURL=preview.9e7e3e6b.js.map