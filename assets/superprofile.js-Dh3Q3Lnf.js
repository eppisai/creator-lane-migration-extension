(function(){function u(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function K(t,e){return e?t.querySelector(e):null}function z(t,e){if(!e)return null;for(const n of e.split(",").map(o=>o.trim()).filter(Boolean))try{const o=t.querySelector(n);if(o)return o}catch{}return null}async function rt(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((o,r)=>{const s=()=>{const a=document.querySelector(t.split(",")[0].trim());if(a)return o(a);if(Date.now()-n>e)return r(new Error(`waitForSelector timed out: ${t}`));setTimeout(s,200)};s()})}function w(t){return new Promise(e=>setTimeout(e,t))}const j="__creatorlane_migration_overlay__",B="__cl_migration_highlight__",i={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},P='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',A='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',it='"Iowan Old Style", Georgia, "Times New Roman", serif';let l=null,f=null,p=null,g=null,_=null,k=null,m=null;function N(){if(l&&document.body.contains(l))return l;const t=document.getElementById(j);t&&t.remove(),l=document.createElement("div"),l.id=j,l.setAttribute("data-creatorlane","migration"),l.style.cssText=`
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
    font-family: ${P};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${i.acc};
    box-shadow:0 0 0 4px ${i.accSoft};
  `;const o=document.createElement("span");o.textContent="Creator Lane",o.style.cssText=`
    font-family:${P};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${i.fg};
  `;const r=document.createElement("span");r.textContent="Migration",r.style.cssText=`
    font-family:${A};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${i.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(o),e.appendChild(r),f=document.createElement("div"),f.style.cssText=`
    font-family:${A};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${i.fg2};margin-bottom:6px;
  `,f.textContent="Step 01 — Boot",p=document.createElement("div"),p.style.cssText=`
    font-family:${P};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${i.fg};
  `,p.textContent="Booting…",g=document.createElement("div"),g.style.cssText=`
    font-family:${P};
    font-size:13px;color:${i.fg2};margin-bottom:14px;line-height:1.45;
  `,g.textContent="Setting up the migration. This window closes itself when finished.";const s=document.createElement("div");return s.style.cssText=`
    background:${i.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${i.border};
  `,_=document.createElement("div"),_.style.cssText=`
    background:${i.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,s.appendChild(_),k=document.createElement("div"),k.style.cssText=`
    font-family:${A};
    font-size:10px;color:${i.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,k.textContent="",m=document.createElement("div"),m.style.cssText=`
    font-family:${A};
    font-size:10.5px;color:${i.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${i.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,l.appendChild(e),l.appendChild(f),l.appendChild(p),l.appendChild(g),l.appendChild(s),l.appendChild(k),l.appendChild(m),document.body.appendChild(l),l}function at(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function x(t,e){N(),t!=null&&(p.textContent=t,p.style.color=i.fg,f.textContent=at(t),f.style.color=i.fg2),e!=null&&(g.textContent=e,g.style.color=i.fg2)}function M(t,e){if(N(),typeof t!="number"||typeof e!="number"||e<=0){_.style.width="0%",k.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));_.style.width=`${n}%`,_.style.background=i.acc,k.textContent=`${t} / ${e}`}function I(t){N(),m.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${i.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${i.fg3};`,m.appendChild(e),m.scrollTop=m.scrollHeight;m.children.length>30;)m.removeChild(m.firstChild)}function R(t){N(),f.textContent="Error",f.style.color=i.danger,p.textContent="Something went wrong",p.style.color=i.danger,g.textContent=t,g.style.color=i.fg2,_.style.background=i.danger}function st(t,e){N(),f.textContent="Done",f.style.color=i.success,p.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=i.fg;const o=document.createElement("em");o.textContent=t,o.style.cssText=`
    font-family:${it};
    font-style:italic;font-weight:400;
    color:${i.acc};
  `,p.appendChild(n),p.appendChild(o),g.textContent=e||"",g.style.color=i.fg2,_.style.background=i.success,_.style.width="100%"}let W=!1;function lt(){if(W)return;const t=document.createElement("style");t.textContent=`
    .${B} {
      outline: 2px solid ${i.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${i.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),W=!0}function ct(t){if(t){lt(),q(),t.classList.add(B);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function q(){document.querySelectorAll(`.${B}`).forEach(t=>t.classList.remove(B))}function dt(){q(),l&&l.parentNode&&l.parentNode.removeChild(l),l=null}const ut="__creatorlane_cursor__",D="__creatorlane_control_banner__",d={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},pt='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',mt='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',ft='"Iowan Old Style", Georgia, "Times New Roman", serif';let c=null,S=null,V=!1;function Z(){if(V)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${d.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),V=!0}function X(){return c&&document.body.contains(c)||(Z(),c=document.createElement("div"),c.id=ut,c.setAttribute("data-creatorlane","cursor"),c.style.cssText=`
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
    font-family: ${mt};
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
  `,c.appendChild(S),document.body.appendChild(c),tt(window.innerWidth/2,window.innerHeight/4)),c}function tt(t,e){c.style.transform=`translate(${t-4}px, ${e-2}px)`}function et(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function gt(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function O(t){return new Promise(e=>setTimeout(e,t))}function nt(){if(document.getElementById(D))return;Z();const t=document.createElement("div");t.id=D,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${d.bg};
    color: ${d.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${pt};
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
    font-family:${ft};
    font-style:italic;font-weight:400;
    color:${d.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(s),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function ht(){const t=document.getElementById(D);t&&t.remove()}function E(t){if(X(),!t){S.style.opacity="0";return}S.textContent=t,S.style.opacity="1"}async function ot(t,e={}){X();let n,o;if(t&&t.nodeType===1){await gt(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await O(450));const r=et(t);n=r.x,o=r.y}else if(t&&typeof t.x=="number")n=t.x,o=t.y;else return;tt(n,o),await O(e.duration||420)}function xt(t,e){const n=document.createElement("div");n.style.cssText=`
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
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function G(t,e){if(!t)return!1;await ot(t),e&&E(e);const n=et(t);xt(n.x,n.y),await O(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function H(t,e=600){const n=window.scrollY,o=t-n,r=14;for(let s=1;s<=r;s++){const a=s/r,h=a<.5?2*a*a:-1+(4-2*a)*a;window.scrollTo(0,n+o*h),await O(e/r)}}function yt(){c&&c.parentNode&&c.parentNode.removeChild(c),c=null,S=null,ht()}const L=(...t)=>console.log("[CL-migration]",...t),F=(...t)=>console.warn("[CL-migration]",...t);L("content script boot, url:",location.href);const y={config:null,inProgress:!1};function $(t,e,{multi:n=!1}={}){if(!e)return null;const o=e.selector;if(!o||o==="TBD")return null;if(n)return u(t,o).map(a=>Q(a,e.attr||"text")).filter(Boolean);const r=K(t,o);return r?Q(r,e.attr||"text"):null}function Q(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:t.getAttribute(e)}function Y(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function wt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(x("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await w(6e4)))}async function _t(t){const e=t.row_selector,n=t.pagination?.idle_ms??1200,o=t.pagination?.max_scrolls??60;x("Loading your automations","Scrolling through the SuperProfile list…"),E("scrolling to load every automation");const r=K(document,e);let s=!1,a=u(document,e).length;M(a,Math.max(a,1));for(let b=0;b<o;b++){await H(document.body.scrollHeight,500),await w(n);const T=u(document,e).length;if(r&&!document.body.contains(r)&&(s=!0),I(`scroll ${b+1}: ${T} rows visible${s?" (virtualized)":""}`),T===a){await w(n);const v=u(document,e).length;if(v===a)break;a=v}else a=T}E("done scrolling"),await H(0,500),await w(300);const h=s?Math.max(a,u(document,e).length):u(document,e).length;return s&&I(`virtualized list — best estimate: ${h} rows`),h}async function bt(t,e){const n=e.open_modal_flow||{},o=z(t,n.dropdown_trigger_selector);if(!o)throw new Error("dropdown_trigger_not_found");await G(o,"open menu"),await w(n.wait_after_trigger_ms??250);let r=z(document,n.dropdown_edit_option_selector)||null;if(!r){const s=u(document,".pl-dropdown-text"),a=(n.dropdown_edit_option_text||"Edit").toLowerCase();r=s.find(h=>(h.textContent||"").trim().toLowerCase()===a)}if(!r)throw new Error("edit_option_not_found");return await G(r,"click Edit"),await rt(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await w(300),document.querySelector(n.modal_root_selector)}function Ct(t,e){const n=e.modal_fields||{};return{keyword:$(t,n.keyword,{multi:!0}),dm_body:$(t,n.dm_body),comment_reply:$(t,n.comment_reply),caption:$(t,n.caption),thumbnail_src:$(t,n.thumbnail_src)}}async function J(t){const e=t.modal_close_selector,n=e?z(document,e):null;n?await G(n,"close modal"):(E("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const o=t.open_modal_flow?.modal_root_selector;if(o)for(let r=0;r<20&&document.querySelector(o);r++)await w(150)}async function U(t){if(!y.inProgress){y.inProgress=!0;try{nt(),x("Starting scrape","Creator Lane is reading your SuperProfile automations."),E("starting…"),await wt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await _t(t);if(L("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw R("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=u(document,t.row_selector).length;x(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),M(0,n);const o=[];for(let r=0;r<n;r++){let s=u(document,t.row_selector);r>=s.length&&(await H(0,400),await w(600),s=u(document,t.row_selector));let a=s[r];if(!a)for(let C=0;C<30&&!a;C++)window.scrollBy(0,400),await w(300),s=u(document,t.row_selector),a=s[r];if(!a){I(`× row ${r+1} could not be located — skipping`),o.push({index:r,name:null,status:null,scrape_error:"row_not_mounted"}),M(r+1,n);continue}ct(a),M(r,n),x(`Scraping ${r+1} of ${n}`,"Opening the automation card…"),E(`automation ${r+1} of ${n}`),await ot(a);const h=t.list_fields||{},b={name:$(a,h.name),status:$(a,h.status)};let T=null,v=null;try{const C=await bt(a,t);T=Ct(C,t),await J(t),I(`✓ ${b.name||`automation ${r+1}`}`)}catch(C){v=C?.message||String(C),I(`× ${b.name||`automation ${r+1}`}: ${v}`);try{await J(t)}catch{}}o.push({index:r,name:b.name,status:b.status,...T||{},scrape_error:v}),M(r+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:o.length,stage:"scraping_modals",of:n})}q(),x("Sending to Creator Lane",`Uploading ${o.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:o})}catch(e){F("scrape failed:",e),R(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{y.inProgress=!1}}}function $t(){if(Y(y.config)){x("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{Y(y.config)||(clearInterval(t),L("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),x("Logged in","Starting the scrape now…"),U(y.config))},1500);return}L("starting scrape immediately"),U(y.config)}function St(){nt(),E("connecting to Creator Lane…"),x("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){F("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),R(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(L("REQUEST_RUN_CONFIG response:",e),!e||!e.active){dt(),yt(),L("no active migration run for this tab — sitting idle");return}y.config=e.config,$t()})}catch(e){F("sendMessage threw:",e),R(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(F("background did not respond within 5s"),R("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return y.config=t.config,U(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const o=t.result||{},r=(o.created||[]).length,s=(o.skipped||[]).length,a=(o.duplicates||[]).length;st(`Imported ${r} campaign${r===1?"":"s"}`,`Skipped ${s}, duplicates ${a}. Closing this tab in a few seconds — review them in Creator Lane.`)}else R(t.error||"Import failed");return n({ok:!0}),!0}});St();
})()
