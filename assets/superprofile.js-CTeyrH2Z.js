(function(){function A(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function ut(t,e){return e?t.querySelector(e):null}function W(t,e){if(!e)return null;for(const n of e.split(",").map(r=>r.trim()).filter(Boolean))try{const r=t.querySelector(n);if(r)return r}catch{}return null}async function rt(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((r,o)=>{const a=()=>{const s=document.querySelector(t.split(",")[0].trim());if(s)return r(s);if(Date.now()-n>e)return o(new Error(`waitForSelector timed out: ${t}`));setTimeout(a,200)};a()})}function w(t){return new Promise(e=>setTimeout(e,t))}const Z="__creatorlane_migration_overlay__",j="__cl_migration_highlight__",i={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},U='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',z='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',pt='"Iowan Old Style", Georgia, "Times New Roman", serif';let l=null,$=null,b=null,E=null,R=null,F=null,C=null;function D(){if(l&&document.body.contains(l))return l;const t=document.getElementById(Z);t&&t.remove(),l=document.createElement("div"),l.id=Z,l.setAttribute("data-creatorlane","migration"),l.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 360px;
    background: ${i.bg};
    color: ${i.fg};
    border: 1px solid ${i.border};
    border-radius: 14px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.55), 0 0 0 1px ${i.border};
    font-family: ${U};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${i.acc};
    box-shadow:0 0 0 4px ${i.accSoft};
  `;const r=document.createElement("span");r.textContent="Creator Lane",r.style.cssText=`
    font-family:${U};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${i.fg};
  `;const o=document.createElement("span");o.textContent="Migration",o.style.cssText=`
    font-family:${z};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${i.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(r),e.appendChild(o),$=document.createElement("div"),$.style.cssText=`
    font-family:${z};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${i.fg2};margin-bottom:6px;
  `,$.textContent="Step 01 — Boot",b=document.createElement("div"),b.style.cssText=`
    font-family:${U};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${i.fg};
  `,b.textContent="Booting…",E=document.createElement("div"),E.style.cssText=`
    font-family:${U};
    font-size:13px;color:${i.fg2};margin-bottom:14px;line-height:1.45;
  `,E.textContent="Setting up the migration. This window closes itself when finished.";const a=document.createElement("div");return a.style.cssText=`
    background:${i.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${i.border};
  `,R=document.createElement("div"),R.style.cssText=`
    background:${i.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,a.appendChild(R),F=document.createElement("div"),F.style.cssText=`
    font-family:${z};
    font-size:10px;color:${i.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,F.textContent="",C=document.createElement("div"),C.style.cssText=`
    font-family:${z};
    font-size:10.5px;color:${i.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${i.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,l.appendChild(e),l.appendChild($),l.appendChild(b),l.appendChild(E),l.appendChild(a),l.appendChild(F),l.appendChild(C),document.body.appendChild(l),l}function ft(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function T(t,e){D(),t!=null&&(b.textContent=t,b.style.color=i.fg,$.textContent=ft(t),$.style.color=i.fg2),e!=null&&(E.textContent=e,E.style.color=i.fg2)}function G(t,e){if(D(),typeof t!="number"||typeof e!="number"||e<=0){R.style.width="0%",F.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));R.style.width=`${n}%`,R.style.background=i.acc,F.textContent=`${t} / ${e}`}function M(t){D(),C.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${i.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${i.fg3};`,C.appendChild(e),C.scrollTop=C.scrollHeight;C.children.length>30;)C.removeChild(C.firstChild)}function q(t){D(),$.textContent="Error",$.style.color=i.danger,b.textContent="Something went wrong",b.style.color=i.danger,E.textContent=t,E.style.color=i.fg2,R.style.background=i.danger}function mt(t,e){D(),$.textContent="Done",$.style.color=i.success,b.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=i.fg;const r=document.createElement("em");r.textContent=t,r.style.cssText=`
    font-family:${pt};
    font-style:italic;font-weight:400;
    color:${i.acc};
  `,b.appendChild(n),b.appendChild(r),E.textContent=e||"",E.style.color=i.fg2,R.style.background=i.success,R.style.width="100%"}let X=!1;function gt(){if(X)return;const t=document.createElement("style");t.textContent=`
    .${j} {
      outline: 2px solid ${i.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${i.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),X=!0}function ht(t){if(t){gt(),J(),t.classList.add(j);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function J(){document.querySelectorAll(`.${j}`).forEach(t=>t.classList.remove(j))}function yt(){J(),l&&l.parentNode&&l.parentNode.removeChild(l),l=null}const xt="__creatorlane_cursor__",Q="__creatorlane_control_banner__",f={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},wt='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',bt='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',_t='"Iowan Old Style", Georgia, "Times New Roman", serif';let p=null,P=null,tt=!1;function it(){if(tt)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${f.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),tt=!0}function at(){return p&&document.body.contains(p)||(it(),p=document.createElement("div"),p.id=xt,p.setAttribute("data-creatorlane","cursor"),p.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,p.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${f.fg}" stroke="${f.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,P=document.createElement("div"),P.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${f.bg};
    color: ${f.fg};
    font-family: ${bt};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${f.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,p.appendChild(P),document.body.appendChild(p),st(window.innerWidth/2,window.innerHeight/4)),p}function st(t,e){p.style.transform=`translate(${t-4}px, ${e-2}px)`}function lt(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function St(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function V(t){return new Promise(e=>setTimeout(e,t))}function ct(){if(document.getElementById(Q))return;it();const t=document.createElement("div");t.id=Q,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${f.bg};
    color: ${f.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${wt};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${f.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${f.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${f.fg};`;const r=document.createElement("span");r.textContent="·",r.style.cssText=`color:${f.fg};opacity:0.45;margin:0 4px;`;const o=document.createElement("span");o.textContent="is now",o.style.cssText=`color:${f.fg};opacity:0.85;`;const a=document.createElement("em");a.textContent="migrating your automations.",a.style.cssText=`
    font-family:${_t};
    font-style:italic;font-weight:400;
    color:${f.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(a),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function Ct(){const t=document.getElementById(Q);t&&t.remove()}function B(t){if(at(),!t){P.style.opacity="0";return}P.textContent=t,P.style.opacity="1"}async function dt(t,e={}){at();let n,r;if(t&&t.nodeType===1){await St(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await V(450));const o=lt(t);n=o.x,r=o.y}else if(t&&typeof t.x=="number")n=t.x,r=t.y;else return;st(n,r),await V(e.duration||420)}function $t(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${f.accSoft};
    border: 2px solid ${f.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function I(t,e){if(!t)return!1;await dt(t),e&&B(e);const n=lt(t);$t(n.x,n.y),await V(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function Et(t,e=600){const n=window.scrollY,r=t-n,o=14;for(let a=1;a<=o;a++){const s=a/o,m=s<.5?2*s*s:-1+(4-2*s)*s;window.scrollTo(0,n+r*m),await V(e/o)}}function kt(){p&&p.parentNode&&p.parentNode.removeChild(p),p=null,P=null,Ct()}const O=(...t)=>console.log("[CL-migration]",...t),H=(...t)=>console.warn("[CL-migration]",...t);O("content script boot, url:",location.href);const L={config:null,inProgress:!1};function N(t,e,{multi:n=!1}={}){if(!e)return null;const r=e.selector;if(!r||r==="TBD")return null;if(n)return A(t,r).map(s=>et(s,e.attr||"text")).filter(Boolean);const o=ut(t,r);return o?et(o,e.attr||"text"):null}function et(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function nt(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function vt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(T("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await w(6e4)))}async function Tt(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,r=t.pagination?.max_scrolls??200,o=t.pagination?.scroll_container_selector;T("Loading your automations","Scrolling + paginating through the SuperProfile list…"),B("loading every automation");function a(){if(o){const c=document.querySelector(o);if(c)return c}return document.scrollingElement||document.documentElement||document.body}async function s(){let c=A(document,e).length,g=0;for(let x=0;x<r;x++){const S=a();S.scrollTop=S.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(h=>{const v=(h.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(v))try{h.click()}catch{}}),await w(n);const k=A(document,e).length;if(k>c?(c=k,g=0):g++,g>=6)break}return c}function m(){if(document.querySelector(".modal.show, .modal.fade.show"))return null;const c=[".pagination",".paging","nav[aria-label*='pagination' i]","[role='navigation'][aria-label*='page' i]"];let g=null;for(const h of c){const v=document.querySelector(h);if(v){g=v;break}}if(!g)return null;const x=g.querySelector(".active, .selected, [aria-current='page']")||null,S=x?parseInt((x.textContent||"").trim(),10):NaN,k=Array.from(g.querySelectorAll("button, a, li, [role='button']"));for(const h of k){if(h.hasAttribute("disabled")||h.classList.contains("disabled")||h.getAttribute("aria-disabled")==="true")continue;const v=(h.textContent||"").trim().toLowerCase(),K=(h.getAttribute("aria-label")||"").toLowerCase();if(v==="next"||v==="›"||v===">"||/^next$/.test(K))return h}if(!isNaN(S)){for(const h of k)if(parseInt((h.textContent||"").trim(),10)===S+1)return h}return null}let y=await s();M(`page 1: ${y} rows`);let _=location.href,d=y;for(let c=2;c<=50;c++){const g=m();if(!g)break;try{await I(g,`page ${c}`)}catch{break}await w(n);const x=await s();M(`page ${c}: ${x} rows`);const S=location.href!==_;if(_=location.href,!S&&x<=d){M("page nav clicked but no progress — stopping pagination");break}d=x,x>y&&(y=x)}B(`loaded ${y}`);const u=a();return u.scrollTop=0,window.scrollTo(0,0),await w(400),y}async function Lt(t,e){const n=e.open_modal_flow||{},r=W(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await I(r,"open menu"),await w(n.wait_after_trigger_ms??250);let o=W(document,n.dropdown_edit_option_selector)||null;if(!o){const a=A(document,".pl-dropdown-text"),s=(n.dropdown_edit_option_text||"Edit").toLowerCase();o=a.find(m=>(m.textContent||"").trim().toLowerCase()===s)}if(!o)throw new Error("edit_option_not_found");return await I(o,"click Edit"),await rt(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await w(300),document.querySelector(n.modal_root_selector)}async function Rt(t,e){if(!t)return null;const n=e.step3_link_flow||{},r=n.dm_pencil_selector||".dm-container-main .edit-icon-div",o=t.querySelector(r);if(!o)return null;await I(o,"open DM editor");const a=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await rt(a,n.step_wait_timeout_ms??6e3)}catch{return null}await w(300);const s=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let m=null;for(const d of document.querySelectorAll(s)){const u=d.value||d.getAttribute("value")||"";if(u){m=u;break}}if(!m){const d=[".a-dm-text-button-container",".link-button-container",".modal-body"],u=/^https?:\/\/\S+$/i;for(const c of d){const g=document.querySelector(c);if(!g)continue;const x=g.querySelectorAll("input[type='text'], input:not([type])");for(const S of x){const k=(S.value||S.getAttribute("value")||"").trim();if(u.test(k)){m=k,M(`link_url found via fallback in ${c}`);break}}if(m)break}}m||M("no link_url found in Step 3 — card may have no button configured");const y=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let _=document.querySelector(y);if(_||(_=Array.from(document.querySelectorAll(".modal-footer button")).find(d=>(d.textContent||"").trim().toLowerCase()==="cancel")),_)await I(_,"back to review"),await w(400);else{const d=t.querySelector(".cf-modal-header-content img.cf-close-button");if(d){await I(d,"close (fallback)"),await w(350);const u=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(c=>(c.textContent||"").trim().toLowerCase()==="exit");u&&await I(u,"discard")}}return m}async function Mt(t,e){const n=e.modal_fields||{},r={keyword:N(t,n.keyword,{multi:!0}),dm_body:N(t,n.dm_body),comment_reply:N(t,n.comment_reply),caption:N(t,n.caption),thumbnail_src:N(t,n.thumbnail_src)};let o=null;try{o=await Rt(t,e)}catch(a){M(`link_url capture failed: ${a?.message||a}`)}return{...r,link_url:o}}async function ot(t){const e=t.modal_close_selector,n=e?W(document,e):null;n?await I(n,"close modal"):(B("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const r=t.open_modal_flow?.modal_root_selector;if(r)for(let o=0;o<20&&document.querySelector(r);o++)await w(150)}async function Y(t){if(!L.inProgress){L.inProgress=!0;try{ct(),T("Starting scrape","Creator Lane is reading your SuperProfile automations."),B("starting…"),await vt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await Tt(t);if(O("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw q("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=A(document,t.row_selector).length;T(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),G(0,n);const r=[];for(let o=0;o<n;o++){let a=A(document,t.row_selector);o>=a.length&&(await Et(0,400),await w(600),a=A(document,t.row_selector));let s=a[o];if(!s)for(let u=0;u<30&&!s;u++)window.scrollBy(0,400),await w(300),a=A(document,t.row_selector),s=a[o];if(!s){M(`× row ${o+1} could not be located — skipping`),r.push({index:o,name:null,status:null,scrape_error:"row_not_mounted"}),G(o+1,n);continue}ht(s),G(o,n),T(`Scraping ${o+1} of ${n}`,"Opening the automation card…"),B(`automation ${o+1} of ${n}`),await dt(s);const m=t.list_fields||{},y={name:N(s,m.name),status:N(s,m.status)};let _=null,d=null;try{const u=await Lt(s,t);_=await Mt(u,t),await ot(t),M(`✓ ${y.name||`automation ${o+1}`}`)}catch(u){d=u?.message||String(u),M(`× ${y.name||`automation ${o+1}`}: ${d}`);try{await ot(t)}catch{}}r.push({index:o,name:y.name,status:y.status,..._||{},scrape_error:d}),G(o+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r.length,stage:"scraping_modals",of:n})}J(),T("Sending to Creator Lane",`Uploading ${r.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:r})}catch(e){H("scrape failed:",e),q(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{L.inProgress=!1}}}function At(){if(nt(L.config)){T("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{nt(L.config)||(clearInterval(t),O("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),T("Logged in","Starting the scrape now…"),Y(L.config))},1500);return}O("starting scrape immediately"),Y(L.config)}function It(){ct(),B("connecting to Creator Lane…"),T("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){H("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),q(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(O("REQUEST_RUN_CONFIG response:",e),!e||!e.active){yt(),kt(),O("no active migration run for this tab — sitting idle");return}L.config=e.config,At()})}catch(e){H("sendMessage threw:",e),q(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(H("background did not respond within 5s"),q("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return L.config=t.config,Y(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const r=t.result||{},o=(r.created||[]).length,a=(r.skipped||[]).length,s=(r.duplicates||[]).length;mt(`Imported ${o} campaign${o===1?"":"s"}`,`Skipped ${a}, duplicates ${s}. Closing this tab in a few seconds — review them in Creator Lane.`)}else q(t.error||"Import failed");return n({ok:!0}),!0}});It();
})()
