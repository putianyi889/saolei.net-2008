(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~2ef96a43"],{5550:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return w}));var r=n("7a23");var o=n("6ec5");const i=o["j"]?window:void 0,c=o["j"]?window.document:void 0;o["j"]&&window.navigator;function l(e){var t,n;const o=Object(r["unref"])(e);return null!==(n=null===(t=o)||void 0===t?void 0:t.$el)&&void 0!==n?n:o}function a(...e){let t,n,c,l;if(Object(o["n"])(e[0])?([n,c,l]=e,t=i):[t,n,c,l]=e,!t)return o["o"];let a=o["o"];const u=Object(r["watch"])(()=>Object(r["unref"])(t),e=>{a(),e&&(e.addEventListener(n,c,l),a=()=>{e.removeEventListener(n,c,l),a=o["o"]})},{immediate:!0,flush:"post"}),s=()=>{u(),a()};return Object(o["v"])(s),s}const u={boolean:{read:e=>null!=e?"true"===e:null,write:e=>String(e)},object:{read:e=>e?JSON.parse(e):null,write:e=>JSON.stringify(e)},number:{read:e=>null!=e?Number.parseFloat(e):null,write:e=>String(e)},any:{read:e=>null!=e?e:null,write:e=>String(e)},string:{read:e=>null!=e?e:null,write:e=>String(e)}};function s(e,t,n=(null===i||void 0===i?void 0:i.localStorage),c={}){var l;const{flush:s="pre",deep:d=!0,listenToStorageChanges:f=!0,window:b=i,eventFilter:v}=c,O=Object(r["ref"])(t),w=null==t?"any":"boolean"===typeof t?"boolean":"string"===typeof t?"string":"object"===typeof t||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number",h=null!==(l=c.serializer)&&void 0!==l?l:u[w];function p(r){if(n&&(!r||r.key===e))try{const o=r?r.newValue:n.getItem(e);null==o?(O.value=t,n.setItem(e,h.write(t))):O.value=h.read(o)}catch(o){console.warn(o)}}return p(),b&&f&&a(b,"storage",p),Object(o["z"])(O,()=>{if(n)try{null==O.value?n.removeItem(e):n.setItem(e,h.write(O.value))}catch(t){console.warn(t)}},{flush:s,deep:d,eventFilter:v}),O}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function f(e=null,t={}){const{baseUrl:n="",rel:i="icon",document:l=c}=t,a=Object(r["isRef"])(e)?e:Object(r["ref"])(e),u=e=>{null===l||void 0===l||l.head.querySelectorAll(`link[rel*="${i}"]`).forEach(t=>t.href=`${n}${e}`)};return Object(r["watch"])(a,(e,t)=>{Object(o["n"])(e)&&e!==t&&u(e)},{immediate:!0}),a}function b(e,t,n={}){const{window:c=i}=n,a=d(n,["window"]);let u;const s=c&&"IntersectionObserver"in c,f=()=>{u&&(u.disconnect(),u=void 0)},b=Object(r["watch"])(()=>l(e),e=>{f(),s&&c&&e&&(u=new c.MutationObserver(t),u.observe(e,a))},{immediate:!0}),v=()=>{f(),b()};return Object(o["v"])(v),{isSupported:s,stop:v}}var v;(function(e){e["UP"]="UP",e["RIGHT"]="RIGHT",e["DOWN"]="DOWN",e["LEFT"]="LEFT",e["NONE"]="NONE"})(v||(v={}));function O(e=null,t={}){var n,i;const{document:l=c,observe:a=!1}=t,u=Object(r["ref"])(null!==(n=null!==e&&void 0!==e?e:null===l||void 0===l?void 0:l.title)&&void 0!==n?n:null);return Object(r["watch"])(u,(e,t)=>{Object(o["n"])(e)&&e!==t&&l&&(l.title=e)},{immediate:!0}),a&&l&&b(null===(i=l.head)||void 0===i?void 0:i.querySelector("title"),()=>{l&&l.title!==u.value&&(u.value=l.title)},{childList:!0}),u}o["g"];function w(e="history",t={}){const{window:n=i}=t;if(!n)return Object(r["reactive"])(Object.assign({}));const c=Object(r["computed"])(()=>{const e=n.location.hash||"",t=e.indexOf("?");return t>0?e.substring(0,t):e}),l=()=>{if("hash"===e){const e=n.location.hash||"",t=e.indexOf("?");return new URLSearchParams(t>=0?e.substring(t+1):"")}return new URLSearchParams(n.location.search||"")};let u=l();const s=Object(r["reactive"])(Object.assign({}));function d(e,t){return s[e]=t}function f(){Object.keys(s).forEach(e=>delete s[e]);for(const e of u.keys()){const t=u.getAll(e);d(e,t.length>1?t:u.get(e)||"")}}f();const{pause:b,resume:v}=Object(o["q"])(s,()=>{u=new URLSearchParams(""),Object.keys(s).forEach(e=>{const t=s[e];Array.isArray(t)?t.forEach(t=>u.append(e,t)):u.set(e,t)}),O(u)},{deep:!0});function O(t,r){b(),r&&f();const o=!t.keys().next(),i=o?c.value:"hash"===e?`${c.value}?${t}`:`?${t}${c.value}`;n&&n.history.replaceState({},"",n.location.pathname+i),v()}return a(n,"popstate",()=>{u=l(),O(u,!0)}),s}}}]);