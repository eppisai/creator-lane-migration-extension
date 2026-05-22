(function(){function T(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function lt(t,e){return e?t.querySelector(e):null}function j(t,e){if(!e)return null;for(const n of e.split(",").map(r=>r.trim()).filter(Boolean))try{const r=t.querySelector(n);if(r)return r}catch{}return null}async function et(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((r,o)=>{const a=()=>{const s=document.querySelector(t.split(",")[0].trim());if(s)return r(s);if(Date.now()-n>e)return o(new Error(`waitForSelector timed out: ${t}`));setTimeout(a,200)};a()})}function x(t){return new Promise(e=>setTimeout(e,t))}const Y="__creatorlane_migration_overlay__",H="__cl_migration_highlight__",i={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},q='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',D='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',ct='"Iowan Old Style", Georgia, "Times New Roman", serif';let d=null,_=null,w=null,S=null,k=null,P=null,b=null;function O(){if(d&&document.body.contains(d))return d;const t=document.getElementById(Y);t&&t.remove(),d=document.createElement("div"),d.id=Y,d.setAttribute("data-creatorlane","migration"),d.style.cssText=`
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
    font-family: ${q};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${i.acc};
    box-shadow:0 0 0 4px ${i.accSoft};
  `;const r=document.createElement("span");r.textContent="Creator Lane",r.style.cssText=`
    font-family:${q};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${i.fg};
  `;const o=document.createElement("span");o.textContent="Migration",o.style.cssText=`
    font-family:${D};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${i.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(r),e.appendChild(o),_=document.createElement("div"),_.style.cssText=`
    font-family:${D};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${i.fg2};margin-bottom:6px;
  `,_.textContent="Step 01 — Boot",w=document.createElement("div"),w.style.cssText=`
    font-family:${q};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${i.fg};
  `,w.textContent="Booting…",S=document.createElement("div"),S.style.cssText=`
    font-family:${q};
    font-size:13px;color:${i.fg2};margin-bottom:14px;line-height:1.45;
  `,S.textContent="Setting up the migration. This window closes itself when finished.";const a=document.createElement("div");return a.style.cssText=`
    background:${i.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${i.border};
  `,k=document.createElement("div"),k.style.cssText=`
    background:${i.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,a.appendChild(k),P=document.createElement("div"),P.style.cssText=`
    font-family:${D};
    font-size:10px;color:${i.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,P.textContent="",b=document.createElement("div"),b.style.cssText=`
    font-family:${D};
    font-size:10.5px;color:${i.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${i.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,d.appendChild(e),d.appendChild(_),d.appendChild(w),d.appendChild(S),d.appendChild(a),d.appendChild(P),d.appendChild(b),document.body.appendChild(d),d}function dt(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function $(t,e){O(),t!=null&&(w.textContent=t,w.style.color=i.fg,_.textContent=dt(t),_.style.color=i.fg2),e!=null&&(S.textContent=e,S.style.color=i.fg2)}function z(t,e){if(O(),typeof t!="number"||typeof e!="number"||e<=0){k.style.width="0%",P.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));k.style.width=`${n}%`,k.style.background=i.acc,P.textContent=`${t} / ${e}`}function R(t){O(),b.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${i.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${i.fg3};`,b.appendChild(e),b.scrollTop=b.scrollHeight;b.children.length>30;)b.removeChild(b.firstChild)}function B(t){O(),_.textContent="Error",_.style.color=i.danger,w.textContent="Something went wrong",w.style.color=i.danger,S.textContent=t,S.style.color=i.fg2,k.style.background=i.danger}function ut(t,e){O(),_.textContent="Done",_.style.color=i.success,w.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=i.fg;const r=document.createElement("em");r.textContent=t,r.style.cssText=`
    font-family:${ct};
    font-style:italic;font-weight:400;
    color:${i.acc};
  `,w.appendChild(n),w.appendChild(r),S.textContent=e||"",S.style.color=i.fg2,k.style.background=i.success,k.style.width="100%"}let J=!1;function pt(){if(J)return;const t=document.createElement("style");t.textContent=`
    .${H} {
      outline: 2px solid ${i.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${i.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),J=!0}function mt(t){if(t){pt(),Q(),t.classList.add(H);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function Q(){document.querySelectorAll(`.${H}`).forEach(t=>t.classList.remove(H))}function ft(){Q(),d&&d.parentNode&&d.parentNode.removeChild(d),d=null}const gt="__creatorlane_cursor__",V="__creatorlane_control_banner__",p={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},ht='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',yt='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',xt='"Iowan Old Style", Georgia, "Times New Roman", serif';let u=null,I=null,K=!1;function nt(){if(K)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${p.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),K=!0}function ot(){return u&&document.body.contains(u)||(nt(),u=document.createElement("div"),u.id=gt,u.setAttribute("data-creatorlane","cursor"),u.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,u.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${p.fg}" stroke="${p.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,I=document.createElement("div"),I.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${p.bg};
    color: ${p.fg};
    font-family: ${yt};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${p.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,u.appendChild(I),document.body.appendChild(u),rt(window.innerWidth/2,window.innerHeight/4)),u}function rt(t,e){u.style.transform=`translate(${t-4}px, ${e-2}px)`}function it(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function wt(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function U(t){return new Promise(e=>setTimeout(e,t))}function at(){if(document.getElementById(V))return;nt();const t=document.createElement("div");t.id=V,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${p.bg};
    color: ${p.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${ht};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${p.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${p.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${p.fg};`;const r=document.createElement("span");r.textContent="·",r.style.cssText=`color:${p.fg};opacity:0.45;margin:0 4px;`;const o=document.createElement("span");o.textContent="is now",o.style.cssText=`color:${p.fg};opacity:0.85;`;const a=document.createElement("em");a.textContent="migrating your automations.",a.style.cssText=`
    font-family:${xt};
    font-style:italic;font-weight:400;
    color:${p.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(a),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function bt(){const t=document.getElementById(V);t&&t.remove()}function N(t){if(ot(),!t){I.style.opacity="0";return}I.textContent=t,I.style.opacity="1"}async function st(t,e={}){ot();let n,r;if(t&&t.nodeType===1){await wt(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await U(450));const o=it(t);n=o.x,r=o.y}else if(t&&typeof t.x=="number")n=t.x,r=t.y;else return;rt(n,r),await U(e.duration||420)}function _t(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${p.accSoft};
    border: 2px solid ${p.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function L(t,e){if(!t)return!1;await st(t),e&&N(e);const n=it(t);_t(n.x,n.y),await U(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function St(t,e=600){const n=window.scrollY,r=t-n,o=14;for(let a=1;a<=o;a++){const s=a/o,m=s<.5?2*s*s:-1+(4-2*s)*s;window.scrollTo(0,n+r*m),await U(e/o)}}function Ct(){u&&u.parentNode&&u.parentNode.removeChild(u),u=null,I=null,bt()}const F=(...t)=>console.log("[CL-migration]",...t),G=(...t)=>console.warn("[CL-migration]",...t);F("content script boot, url:",location.href);const E={config:null,inProgress:!1};function A(t,e,{multi:n=!1}={}){if(!e)return null;const r=e.selector;if(!r||r==="TBD")return null;if(n)return T(t,r).map(s=>Z(s,e.attr||"text")).filter(Boolean);const o=lt(t,r);return o?Z(o,e.attr||"text"):null}function Z(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function X(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function $t(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||($("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await x(6e4)))}async function Et(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,r=t.pagination?.max_scrolls??200,o=t.pagination?.scroll_container_selector;$("Loading your automations","Scrolling + paginating through the SuperProfile list…"),N("loading every automation");function a(){if(o){const l=document.querySelector(o);if(l)return l}return document.scrollingElement||document.documentElement||document.body}async function s(){let l=T(document,e).length,c=0;for(let f=0;f<r;f++){const v=a();v.scrollTop=v.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(h=>{const M=(h.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(M))try{h.click()}catch{}}),await x(n);const g=T(document,e).length;if(g>l?(l=g,c=0):c++,c>=6)break}return l}function m(){const l=[".pagination .active",".pagination .selected","[aria-current='page']"];let c=null;for(const g of l){const h=document.querySelector(g);if(h){c=h;break}}const f=c?parseInt((c.textContent||"").trim(),10):NaN,v=Array.from(document.querySelectorAll("button, a, li, .pagination *, [class*='pagin'] *, [class*='page-nav'] *, [aria-label]"));for(const g of v){const h=(g.textContent||"").trim().toLowerCase(),M=(g.getAttribute("aria-label")||"").toLowerCase();if((h==="next"||h==="›"||h===">"||/^next\b/.test(M))&&!g.hasAttribute("disabled")&&!g.classList.contains("disabled")&&g.getAttribute("aria-disabled")!=="true")return g}if(!isNaN(f)){const g=document.querySelectorAll(".pagination li, .pagination button, .pagination a");for(const h of g)if(parseInt((h.textContent||"").trim(),10)===f+1)return h}return null}let y=await s();R(`page 1: ${y} rows`);for(let l=2;l<=50;l++){const c=m();if(!c)break;try{await L(c,`page ${l}`)}catch{break}await x(n);const f=await s();R(`page ${l}: ${f} rows on page (total may exceed total-visible)`),f>y&&(y=f)}N(`loaded ${y}`);const C=a();return C.scrollTop=0,window.scrollTo(0,0),await x(400),y}async function kt(t,e){const n=e.open_modal_flow||{},r=j(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await L(r,"open menu"),await x(n.wait_after_trigger_ms??250);let o=j(document,n.dropdown_edit_option_selector)||null;if(!o){const a=T(document,".pl-dropdown-text"),s=(n.dropdown_edit_option_text||"Edit").toLowerCase();o=a.find(m=>(m.textContent||"").trim().toLowerCase()===s)}if(!o)throw new Error("edit_option_not_found");return await L(o,"click Edit"),await et(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await x(300),document.querySelector(n.modal_root_selector)}async function vt(t,e){if(!t)return null;const n=e.step3_link_flow||{},r=n.dm_pencil_selector||".dm-container-main .edit-icon-div",o=t.querySelector(r);if(!o)return null;await L(o,"open DM editor");const a=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await et(a,n.step_wait_timeout_ms??6e3)}catch{return null}await x(300);const s=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let m=null;for(const l of document.querySelectorAll(s)){const c=l.value||l.getAttribute("value")||"";if(c){m=c;break}}if(!m){const l=[".a-dm-text-button-container",".link-button-container",".modal-body"],c=/^https?:\/\/\S+$/i;for(const f of l){const v=document.querySelector(f);if(!v)continue;const g=v.querySelectorAll("input[type='text'], input:not([type])");for(const h of g){const M=(h.value||h.getAttribute("value")||"").trim();if(c.test(M)){m=M,R(`link_url found via fallback in ${f}`);break}}if(m)break}}m||R("no link_url found in Step 3 — card may have no button configured");const y=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let C=document.querySelector(y);if(C||(C=Array.from(document.querySelectorAll(".modal-footer button")).find(l=>(l.textContent||"").trim().toLowerCase()==="cancel")),C)await L(C,"back to review"),await x(400);else{const l=t.querySelector(".cf-modal-header-content img.cf-close-button");if(l){await L(l,"close (fallback)"),await x(350);const c=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(f=>(f.textContent||"").trim().toLowerCase()==="exit");c&&await L(c,"discard")}}return m}async function Tt(t,e){const n=e.modal_fields||{},r={keyword:A(t,n.keyword,{multi:!0}),dm_body:A(t,n.dm_body),comment_reply:A(t,n.comment_reply),caption:A(t,n.caption),thumbnail_src:A(t,n.thumbnail_src)};let o=null;try{o=await vt(t,e)}catch(a){R(`link_url capture failed: ${a?.message||a}`)}return{...r,link_url:o}}async function tt(t){const e=t.modal_close_selector,n=e?j(document,e):null;n?await L(n,"close modal"):(N("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const r=t.open_modal_flow?.modal_root_selector;if(r)for(let o=0;o<20&&document.querySelector(r);o++)await x(150)}async function W(t){if(!E.inProgress){E.inProgress=!0;try{at(),$("Starting scrape","Creator Lane is reading your SuperProfile automations."),N("starting…"),await $t(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await Et(t);if(F("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw B("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=T(document,t.row_selector).length;$(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),z(0,n);const r=[];for(let o=0;o<n;o++){let a=T(document,t.row_selector);o>=a.length&&(await St(0,400),await x(600),a=T(document,t.row_selector));let s=a[o];if(!s)for(let c=0;c<30&&!s;c++)window.scrollBy(0,400),await x(300),a=T(document,t.row_selector),s=a[o];if(!s){R(`× row ${o+1} could not be located — skipping`),r.push({index:o,name:null,status:null,scrape_error:"row_not_mounted"}),z(o+1,n);continue}mt(s),z(o,n),$(`Scraping ${o+1} of ${n}`,"Opening the automation card…"),N(`automation ${o+1} of ${n}`),await st(s);const m=t.list_fields||{},y={name:A(s,m.name),status:A(s,m.status)};let C=null,l=null;try{const c=await kt(s,t);C=await Tt(c,t),await tt(t),R(`✓ ${y.name||`automation ${o+1}`}`)}catch(c){l=c?.message||String(c),R(`× ${y.name||`automation ${o+1}`}: ${l}`);try{await tt(t)}catch{}}r.push({index:o,name:y.name,status:y.status,...C||{},scrape_error:l}),z(o+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r.length,stage:"scraping_modals",of:n})}Q(),$("Sending to Creator Lane",`Uploading ${r.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:r})}catch(e){G("scrape failed:",e),B(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{E.inProgress=!1}}}function Lt(){if(X(E.config)){$("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{X(E.config)||(clearInterval(t),F("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),$("Logged in","Starting the scrape now…"),W(E.config))},1500);return}F("starting scrape immediately"),W(E.config)}function Rt(){at(),N("connecting to Creator Lane…"),$("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){G("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),B(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(F("REQUEST_RUN_CONFIG response:",e),!e||!e.active){ft(),Ct(),F("no active migration run for this tab — sitting idle");return}E.config=e.config,Lt()})}catch(e){G("sendMessage threw:",e),B(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(G("background did not respond within 5s"),B("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return E.config=t.config,W(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const r=t.result||{},o=(r.created||[]).length,a=(r.skipped||[]).length,s=(r.duplicates||[]).length;ut(`Imported ${o} campaign${o===1?"":"s"}`,`Skipped ${a}, duplicates ${s}. Closing this tab in a few seconds — review them in Creator Lane.`)}else B(t.error||"Import failed");return n({ok:!0}),!0}});Rt();
})()
