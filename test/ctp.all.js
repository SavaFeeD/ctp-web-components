(()=>{"use strict";class e extends HTMLElement{constructor(e){super(),this.WebComponentWrapper=e;const t=this.attachShadow({mode:"open"});this.subscribeFromWrapper();const n=this.serialize("default");t.appendChild(n)}subscribeFromWrapper(){var e;(null===(e=this.WebComponentWrapper)||void 0===e?void 0:e.emitter)&&this.WebComponentWrapper.emitter().eventList.forEach((e=>{this.addEventListener(e.type,e.action)}))}serialize(e){var t;const n={base:null,HTMLString:this.WebComponentWrapper.template};"default"===e&&(n.base=document.createElement("div"));const s=/(<).*?(>).*?({{).*?(}}).*?(<\/).*?(>)/gm,r={straps:new Proxy({},{})};if(null===(t=Object.keys(r))||void 0===t?void 0:t.length){const e=n.HTMLString.match(s);console.log(e)}return n.base.innerHTML=n.HTMLString,n.base}}class t{constructor(){this.template=null,this.template="<h1>ASD {{ straps }}</h1>"}}var n;const s={"ctp-preview":class extends e{constructor(){super(new t)}}};null!==(n=window.CrazyTeaParty)&&void 0!==n||(window.CrazyTeaParty={version:"1.0.0",components:{}}),window.CrazyTeaParty.components=s,function(){const e=window.customElements;Object.keys(s).forEach((t=>{const n=s[t];e.define(t,n)}))}(),window.CrazyTeaParty={}})();