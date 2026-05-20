(function(){function c(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function W(t,e){return e?t.querySelector(e):null}function A(t,e){if(!e)return null;for(const n of e.split(",").map(r=>r.trim()).filter(Boolean))try{const r=t.querySelector(n);if(r)return r}catch{}return null}async function X(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((r,o)=>{const a=()=>{const i=document.querySelector(t.split(",")[0].trim());if(i)return r(i);if(Date.now()-n>e)return o(new Error(`waitForSelector timed out: ${t}`));setTimeout(a,200)};a()})}function g(t){return new Promise(e=>setTimeout(e,t))}const U="__creatorlane_migration_overlay__",M="__cl_migration_highlight__";let s=null,p=null,m=null,v=null,S=null,d=null;function R(){if(s&&document.body.contains(s))return s;const t=document.getElementById(U);t&&t.remove(),s=document.createElement("div"),s.id=U,s.setAttribute("data-creatorlane","migration"),s.style.cssText=`
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 2147483647;
    width: 340px;
    background: #0b0b0c;
    color: #fff;
    border: 1px solid #3a3a3d;
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.45);
    font: 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
    padding: 14px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:8px;";const n=document.createElement("span");n.style.cssText="width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e;";const r=document.createElement("span");r.textContent="Creator Lane Migration",r.style.cssText="font-weight:600;letter-spacing:0.2px;font-size:12px;color:#d4d4d8;",e.appendChild(n),e.appendChild(r),p=document.createElement("div"),p.style.cssText="font-weight:600;font-size:15px;margin-bottom:4px;color:#fff;",p.textContent="Booting…",m=document.createElement("div"),m.style.cssText="font-size:12px;color:#a1a1aa;margin-bottom:10px;line-height:1.45;",m.textContent="Setting up the migration. This window will close automatically when finished.";const o=document.createElement("div");return o.style.cssText="background:#1f1f23;height:6px;border-radius:999px;overflow:hidden;margin-bottom:6px;",v=document.createElement("div"),v.style.cssText="background:linear-gradient(90deg,#7c3aed,#22c55e);height:100%;width:0%;transition:width 240ms ease;",o.appendChild(v),S=document.createElement("div"),S.style.cssText="font-size:11px;color:#71717a;text-align:right;margin-bottom:8px;",S.textContent="",d=document.createElement("div"),d.style.cssText="font-size:11px;color:#71717a;max-height:80px;overflow-y:auto;border-top:1px solid #27272a;padding-top:8px;display:none;",s.appendChild(e),s.appendChild(p),s.appendChild(m),s.appendChild(o),s.appendChild(S),s.appendChild(d),document.body.appendChild(s),s}function f(t,e){R(),t!=null&&(p.textContent=t),e!=null&&(m.textContent=e)}function L(t,e){if(R(),typeof t!="number"||typeof e!="number"||e<=0){v.style.width="0%",S.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));v.style.width=`${n}%`,S.textContent=`${t} / ${e}`}function $(t){R(),d.style.display="block";const e=document.createElement("div");for(e.textContent=`• ${t}`,e.style.cssText="padding:2px 0;color:#a1a1aa;",d.appendChild(e),d.scrollTop=d.scrollHeight;d.children.length>30;)d.removeChild(d.firstChild)}function k(t){R(),p.textContent="Something went wrong",p.style.color="#f87171",m.textContent=t,m.style.color="#fca5a5"}function tt(t,e){R(),p.textContent=t,p.style.color="#22c55e",m.textContent=e||"",m.style.color="#a7f3d0",v.style.width="100%"}let F=!1;function et(){if(F)return;const t=document.createElement("style");t.textContent=`
    .${M} {
      outline: 3px solid #22c55e !important;
      outline-offset: 2px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 4px rgba(34,197,94,0.18) !important;
      border-radius: 8px !important;
    }
  `,document.head.appendChild(t),F=!0}function nt(t){if(t){et(),z(),t.classList.add(M);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function z(){document.querySelectorAll(`.${M}`).forEach(t=>t.classList.remove(M))}function ot(){z(),s&&s.parentNode&&s.parentNode.removeChild(s),s=null}const rt="__creatorlane_cursor__",B="__creatorlane_control_banner__";let l=null,_=null,G=!1;function V(){if(G)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_cursor_pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.55); }
      50%      { box-shadow: 0 0 0 10px rgba(124,58,237,0); }
    }
  `,document.head.appendChild(t),G=!0}function Q(){return l&&document.body.contains(l)||(V(),l=document.createElement("div"),l.id=rt,l.setAttribute("data-creatorlane","cursor"),l.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 24px;
    height: 24px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,l.innerHTML=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.45));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="#fff" stroke="#0b0b0c" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,_=document.createElement("div"),_.style.cssText=`
    position: absolute;
    left: 22px;
    top: 22px;
    padding: 4px 8px;
    background: #0b0b0c;
    color: #fff;
    font: 600 11px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(0,0,0,0.35);
    border: 1px solid rgba(255,255,255,0.12);
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,l.appendChild(_),document.body.appendChild(l),Y(window.innerWidth/2,window.innerHeight/4)),l}function Y(t,e){l.style.transform=`translate(${t-4}px, ${e-2}px)`}function K(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function it(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function P(t){return new Promise(e=>setTimeout(e,t))}function Z(){if(document.getElementById(B))return;V();const t=document.createElement("div");t.id=B,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: linear-gradient(90deg, rgba(124,58,237,0.96), rgba(34,197,94,0.96));
    color: #fff;
    padding: 8px 16px;
    text-align: center;
    font: 600 12px/1.3 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
    letter-spacing: 0.2px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,t.innerHTML=`
    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#fff;animation:__cl_cursor_pulse 1.6s ease-out infinite;"></span>
    <span>Creator Lane is controlling this tab — migrating your SuperProfile automations</span>
  `,document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function at(){const t=document.getElementById(B);t&&t.remove()}function b(t){if(Q(),!t){_.style.opacity="0";return}_.textContent=t,_.style.opacity="1"}async function J(t,e={}){Q();let n,r;if(t&&t.nodeType===1){await it(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await P(450));const o=K(t);n=o.x,r=o.y}else if(t&&typeof t.x=="number")n=t.x,r=t.y;else return;Y(n,r),await P(e.duration||420)}function st(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(34,197,94,0.55);
    border: 2px solid #22c55e;
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function N(t,e){if(!t)return!1;await J(t),e&&b(e);const n=K(t);st(n.x,n.y),await P(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}async function D(t,e=600){const n=window.scrollY,r=t-n,o=14;for(let a=1;a<=o;a++){const i=a/o,u=i<.5?2*i*i:-1+(4-2*i)*i;window.scrollTo(0,n+r*u),await P(e/o)}}function lt(){l&&l.parentNode&&l.parentNode.removeChild(l),l=null,_=null,at()}const T=(...t)=>console.log("[CL-migration]",...t),I=(...t)=>console.warn("[CL-migration]",...t);T("content script boot, url:",location.href);const h={config:null,inProgress:!1};function y(t,e,{multi:n=!1}={}){if(!e)return null;const r=e.selector;if(!r||r==="TBD")return null;if(n)return c(t,r).map(i=>O(i,e.attr||"text")).filter(Boolean);const o=W(t,r);return o?O(o,e.attr||"text"):null}function O(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:t.getAttribute(e)}function q(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function ct(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(f("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await g(6e4)))}async function dt(t){const e=t.row_selector,n=t.pagination?.idle_ms??1200,r=t.pagination?.max_scrolls??60;f("Loading your automations","Scrolling through the SuperProfile list…"),b("scrolling to load every automation");const o=W(document,e);let a=!1,i=c(document,e).length;L(i,Math.max(i,1));for(let w=0;w<r;w++){await D(document.body.scrollHeight,500),await g(n);const C=c(document,e).length;if(o&&!document.body.contains(o)&&(a=!0),$(`scroll ${w+1}: ${C} rows visible${a?" (virtualized)":""}`),C===i){await g(n);const E=c(document,e).length;if(E===i)break;i=E}else i=C}b("done scrolling"),await D(0,500),await g(300);const u=a?Math.max(i,c(document,e).length):c(document,e).length;return a&&$(`virtualized list — best estimate: ${u} rows`),u}async function ut(t,e){const n=e.open_modal_flow||{},r=A(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await N(r,"open menu"),await g(n.wait_after_trigger_ms??250);let o=A(document,n.dropdown_edit_option_selector)||null;if(!o){const a=c(document,".pl-dropdown-text"),i=(n.dropdown_edit_option_text||"Edit").toLowerCase();o=a.find(u=>(u.textContent||"").trim().toLowerCase()===i)}if(!o)throw new Error("edit_option_not_found");return await N(o,"click Edit"),await X(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await g(300),document.querySelector(n.modal_root_selector)}function pt(t,e){const n=e.modal_fields||{};return{keyword:y(t,n.keyword,{multi:!0}),dm_body:y(t,n.dm_body),comment_reply:y(t,n.comment_reply),caption:y(t,n.caption),thumbnail_src:y(t,n.thumbnail_src)}}async function j(t){const e=t.modal_close_selector,n=e?A(document,e):null;n?await N(n,"close modal"):(b("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const r=t.open_modal_flow?.modal_root_selector;if(r)for(let o=0;o<20&&document.querySelector(r);o++)await g(150)}async function H(t){if(!h.inProgress){h.inProgress=!0;try{Z(),f("Starting scrape","Creator Lane is reading your SuperProfile automations."),b("starting…"),await ct(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=await dt(t);if(T("exhaustList found",e,"rows"),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:e,total:e,stage:"list_loaded"}),e===0)throw k("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");const n=c(document,t.row_selector).length;f(`Scraping ${n} automation${n===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),L(0,n);const r=[];for(let o=0;o<n;o++){let a=c(document,t.row_selector);o>=a.length&&(await D(0,400),await g(600),a=c(document,t.row_selector));let i=a[o];if(!i)for(let x=0;x<30&&!i;x++)window.scrollBy(0,400),await g(300),a=c(document,t.row_selector),i=a[o];if(!i){$(`× row ${o+1} could not be located — skipping`),r.push({index:o,name:null,status:null,scrape_error:"row_not_mounted"}),L(o+1,n);continue}nt(i),L(o,n),f(`Scraping ${o+1} of ${n}`,"Opening the automation card…"),b(`automation ${o+1} of ${n}`),await J(i);const u=t.list_fields||{},w={name:y(i,u.name),status:y(i,u.status)};let C=null,E=null;try{const x=await ut(i,t);C=pt(x,t),await j(t),$(`✓ ${w.name||`automation ${o+1}`}`)}catch(x){E=x?.message||String(x),$(`× ${w.name||`automation ${o+1}`}: ${E}`);try{await j(t)}catch{}}r.push({index:o,name:w.name,status:w.status,...C||{},scrape_error:E}),L(o+1,n),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r.length,stage:"scraping_modals",of:n})}z(),f("Sending to Creator Lane",`Uploading ${r.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:r})}catch(e){I("scrape failed:",e),k(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{h.inProgress=!1}}}function mt(){if(q(h.config)){f("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{q(h.config)||(clearInterval(t),T("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),f("Logged in","Starting the scrape now…"),H(h.config))},1500);return}T("starting scrape immediately"),H(h.config)}function ft(){Z(),b("connecting to Creator Lane…"),f("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){I("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),k(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(T("REQUEST_RUN_CONFIG response:",e),!e||!e.active){ot(),lt(),T("no active migration run for this tab — sitting idle");return}h.config=e.config,mt()})}catch(e){I("sendMessage threw:",e),k(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(I("background did not respond within 5s"),k("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return h.config=t.config,H(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const r=t.result||{},o=(r.created||[]).length,a=(r.skipped||[]).length,i=(r.duplicates||[]).length;tt(`Imported ${o} campaign${o===1?"":"s"}`,`Skipped ${a}, duplicates ${i}. Closing this tab in a few seconds — review them in Creator Lane.`)}else k(t.error||"Import failed");return n({ok:!0}),!0}});ft();
})()
