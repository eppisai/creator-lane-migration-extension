(function(){function $(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function it(t,e){return e?t.querySelector(e):null}function z(t,e){if(!e)return null;for(const n of e.split(",").map(r=>r.trim()).filter(Boolean))try{const r=t.querySelector(n);if(r)return r}catch{}return null}async function K(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((r,o)=>{const s=()=>{const i=document.querySelector(t.split(",")[0].trim());if(i)return r(i);if(Date.now()-n>e)return o(new Error(`waitForSelector timed out: ${t}`));setTimeout(s,200)};s()})}function h(t){return new Promise(e=>setTimeout(e,t))}const j="__creatorlane_migration_overlay__",D="__cl_migration_highlight__",a={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},B='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',F='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',at='"Iowan Old Style", Georgia, "Times New Roman", serif';let l=null,x=null,g=null,w=null,C=null,L=null,y=null;function P(){if(l&&document.body.contains(l))return l;const t=document.getElementById(j);t&&t.remove(),l=document.createElement("div"),l.id=j,l.setAttribute("data-creatorlane","migration"),l.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 360px;
    background: ${a.bg};
    color: ${a.fg};
    border: 1px solid ${a.border};
    border-radius: 14px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.55), 0 0 0 1px ${a.border};
    font-family: ${B};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${a.acc};
    box-shadow:0 0 0 4px ${a.accSoft};
  `;const r=document.createElement("span");r.textContent="Creator Lane",r.style.cssText=`
    font-family:${B};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${a.fg};
  `;const o=document.createElement("span");o.textContent="Migration",o.style.cssText=`
    font-family:${F};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${a.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(r),e.appendChild(o),x=document.createElement("div"),x.style.cssText=`
    font-family:${F};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${a.fg2};margin-bottom:6px;
  `,x.textContent="Step 01 — Boot",g=document.createElement("div"),g.style.cssText=`
    font-family:${B};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${a.fg};
  `,g.textContent="Booting…",w=document.createElement("div"),w.style.cssText=`
    font-family:${B};
    font-size:13px;color:${a.fg2};margin-bottom:14px;line-height:1.45;
  `,w.textContent="Setting up the migration. This window closes itself when finished.";const s=document.createElement("div");return s.style.cssText=`
    background:${a.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${a.border};
  `,C=document.createElement("div"),C.style.cssText=`
    background:${a.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,s.appendChild(C),L=document.createElement("div"),L.style.cssText=`
    font-family:${F};
    font-size:10px;color:${a.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,L.textContent="",y=document.createElement("div"),y.style.cssText=`
    font-family:${F};
    font-size:10.5px;color:${a.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${a.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,l.appendChild(e),l.appendChild(x),l.appendChild(g),l.appendChild(w),l.appendChild(s),l.appendChild(L),l.appendChild(y),document.body.appendChild(l),l}function st(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function _(t,e){P(),t!=null&&(g.textContent=t,g.style.color=a.fg,x.textContent=st(t),x.style.color=a.fg2),e!=null&&(w.textContent=e,w.style.color=a.fg2)}function A(t,e){if(P(),typeof t!="number"||typeof e!="number"||e<=0){C.style.width="0%",L.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));C.style.width=`${n}%`,C.style.background=a.acc,L.textContent=`${t} / ${e}`}function N(t){P(),y.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${a.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${a.fg3};`,y.appendChild(e),y.scrollTop=y.scrollHeight;y.children.length>30;)y.removeChild(y.firstChild)}function R(t){P(),x.textContent="Error",x.style.color=a.danger,g.textContent="Something went wrong",g.style.color=a.danger,w.textContent=t,w.style.color=a.fg2,C.style.background=a.danger}function lt(t,e){P(),x.textContent="Done",x.style.color=a.success,g.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=a.fg;const r=document.createElement("em");r.textContent=t,r.style.cssText=`
    font-family:${at};
    font-style:italic;font-weight:400;
    color:${a.acc};
  `,g.appendChild(n),g.appendChild(r),w.textContent=e||"",w.style.color=a.fg2,C.style.background=a.success,C.style.width="100%"}let V=!1;function ct(){if(V)return;const t=document.createElement("style");t.textContent=`
    .${D} {
      outline: 2px solid ${a.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${a.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),V=!0}function dt(t){if(t){ct(),U(),t.classList.add(D);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function U(){document.querySelectorAll(`.${D}`).forEach(t=>t.classList.remove(D))}function ut(){U(),l&&l.parentNode&&l.parentNode.removeChild(l),l=null}const pt="__creatorlane_cursor__",G="__creatorlane_control_banner__",u={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},mt='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',ft='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',gt='"Iowan Old Style", Georgia, "Times New Roman", serif';let d=null,k=null,W=!1;function Z(){if(W)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${u.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),W=!0}function X(){return d&&document.body.contains(d)||(Z(),d=document.createElement("div"),d.id=pt,d.setAttribute("data-creatorlane","cursor"),d.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,d.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${u.fg}" stroke="${u.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,k=document.createElement("div"),k.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${u.bg};
    color: ${u.fg};
    font-family: ${ft};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${u.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,d.appendChild(k),document.body.appendChild(d),tt(window.innerWidth/2,window.innerHeight/4)),d}function tt(t,e){d.style.transform=`translate(${t-4}px, ${e-2}px)`}function et(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function ht(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function q(t){return new Promise(e=>setTimeout(e,t))}function nt(){if(document.getElementById(G))return;Z();const t=document.createElement("div");t.id=G,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${u.bg};
    color: ${u.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${mt};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${u.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${u.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${u.fg};`;const r=document.createElement("span");r.textContent="·",r.style.cssText=`color:${u.fg};opacity:0.45;margin:0 4px;`;const o=document.createElement("span");o.textContent="is now",o.style.cssText=`color:${u.fg};opacity:0.85;`;const s=document.createElement("em");s.textContent="migrating your automations.",s.style.cssText=`
    font-family:${gt};
    font-style:italic;font-weight:400;
    color:${u.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(s),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function yt(){const t=document.getElementById(G);t&&t.remove()}function v(t){if(X(),!t){k.style.opacity="0";return}k.textContent=t,k.style.opacity="1"}async function ot(t,e={}){X();let n,r;if(t&&t.nodeType===1){await ht(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await q(450));const o=et(t);n=o.x,r=o.y}else if(t&&typeof t.x=="number")n=t.x,r=t.y;else return;tt(n,r),await q(e.duration||420)}function xt(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${u.accSoft};
    border: 2px solid ${u.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function T(t,e){if(!t)return!1;await ot(t),e&&v(e);const n=et(t);xt(n.x,n.y),await q(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function wt(t,e=600){const n=window.scrollY,r=t-n,o=14;for(let s=1;s<=o;s++){const i=s/o,m=i<.5?2*i*i:-1+(4-2*i)*i;window.scrollTo(0,n+r*m),await q(e/o)}}function _t(){d&&d.parentNode&&d.parentNode.removeChild(d),d=null,k=null,yt()}const M=(...t)=>console.log("[CL-migration]",...t),O=(...t)=>console.warn("[CL-migration]",...t);M("content script boot, url:",location.href);const b={config:null,inProgress:!1};function E(t,e,{multi:n=!1}={}){if(!e)return null;const r=e.selector;if(!r||r==="TBD")return null;if(n)return $(t,r).map(i=>Q(i,e.attr||"text")).filter(Boolean);const o=it(t,r);return o?Q(o,e.attr||"text"):null}function Q(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function Y(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function bt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(_("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await h(6e4)))}async function Ct(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,r=t.pagination?.max_scrolls??200,o=t.pagination?.scroll_container_selector;_("Loading your automations","Scrolling through the SuperProfile list…"),v("scrolling to load every automation");function s(){if(o){const f=document.querySelector(o);if(f)return f}return document.scrollingElement||document.documentElement||document.body}let i=$(document,e).length,m=0;A(i,Math.max(i,1));for(let f=0;f<r;f++){const p=s();p.scrollTop=p.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(I=>{const rt=(I.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(rt))try{I.click()}catch{}}),await h(n);const c=$(document,e).length;if(c>i?(i=c,m=0):m++,N(`scroll ${f+1}: visible=${c}, max=${i}, stable=${m}`),m>=6)break}v(`loaded ${i}`);const S=s();return S.scrollTop=0,window.scrollTo(0,0),await h(400),i}async function St(t,e){const n=e.open_modal_flow||{},r=z(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await T(r,"open menu"),await h(n.wait_after_trigger_ms??250);let o=z(document,n.dropdown_edit_option_selector)||null;if(!o){const s=$(document,".pl-dropdown-text"),i=(n.dropdown_edit_option_text||"Edit").toLowerCase();o=s.find(m=>(m.textContent||"").trim().toLowerCase()===i)}if(!o)throw new Error("edit_option_not_found");return await T(o,"click Edit"),await K(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await h(300),document.querySelector(n.modal_root_selector)}async function $t(t,e){if(!t)return null;const n=e.step3_link_flow||{},r=n.dm_pencil_selector||".dm-container-main .edit-icon-div",o=t.querySelector(r);if(!o)return null;await T(o,"open DM editor");const s=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await K(s,n.step_wait_timeout_ms??6e3)}catch{return null}await h(300);const i=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let m=null;for(const p of document.querySelectorAll(i)){const c=p.value||p.getAttribute("value")||"";if(c){m=c;break}}const S=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let f=document.querySelector(S);if(f||(f=Array.from(document.querySelectorAll(".modal-footer button")).find(p=>(p.textContent||"").trim().toLowerCase()==="cancel")),f)await T(f,"back to review"),await h(400);else{const p=t.querySelector(".cf-modal-header-content img.cf-close-button");if(p){await T(p,"close (fallback)"),await h(350);const c=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(I=>(I.textContent||"").trim().toLowerCase()==="exit");c&&await T(c,"discard")}}return m}async function Et(t,e){const n=e.modal_fields||{},r={keyword:E(t,n.keyword,{multi:!0}),dm_body:E(t,n.dm_body),comment_reply:E(t,n.comment_reply),caption:E(t,n.caption),thumbnail_src:E(t,n.thumbnail_src)};let o=null;try{o=await $t(t,e)}catch(s){N(`link_url capture failed: ${s?.message||s}`)}return{...r,link_url:o}}async function J(t){const e=t.modal_close_selector,n=e?z(document,e):null;n?await T(n,"close modal"):(v("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const r=t.open_modal_flow?.modal_root_selector;if(r)for(let o=0;o<20&&document.querySelector(r);o++)await h(150)}async function H(t){if(!b.inProgress){b.inProgress=!0;try{nt(),_("Starting scrape","Creator Lane is reading your SuperProfile automations."),v("starting…"),await bt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await Ct(t);if(M("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw R("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=$(document,t.row_selector).length;_(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),A(0,n);const r=[];for(let o=0;o<n;o++){let s=$(document,t.row_selector);o>=s.length&&(await wt(0,400),await h(600),s=$(document,t.row_selector));let i=s[o];if(!i)for(let c=0;c<30&&!i;c++)window.scrollBy(0,400),await h(300),s=$(document,t.row_selector),i=s[o];if(!i){N(`× row ${o+1} could not be located — skipping`),r.push({index:o,name:null,status:null,scrape_error:"row_not_mounted"}),A(o+1,n);continue}dt(i),A(o,n),_(`Scraping ${o+1} of ${n}`,"Opening the automation card…"),v(`automation ${o+1} of ${n}`),await ot(i);const m=t.list_fields||{},S={name:E(i,m.name),status:E(i,m.status)};let f=null,p=null;try{const c=await St(i,t);f=await Et(c,t),await J(t),N(`✓ ${S.name||`automation ${o+1}`}`)}catch(c){p=c?.message||String(c),N(`× ${S.name||`automation ${o+1}`}: ${p}`);try{await J(t)}catch{}}r.push({index:o,name:S.name,status:S.status,...f||{},scrape_error:p}),A(o+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r.length,stage:"scraping_modals",of:n})}U(),_("Sending to Creator Lane",`Uploading ${r.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:r})}catch(e){O("scrape failed:",e),R(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{b.inProgress=!1}}}function Tt(){if(Y(b.config)){_("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{Y(b.config)||(clearInterval(t),M("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),_("Logged in","Starting the scrape now…"),H(b.config))},1500);return}M("starting scrape immediately"),H(b.config)}function kt(){nt(),v("connecting to Creator Lane…"),_("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){O("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),R(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(M("REQUEST_RUN_CONFIG response:",e),!e||!e.active){ut(),_t(),M("no active migration run for this tab — sitting idle");return}b.config=e.config,Tt()})}catch(e){O("sendMessage threw:",e),R(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(O("background did not respond within 5s"),R("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return b.config=t.config,H(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const r=t.result||{},o=(r.created||[]).length,s=(r.skipped||[]).length,i=(r.duplicates||[]).length;lt(`Imported ${o} campaign${o===1?"":"s"}`,`Skipped ${s}, duplicates ${i}. Closing this tab in a few seconds — review them in Creator Lane.`)}else R(t.error||"Import failed");return n({ok:!0}),!0}});kt();
})()
