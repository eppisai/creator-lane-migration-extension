(function(){function y(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function rt(t,e){return e?t.querySelector(e):null}function z(t,e){if(!e)return null;for(const n of e.split(",").map(o=>o.trim()).filter(Boolean))try{const o=t.querySelector(n);if(o)return o}catch{}return null}async function it(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((o,r)=>{const s=()=>{const a=document.querySelector(t.split(",")[0].trim());if(a)return o(a);if(Date.now()-n>e)return r(new Error(`waitForSelector timed out: ${t}`));setTimeout(s,200)};s()})}function $(t){return new Promise(e=>setTimeout(e,t))}const j="__creatorlane_migration_overlay__",B="__cl_migration_highlight__",i={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},N='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',A='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',at='"Iowan Old Style", Georgia, "Times New Roman", serif';let l=null,g=null,m=null,h=null,b=null,k=null,f=null;function I(){if(l&&document.body.contains(l))return l;const t=document.getElementById(j);t&&t.remove(),l=document.createElement("div"),l.id=j,l.setAttribute("data-creatorlane","migration"),l.style.cssText=`
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
    font-family: ${N};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${i.acc};
    box-shadow:0 0 0 4px ${i.accSoft};
  `;const o=document.createElement("span");o.textContent="Creator Lane",o.style.cssText=`
    font-family:${N};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${i.fg};
  `;const r=document.createElement("span");r.textContent="Migration",r.style.cssText=`
    font-family:${A};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${i.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(o),e.appendChild(r),g=document.createElement("div"),g.style.cssText=`
    font-family:${A};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${i.fg2};margin-bottom:6px;
  `,g.textContent="Step 01 — Boot",m=document.createElement("div"),m.style.cssText=`
    font-family:${N};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${i.fg};
  `,m.textContent="Booting…",h=document.createElement("div"),h.style.cssText=`
    font-family:${N};
    font-size:13px;color:${i.fg2};margin-bottom:14px;line-height:1.45;
  `,h.textContent="Setting up the migration. This window closes itself when finished.";const s=document.createElement("div");return s.style.cssText=`
    background:${i.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${i.border};
  `,b=document.createElement("div"),b.style.cssText=`
    background:${i.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,s.appendChild(b),k=document.createElement("div"),k.style.cssText=`
    font-family:${A};
    font-size:10px;color:${i.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,k.textContent="",f=document.createElement("div"),f.style.cssText=`
    font-family:${A};
    font-size:10.5px;color:${i.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${i.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,l.appendChild(e),l.appendChild(g),l.appendChild(m),l.appendChild(h),l.appendChild(s),l.appendChild(k),l.appendChild(f),document.body.appendChild(l),l}function st(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function w(t,e){I(),t!=null&&(m.textContent=t,m.style.color=i.fg,g.textContent=st(t),g.style.color=i.fg2),e!=null&&(h.textContent=e,h.style.color=i.fg2)}function M(t,e){if(I(),typeof t!="number"||typeof e!="number"||e<=0){b.style.width="0%",k.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));b.style.width=`${n}%`,b.style.background=i.acc,k.textContent=`${t} / ${e}`}function P(t){I(),f.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${i.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${i.fg3};`,f.appendChild(e),f.scrollTop=f.scrollHeight;f.children.length>30;)f.removeChild(f.firstChild)}function L(t){I(),g.textContent="Error",g.style.color=i.danger,m.textContent="Something went wrong",m.style.color=i.danger,h.textContent=t,h.style.color=i.fg2,b.style.background=i.danger}function lt(t,e){I(),g.textContent="Done",g.style.color=i.success,m.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=i.fg;const o=document.createElement("em");o.textContent=t,o.style.cssText=`
    font-family:${at};
    font-style:italic;font-weight:400;
    color:${i.acc};
  `,m.appendChild(n),m.appendChild(o),h.textContent=e||"",h.style.color=i.fg2,b.style.background=i.success,b.style.width="100%"}let W=!1;function ct(){if(W)return;const t=document.createElement("style");t.textContent=`
    .${B} {
      outline: 2px solid ${i.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${i.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),W=!0}function dt(t){if(t){ct(),q(),t.classList.add(B);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function q(){document.querySelectorAll(`.${B}`).forEach(t=>t.classList.remove(B))}function ut(){q(),l&&l.parentNode&&l.parentNode.removeChild(l),l=null}const pt="__creatorlane_cursor__",G="__creatorlane_control_banner__",d={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},mt='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',ft='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',gt='"Iowan Old Style", Georgia, "Times New Roman", serif';let c=null,S=null,V=!1;function K(){if(V)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${d.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),V=!0}function Z(){return c&&document.body.contains(c)||(K(),c=document.createElement("div"),c.id=pt,c.setAttribute("data-creatorlane","cursor"),c.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,c.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${d.fg}" stroke="${d.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,S=document.createElement("div"),S.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${d.bg};
    color: ${d.fg};
    font-family: ${ft};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${d.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,c.appendChild(S),document.body.appendChild(c),X(window.innerWidth/2,window.innerHeight/4)),c}function X(t,e){c.style.transform=`translate(${t-4}px, ${e-2}px)`}function tt(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function ht(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function O(t){return new Promise(e=>setTimeout(e,t))}function et(){if(document.getElementById(G))return;K();const t=document.createElement("div");t.id=G,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${d.bg};
    color: ${d.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${mt};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${d.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${d.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${d.fg};`;const o=document.createElement("span");o.textContent="·",o.style.cssText=`color:${d.fg};opacity:0.45;margin:0 4px;`;const r=document.createElement("span");r.textContent="is now",r.style.cssText=`color:${d.fg};opacity:0.85;`;const s=document.createElement("em");s.textContent="migrating your automations.",s.style.cssText=`
    font-family:${gt};
    font-style:italic;font-weight:400;
    color:${d.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(s),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function xt(){const t=document.getElementById(G);t&&t.remove()}function E(t){if(Z(),!t){S.style.opacity="0";return}S.textContent=t,S.style.opacity="1"}async function nt(t,e={}){Z();let n,o;if(t&&t.nodeType===1){await ht(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await O(450));const r=tt(t);n=r.x,o=r.y}else if(t&&typeof t.x=="number")n=t.x,o=t.y;else return;X(n,o),await O(e.duration||420)}function yt(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${d.accSoft};
    border: 2px solid ${d.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function H(t,e){if(!t)return!1;await nt(t),e&&E(e);const n=tt(t);yt(n.x,n.y),await O(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function wt(t,e=600){const n=window.scrollY,o=t-n,r=14;for(let s=1;s<=r;s++){const a=s/r,u=a<.5?2*a*a:-1+(4-2*a)*a;window.scrollTo(0,n+o*u),await O(e/r)}}function _t(){c&&c.parentNode&&c.parentNode.removeChild(c),c=null,S=null,xt()}const R=(...t)=>console.log("[CL-migration]",...t),F=(...t)=>console.warn("[CL-migration]",...t);R("content script boot, url:",location.href);const _={config:null,inProgress:!1};function C(t,e,{multi:n=!1}={}){if(!e)return null;const o=e.selector;if(!o||o==="TBD")return null;if(n)return y(t,o).map(a=>Q(a,e.attr||"text")).filter(Boolean);const r=rt(t,o);return r?Q(r,e.attr||"text"):null}function Q(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function Y(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function bt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(w("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await $(6e4)))}async function Ct(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,o=t.pagination?.max_scrolls??200,r=t.pagination?.scroll_container_selector;w("Loading your automations","Scrolling through the SuperProfile list…"),E("scrolling to load every automation");function s(){if(r){const x=document.querySelector(r);if(x)return x}return document.scrollingElement||document.documentElement||document.body}let a=y(document,e).length,u=0;M(a,Math.max(a,1));for(let x=0;x<o;x++){const v=s();v.scrollTop=v.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(D=>{const ot=(D.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(ot))try{D.click()}catch{}}),await $(n);const p=y(document,e).length;if(p>a?(a=p,u=0):u++,P(`scroll ${x+1}: visible=${p}, max=${a}, stable=${u}`),u>=6)break}E(`loaded ${a}`);const T=s();return T.scrollTop=0,window.scrollTo(0,0),await $(400),a}async function $t(t,e){const n=e.open_modal_flow||{},o=z(t,n.dropdown_trigger_selector);if(!o)throw new Error("dropdown_trigger_not_found");await H(o,"open menu"),await $(n.wait_after_trigger_ms??250);let r=z(document,n.dropdown_edit_option_selector)||null;if(!r){const s=y(document,".pl-dropdown-text"),a=(n.dropdown_edit_option_text||"Edit").toLowerCase();r=s.find(u=>(u.textContent||"").trim().toLowerCase()===a)}if(!r)throw new Error("edit_option_not_found");return await H(r,"click Edit"),await it(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await $(300),document.querySelector(n.modal_root_selector)}function St(t,e){const n=e.modal_fields||{};let o=C(t,n.link_url);if(!o&&n.link_url?.multi&&n.link_url.selector)for(const r of y(t,n.link_url.selector)){const s=r.value||r.getAttribute("value")||"";if(s){o=s;break}}return{keyword:C(t,n.keyword,{multi:!0}),dm_body:C(t,n.dm_body),comment_reply:C(t,n.comment_reply),caption:C(t,n.caption),thumbnail_src:C(t,n.thumbnail_src),link_url:o}}async function J(t){const e=t.modal_close_selector,n=e?z(document,e):null;n?await H(n,"close modal"):(E("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const o=t.open_modal_flow?.modal_root_selector;if(o)for(let r=0;r<20&&document.querySelector(o);r++)await $(150)}async function U(t){if(!_.inProgress){_.inProgress=!0;try{et(),w("Starting scrape","Creator Lane is reading your SuperProfile automations."),E("starting…"),await bt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await Ct(t);if(R("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw L("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=y(document,t.row_selector).length;w(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),M(0,n);const o=[];for(let r=0;r<n;r++){let s=y(document,t.row_selector);r>=s.length&&(await wt(0,400),await $(600),s=y(document,t.row_selector));let a=s[r];if(!a)for(let p=0;p<30&&!a;p++)window.scrollBy(0,400),await $(300),s=y(document,t.row_selector),a=s[r];if(!a){P(`× row ${r+1} could not be located — skipping`),o.push({index:r,name:null,status:null,scrape_error:"row_not_mounted"}),M(r+1,n);continue}dt(a),M(r,n),w(`Scraping ${r+1} of ${n}`,"Opening the automation card…"),E(`automation ${r+1} of ${n}`),await nt(a);const u=t.list_fields||{},T={name:C(a,u.name),status:C(a,u.status)};let x=null,v=null;try{const p=await $t(a,t);x=St(p,t),await J(t),P(`✓ ${T.name||`automation ${r+1}`}`)}catch(p){v=p?.message||String(p),P(`× ${T.name||`automation ${r+1}`}: ${v}`);try{await J(t)}catch{}}o.push({index:r,name:T.name,status:T.status,...x||{},scrape_error:v}),M(r+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:o.length,stage:"scraping_modals",of:n})}q(),w("Sending to Creator Lane",`Uploading ${o.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:o})}catch(e){F("scrape failed:",e),L(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{_.inProgress=!1}}}function Et(){if(Y(_.config)){w("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{Y(_.config)||(clearInterval(t),R("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),w("Logged in","Starting the scrape now…"),U(_.config))},1500);return}R("starting scrape immediately"),U(_.config)}function Tt(){et(),E("connecting to Creator Lane…"),w("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){F("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),L(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(R("REQUEST_RUN_CONFIG response:",e),!e||!e.active){ut(),_t(),R("no active migration run for this tab — sitting idle");return}_.config=e.config,Et()})}catch(e){F("sendMessage threw:",e),L(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(F("background did not respond within 5s"),L("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return _.config=t.config,U(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const o=t.result||{},r=(o.created||[]).length,s=(o.skipped||[]).length,a=(o.duplicates||[]).length;lt(`Imported ${r} campaign${r===1?"":"s"}`,`Skipped ${s}, duplicates ${a}. Closing this tab in a few seconds — review them in Creator Lane.`)}else L(t.error||"Import failed");return n({ok:!0}),!0}});Tt();
})()
