var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector("form.form"),s={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:1e4,clickToClose:!0,cssAnimationStyle:"from-right"};function l(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.addEventListener("click",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.currentTarget.elements;let i=Number(t.value),u=Number(o.value),a=Number(n.value);for(let t=1;t<=a;t+=1)i+=u,l(t,i).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,s)})).catch((({position:e,delay:t})=>{r.Notify.success(`❌ Rejected promise ${e} in ${t}ms`,s)})),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.cfb5ca38.js.map
