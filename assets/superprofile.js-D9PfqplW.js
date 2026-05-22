(function(){function O(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function ft(t,e){return e?t.querySelector(e):null}function at(t,e){if(!e)return null;for(const n of e.split(",").map(o=>o.trim()).filter(Boolean))try{const o=t.querySelector(n);if(o)return o}catch{}return null}async function it(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((o,a)=>{const r=()=>{const i=document.querySelector(t.split(",")[0].trim());if(i)return o(i);if(Date.now()-n>e)return a(new Error(`waitForSelector timed out: ${t}`));setTimeout(r,200)};r()})}function f(t){return new Promise(e=>setTimeout(e,t))}const Y="__creatorlane_migration_overlay__",j="__cl_migration_highlight__",c={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},z='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',U='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',gt='"Iowan Old Style", Georgia, "Times New Roman", serif';let m=null,v=null,S=null,k=null,M=null,B=null,$=null;function H(){if(m&&document.body.contains(m))return m;const t=document.getElementById(Y);t&&t.remove(),m=document.createElement("div"),m.id=Y,m.setAttribute("data-creatorlane","migration"),m.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 360px;
    background: ${c.bg};
    color: ${c.fg};
    border: 1px solid ${c.border};
    border-radius: 14px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.55), 0 0 0 1px ${c.border};
    font-family: ${z};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${c.acc};
    box-shadow:0 0 0 4px ${c.accSoft};
  `;const o=document.createElement("span");o.textContent="Creator Lane",o.style.cssText=`
    font-family:${z};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${c.fg};
  `;const a=document.createElement("span");a.textContent="Migration",a.style.cssText=`
    font-family:${U};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${c.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(o),e.appendChild(a),v=document.createElement("div"),v.style.cssText=`
    font-family:${U};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${c.fg2};margin-bottom:6px;
  `,v.textContent="Step 01 — Boot",S=document.createElement("div"),S.style.cssText=`
    font-family:${z};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${c.fg};
  `,S.textContent="Booting…",k=document.createElement("div"),k.style.cssText=`
    font-family:${z};
    font-size:13px;color:${c.fg2};margin-bottom:14px;line-height:1.45;
  `,k.textContent="Setting up the migration. This window closes itself when finished.";const r=document.createElement("div");return r.style.cssText=`
    background:${c.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${c.border};
  `,M=document.createElement("div"),M.style.cssText=`
    background:${c.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,r.appendChild(M),B=document.createElement("div"),B.style.cssText=`
    font-family:${U};
    font-size:10px;color:${c.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,B.textContent="",$=document.createElement("div"),$.style.cssText=`
    font-family:${U};
    font-size:10.5px;color:${c.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${c.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,m.appendChild(e),m.appendChild(v),m.appendChild(S),m.appendChild(k),m.appendChild(r),m.appendChild(B),m.appendChild($),document.body.appendChild(m),m}function ht(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function A(t,e){H(),t!=null&&(S.textContent=t,S.style.color=c.fg,v.textContent=ht(t),v.style.color=c.fg2),e!=null&&(k.textContent=e,k.style.color=c.fg2)}function G(t,e){if(H(),typeof t!="number"||typeof e!="number"||e<=0){M.style.width="0%",B.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));M.style.width=`${n}%`,M.style.background=c.acc,B.textContent=`${t} / ${e}`}function b(t){H(),$.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${c.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${c.fg3};`,$.appendChild(e),$.scrollTop=$.scrollHeight;$.children.length>30;)$.removeChild($.firstChild)}function P(t){H(),v.textContent="Error",v.style.color=c.danger,S.textContent="Something went wrong",S.style.color=c.danger,k.textContent=t,k.style.color=c.fg2,M.style.background=c.danger}function yt(t,e){H(),v.textContent="Done",v.style.color=c.success,S.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=c.fg;const o=document.createElement("em");o.textContent=t,o.style.cssText=`
    font-family:${gt};
    font-style:italic;font-weight:400;
    color:${c.acc};
  `,S.appendChild(n),S.appendChild(o),k.textContent=e||"",k.style.color=c.fg2,M.style.background=c.success,M.style.width="100%"}let Z=!1;function bt(){if(Z)return;const t=document.createElement("style");t.textContent=`
    .${j} {
      outline: 2px solid ${c.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${c.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),Z=!0}function wt(t){if(t){bt(),J(),t.classList.add(j);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function J(){document.querySelectorAll(`.${j}`).forEach(t=>t.classList.remove(j))}function xt(){J(),m&&m.parentNode&&m.parentNode.removeChild(m),m=null}const _t="__creatorlane_cursor__",V="__creatorlane_control_banner__",y={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},St='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',Ct='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',Et='"Iowan Old Style", Georgia, "Times New Roman", serif';let h=null,q=null,tt=!1;function st(){if(tt)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${y.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),tt=!0}function lt(){return h&&document.body.contains(h)||(st(),h=document.createElement("div"),h.id=_t,h.setAttribute("data-creatorlane","cursor"),h.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,h.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${y.fg}" stroke="${y.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,q=document.createElement("div"),q.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${y.bg};
    color: ${y.fg};
    font-family: ${Ct};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${y.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,h.appendChild(q),document.body.appendChild(h),ct(window.innerWidth/2,window.innerHeight/4)),h}function ct(t,e){h.style.transform=`translate(${t-4}px, ${e-2}px)`}function ut(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function $t(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function K(t){return new Promise(e=>setTimeout(e,t))}function dt(){if(document.getElementById(V))return;st();const t=document.createElement("div");t.id=V,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${y.bg};
    color: ${y.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${St};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${y.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${y.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${y.fg};`;const o=document.createElement("span");o.textContent="·",o.style.cssText=`color:${y.fg};opacity:0.45;margin:0 4px;`;const a=document.createElement("span");a.textContent="is now",a.style.cssText=`color:${y.fg};opacity:0.85;`;const r=document.createElement("em");r.textContent="migrating your automations.",r.style.cssText=`
    font-family:${Et};
    font-style:italic;font-weight:400;
    color:${y.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(a),t.appendChild(r),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function vt(){const t=document.getElementById(V);t&&t.remove()}function I(t){if(lt(),!t){q.style.opacity="0";return}q.textContent=t,q.style.opacity="1"}async function pt(t,e={}){lt();let n,o;if(t&&t.nodeType===1){await $t(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await K(450));const a=ut(t);n=a.x,o=a.y}else if(t&&typeof t.x=="number")n=t.x,o=t.y;else return;ct(n,o),await K(e.duration||420)}function kt(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${y.accSoft};
    border: 2px solid ${y.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function C(t,e){if(!t)return!1;await pt(t),e&&I(e);const n=ut(t);kt(n.x,n.y),await K(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}function Tt(){h&&h.parentNode&&h.parentNode.removeChild(h),h=null,q=null,vt()}const D=(...t)=>console.log("[CL-migration]",...t),W=(...t)=>console.warn("[CL-migration]",...t);D("content script boot, url:",location.href);const R={config:null,inProgress:!1};function N(t,e,{multi:n=!1}={}){if(!e)return null;const o=e.selector;if(!o||o==="TBD")return null;if(n)return O(t,o).map(i=>et(i,e.attr||"text")).filter(Boolean);const a=ft(t,o);return a?et(a,e.attr||"text"):null}function et(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function nt(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function Lt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(A("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await f(6e4)))}async function At(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,o=t.pagination?.max_scrolls??200,a=t.pagination?.scroll_container_selector;A("Loading your automations","Scrolling + paginating through the SuperProfile list…"),I("loading every automation");function r(){if(a){const p=document.querySelector(a);if(p)return p}return document.scrollingElement||document.documentElement||document.body}async function i(){let p=O(document,e).length,w=0;for(let _=0;_<o;_++){const E=r();E.scrollTop=E.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(x=>{const L=(x.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(L))try{x.click()}catch{}}),await f(n);const T=O(document,e).length;if(T>p?(p=T,w=0):w++,w>=6)break}return p}function s(){if(document.querySelector(".modal.show, .modal.fade.show"))return null;const p=[".pagination",".paging","nav[aria-label*='pagination' i]","[role='navigation'][aria-label*='page' i]"];let w=null;for(const x of p){const L=document.querySelector(x);if(L){w=L;break}}if(!w)return null;const _=w.querySelector(".active, .selected, [aria-current='page']")||null,E=_?parseInt((_.textContent||"").trim(),10):NaN,T=Array.from(w.querySelectorAll("button, a, li, [role='button']"));for(const x of T){if(x.hasAttribute("disabled")||x.classList.contains("disabled")||x.getAttribute("aria-disabled")==="true")continue;const L=(x.textContent||"").trim().toLowerCase(),X=(x.getAttribute("aria-label")||"").toLowerCase();if(L==="next"||L==="›"||L===">"||/^next$/.test(X))return x}if(!isNaN(E)){for(const x of T)if(parseInt((x.textContent||"").trim(),10)===E+1)return x}return null}let l=await i();b(`page 1: ${l} rows`);let u=location.href,d=l;for(let p=2;p<=50;p++){const w=s();if(!w)break;try{await C(w,`page ${p}`)}catch{break}await f(n);const _=await i();b(`page ${p}: ${_} rows`);const E=location.href!==u;if(u=location.href,!E&&_<=d){b("page nav clicked but no progress — stopping pagination");break}d=_,_>l&&(l=_)}I(`loaded ${l}`);const g=r();return g.scrollTop=0,window.scrollTo(0,0),await f(400),l}function Rt(t){const e=Array.from(document.querySelectorAll("li, button, a, [role='menuitem'], div, span")),n=[];for(const i of e){if(!i.offsetParent&&i.offsetWidth===0&&i.offsetHeight===0)continue;Array.from(i.childNodes).filter(l=>l.nodeType===Node.TEXT_NODE).map(l=>l.textContent.trim()).join("").trim().toLowerCase()===t&&n.push(i)}if(n.length===0)for(const i of e){if(!i.offsetParent&&i.offsetWidth===0&&i.offsetHeight===0)continue;(i.textContent||"").trim().toLowerCase()===t&&i.children.length<=2&&n.push(i)}if(n.length===0)return null;const a=n.find(i=>i.closest(".cf-dropdown-menu, .dropdown-menu, [class*='dropdown'], [role='menu'], [class*='popover']"))||n[0];let r=a;for(let i=0;i<6&&r;i++){if(r.matches("li, button, [role='menuitem'], a")||r.onclick||r.parentElement&&getComputedStyle(r).cursor==="pointer")return r;r=r.parentElement}return a}async function Mt(t,e){const n=e.open_modal_flow||{};async function o(a){const r=at(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await C(r,a===1?"open menu":"retry menu"),await f(n.wait_after_trigger_ms??350);const i=(n.dropdown_edit_option_text||"Edit").toLowerCase(),s=Rt(i);if(!s)throw new Error("edit_option_not_found");await C(s,"click Edit");try{await it(n.modal_root_selector,n.modal_wait_timeout_ms??8e3)}catch(l){const u=document.querySelector(".modal.show, .modal.fade.show");if(u&&!u.matches(n.modal_root_selector)){b(`wrong modal opened (${u.className}) — dismissing`);const d=u.querySelector(".cf-close-button, [aria-label='close' i], button.close");if(d)try{d.click()}catch{}document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await f(500)}throw l}return await f(300),document.querySelector(n.modal_root_selector)}try{return await o(1)}catch(a){return b(`open modal failed: ${a?.message||a} — retrying`),document.body.click(),await f(800),await o(2)}}async function It(t,e){if(!t)return null;const n=e.step3_link_flow||{},o=n.dm_pencil_selector||".dm-container-main .edit-icon-div",a=t.querySelector(o);if(!a)return null;await C(a,"open DM editor");const r=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await it(r,n.step_wait_timeout_ms??6e3)}catch{return null}await f(300);const i=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let s=null;for(const d of document.querySelectorAll(i)){const g=d.value||d.getAttribute("value")||"";if(g){s=g;break}}if(!s){const d=[".a-dm-text-button-container",".link-button-container",".modal-body"],g=/^https?:\/\/\S+$/i;for(const p of d){const w=document.querySelector(p);if(!w)continue;const _=w.querySelectorAll("input[type='text'], input:not([type])");for(const E of _){const T=(E.value||E.getAttribute("value")||"").trim();if(g.test(T)){s=T,b(`link_url found via fallback in ${p}`);break}}if(s)break}}s||b("no link_url found in Step 3 — card may have no button configured");const l=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let u=document.querySelector(l);if(u||(u=Array.from(document.querySelectorAll(".modal-footer button")).find(d=>(d.textContent||"").trim().toLowerCase()==="cancel")),u)await C(u,"back to review"),await f(400);else{const d=t.querySelector(".cf-modal-header-content img.cf-close-button");if(d){await C(d,"close (fallback)"),await f(350);const g=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(p=>(p.textContent||"").trim().toLowerCase()==="exit");g&&await C(g,"discard")}}return s}async function Nt(t,e){const n=e.modal_fields||{},o={keyword:N(t,n.keyword,{multi:!0}),dm_body:N(t,n.dm_body),comment_reply:N(t,n.comment_reply),caption:N(t,n.caption),thumbnail_src:N(t,n.thumbnail_src)};let a=null;try{a=await It(t,e)}catch(r){b(`link_url capture failed: ${r?.message||r}`)}return{...o,link_url:a}}async function ot(t){const e=t.modal_close_selector,n=e?at(document,e):null;n?await C(n,"close modal"):(I("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const o=t.open_modal_flow?.modal_root_selector;if(o)for(let a=0;a<25&&document.querySelector(o);a++)await f(150);for(let a=0;a<25;a++){const r=document.querySelector(".modal.fade.a-dm-modal"),i=document.querySelector(".modal-backdrop");if(!r&&!i)break;await f(150)}await f(300)}async function Pt(t){const e=t.pagination||{},n=e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input",o=e.items_per_page_option_selector||".select-dropdown.open .select-option",a=document.querySelector(n);if(!a)return null;const r=parseInt(a.value||a.getAttribute("value")||"0",10);try{const i=a.closest(".form-outline")||a.closest(".select-input-wrapper")||a.closest(".select-wrapper.pagination-select")||a;await C(i,"items per page"),await f(500);let s=document.querySelectorAll(o);if(s.length===0){try{a.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),a.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0})),a.click()}catch{}await f(500),s=document.querySelectorAll(o)}if(s.length===0)return b(`items-per-page popover didn't open — staying at ${r}`),r;let l=s[s.length-1],u=parseInt((l.textContent||"").trim(),10)||0;for(const d of s){const g=parseInt((d.textContent||"").trim(),10)||0;g>u&&(l=d,u=g)}return await C(l,`set ${u}/page`),await f(800),b(`items per page: ${r} → ${u}`),u}catch(i){return b(`items-per-page maximize failed: ${i?.message||i}`),r||null}}function qt(t){const e=t.pagination||{},n=document.querySelectorAll(".tab, .auto-tabs-item, [class*='automation-tab']");for(const r of n){const i=(r.textContent||"").match(/automations?\s*\((\d+)\)/i);if(i)return parseInt(i[1],10)}const o=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages"),a=document.querySelector(e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input");if(o&&a){const r=(o.textContent||"").match(/(\d+)/),i=parseInt(a.value||"0",10)||0;if(r&&i)return parseInt(r[1],10)*i}return null}async function Bt(t){const e=t.pagination||{},n=F(t),o=mt(t);if(n>=o)return!1;const a=n+1,r=document.querySelector(e.current_page_selector||".pagination-input");if(r)try{const l=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;l?l.call(r,String(a)):r.value=String(a),r.dispatchEvent(new Event("input",{bubbles:!0})),r.dispatchEvent(new Event("change",{bubbles:!0})),r.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",keyCode:13,bubbles:!0})),r.dispatchEvent(new KeyboardEvent("keypress",{key:"Enter",code:"Enter",keyCode:13,bubbles:!0})),r.dispatchEvent(new KeyboardEvent("keyup",{key:"Enter",code:"Enter",keyCode:13,bubbles:!0})),r.blur(),await f(e.page_transition_ms||900);const u=F(t);if(u===a)return I(`page ${u}`),!0}catch{}const i=e.next_button_selector||".pagination-buttons-container .pagination-button:last-of-type";let s=document.querySelector(i);if(!s){const l=document.querySelector(e.container_selector||".pagination-container");l&&(s=Array.from(l.querySelectorAll("button")).find(u=>(u.textContent||"").trim().toLowerCase()==="next"))}return!s||s.disabled||s.hasAttribute("disabled")||s.classList.contains("disabled")?!1:(await C(s,`page ${a} (button)`),await f(e.page_transition_ms||900),F(t)>n)}function F(t){const e=t.pagination||{},n=document.querySelector(e.current_page_selector||".pagination-input");return n&&parseInt(n.value||n.getAttribute("value")||"1",10)||1}function mt(t){const e=t.pagination||{},n=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages");if(!n)return 1;const o=(n.textContent||"").match(/(\d+)/);return o?parseInt(o[1],10):1}async function rt(t,e,n){const o=[],a=O(document,t.row_selector).length;for(let r=0;r<a;r++){let s=O(document,t.row_selector)[r];if(!s){o.push({index:e+r,name:null,status:null,scrape_error:"row_not_mounted"}),n&&n(e+r+1);continue}wt(s),I(`automation ${e+r+1}`),await pt(s);const l=t.list_fields||{},u={name:N(s,l.name),status:N(s,l.status)};let d=null,g=null;try{const p=await Mt(s,t);d=await Nt(p,t),await ot(t),b(`✓ ${u.name||`automation ${e+r+1}`}`)}catch(p){g=p?.message||String(p),b(`× ${u.name||`automation ${e+r+1}`}: ${g}`);try{await ot(t)}catch{}}o.push({index:e+r,name:u.name,status:u.status,...d||{},scrape_error:g}),n&&n(e+r+1)}return o}async function Q(t){if(!R.inProgress){R.inProgress=!0;try{dt(),A("Starting scrape","Creator Lane is reading your SuperProfile automations."),I("starting…"),await Lt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=document.querySelector(t.pagination?.container_selector||".pagination-container");let n=[];if(e){await Pt(t),await f(400);const o=qt(t),a=mt(t);A(`Scraping ${o||"?"} automations across ${a} page${a===1?"":"s"}`,"Walking page by page."),G(0,o||1);const r=l=>{G(l,o||l),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:F(t),added:1,total:l,stage:"scraping_modals",of:o||l})};let i=0;const s=new Set;for(;;){const l=F(t);if(s.has(l)){b(`page ${l} already scraped — stopping`);break}s.add(l),b(`-- page ${l} of ${a} --`);const u=await rt(t,i,r);if(n.push(...u),i+=u.length,!await Bt(t)){b(`no more pages (current=${F(t)})`);break}}}else{const o=await At(t);if(o===0)throw P("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");A(`Scraping ${o} automation${o===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),G(0,o),n=await rt(t,0,r=>{G(r,o),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r,stage:"scraping_modals",of:o})})}if(n.length===0)throw P("Couldn't find any automations. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");J(),A("Sending to Creator Lane",`Uploading ${n.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:n})}catch(e){W("scrape failed:",e),P(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{R.inProgress=!1}}}function Ft(){if(nt(R.config)){A("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{nt(R.config)||(clearInterval(t),D("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),A("Logged in","Starting the scrape now…"),Q(R.config))},1500);return}D("starting scrape immediately"),Q(R.config)}function Ot(){dt(),I("connecting to Creator Lane…"),A("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){W("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),P(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(D("REQUEST_RUN_CONFIG response:",e),!e||!e.active){xt(),Tt(),D("no active migration run for this tab — sitting idle");return}R.config=e.config,Ft()})}catch(e){W("sendMessage threw:",e),P(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(W("background did not respond within 5s"),P("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return R.config=t.config,Q(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const o=t.result||{},a=(o.created||[]).length,r=(o.skipped||[]).length,i=(o.duplicates||[]).length;yt(`Imported ${a} campaign${a===1?"":"s"}`,`Skipped ${r}, duplicates ${i}. Closing this tab in a few seconds — review them in Creator Lane.`)}else P(t.error||"Import failed");return n({ok:!0}),!0}});Ot();
})()
