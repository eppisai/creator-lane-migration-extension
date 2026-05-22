(function(){function O(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function mt(t,e){return e?t.querySelector(e):null}function at(t,e){if(!e)return null;for(const n of e.split(",").map(o=>o.trim()).filter(Boolean))try{const o=t.querySelector(n);if(o)return o}catch{}return null}async function it(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((o,a)=>{const r=()=>{const i=document.querySelector(t.split(",")[0].trim());if(i)return o(i);if(Date.now()-n>e)return a(new Error(`waitForSelector timed out: ${t}`));setTimeout(r,200)};r()})}function f(t){return new Promise(e=>setTimeout(e,t))}const Y="__creatorlane_migration_overlay__",j="__cl_migration_highlight__",s={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},z='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',U='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',ft='"Iowan Old Style", Georgia, "Times New Roman", serif';let m=null,k=null,S=null,v=null,M=null,B=null,E=null;function H(){if(m&&document.body.contains(m))return m;const t=document.getElementById(Y);t&&t.remove(),m=document.createElement("div"),m.id=Y,m.setAttribute("data-creatorlane","migration"),m.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 360px;
    background: ${s.bg};
    color: ${s.fg};
    border: 1px solid ${s.border};
    border-radius: 14px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.55), 0 0 0 1px ${s.border};
    font-family: ${z};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${s.acc};
    box-shadow:0 0 0 4px ${s.accSoft};
  `;const o=document.createElement("span");o.textContent="Creator Lane",o.style.cssText=`
    font-family:${z};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${s.fg};
  `;const a=document.createElement("span");a.textContent="Migration",a.style.cssText=`
    font-family:${U};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${s.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(o),e.appendChild(a),k=document.createElement("div"),k.style.cssText=`
    font-family:${U};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${s.fg2};margin-bottom:6px;
  `,k.textContent="Step 01 — Boot",S=document.createElement("div"),S.style.cssText=`
    font-family:${z};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${s.fg};
  `,S.textContent="Booting…",v=document.createElement("div"),v.style.cssText=`
    font-family:${z};
    font-size:13px;color:${s.fg2};margin-bottom:14px;line-height:1.45;
  `,v.textContent="Setting up the migration. This window closes itself when finished.";const r=document.createElement("div");return r.style.cssText=`
    background:${s.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${s.border};
  `,M=document.createElement("div"),M.style.cssText=`
    background:${s.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,r.appendChild(M),B=document.createElement("div"),B.style.cssText=`
    font-family:${U};
    font-size:10px;color:${s.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,B.textContent="",E=document.createElement("div"),E.style.cssText=`
    font-family:${U};
    font-size:10.5px;color:${s.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${s.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,m.appendChild(e),m.appendChild(k),m.appendChild(S),m.appendChild(v),m.appendChild(r),m.appendChild(B),m.appendChild(E),document.body.appendChild(m),m}function gt(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function A(t,e){H(),t!=null&&(S.textContent=t,S.style.color=s.fg,k.textContent=gt(t),k.style.color=s.fg2),e!=null&&(v.textContent=e,v.style.color=s.fg2)}function G(t,e){if(H(),typeof t!="number"||typeof e!="number"||e<=0){M.style.width="0%",B.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));M.style.width=`${n}%`,M.style.background=s.acc,B.textContent=`${t} / ${e}`}function x(t){H(),E.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${s.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${s.fg3};`,E.appendChild(e),E.scrollTop=E.scrollHeight;E.children.length>30;)E.removeChild(E.firstChild)}function N(t){H(),k.textContent="Error",k.style.color=s.danger,S.textContent="Something went wrong",S.style.color=s.danger,v.textContent=t,v.style.color=s.fg2,M.style.background=s.danger}function ht(t,e){H(),k.textContent="Done",k.style.color=s.success,S.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=s.fg;const o=document.createElement("em");o.textContent=t,o.style.cssText=`
    font-family:${ft};
    font-style:italic;font-weight:400;
    color:${s.acc};
  `,S.appendChild(n),S.appendChild(o),v.textContent=e||"",v.style.color=s.fg2,M.style.background=s.success,M.style.width="100%"}let Z=!1;function yt(){if(Z)return;const t=document.createElement("style");t.textContent=`
    .${j} {
      outline: 2px solid ${s.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${s.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),Z=!0}function wt(t){if(t){yt(),K(),t.classList.add(j);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function K(){document.querySelectorAll(`.${j}`).forEach(t=>t.classList.remove(j))}function bt(){K(),m&&m.parentNode&&m.parentNode.removeChild(m),m=null}const xt="__creatorlane_cursor__",V="__creatorlane_control_banner__",h={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},_t='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',St='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',Ct='"Iowan Old Style", Georgia, "Times New Roman", serif';let g=null,P=null,tt=!1;function st(){if(tt)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${h.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),tt=!0}function lt(){return g&&document.body.contains(g)||(st(),g=document.createElement("div"),g.id=xt,g.setAttribute("data-creatorlane","cursor"),g.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,g.innerHTML=`
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55));">
      <path d="M5 3 L5 18 L9 14 L11.5 19.5 L13.5 18.5 L11 13 L17 13 Z" fill="${h.fg}" stroke="${h.bg}" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  `,P=document.createElement("div"),P.style.cssText=`
    position: absolute;
    left: 24px;
    top: 22px;
    padding: 5px 9px;
    background: ${h.bg};
    color: ${h.fg};
    font-family: ${St};
    font-size: 10.5px;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    border-radius: 6px;
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border: 1px solid ${h.border};
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
  `,g.appendChild(P),document.body.appendChild(g),ct(window.innerWidth/2,window.innerHeight/4)),g}function ct(t,e){g.style.transform=`translate(${t-4}px, ${e-2}px)`}function ut(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function $t(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function Q(t){return new Promise(e=>setTimeout(e,t))}function dt(){if(document.getElementById(V))return;st();const t=document.createElement("div");t.id=V,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483645;
    background: ${h.bg};
    color: ${h.fg};
    padding: 10px 16px;
    text-align: center;
    font-family: ${_t};
    font-size: 13px;
    letter-spacing: -0.1px;
    border-bottom: 1px solid ${h.border};
    box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;const e=document.createElement("span");e.style.cssText=`
    display:inline-block;width:8px;height:8px;border-radius:50%;
    background:${h.acc};
    animation:__cl_dot_pulse 1.6s ease-out infinite;
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${h.fg};`;const o=document.createElement("span");o.textContent="·",o.style.cssText=`color:${h.fg};opacity:0.45;margin:0 4px;`;const a=document.createElement("span");a.textContent="is now",a.style.cssText=`color:${h.fg};opacity:0.85;`;const r=document.createElement("em");r.textContent="migrating your automations.",r.style.cssText=`
    font-family:${Ct};
    font-style:italic;font-weight:400;
    color:${h.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(a),t.appendChild(r),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function Et(){const t=document.getElementById(V);t&&t.remove()}function q(t){if(lt(),!t){P.style.opacity="0";return}P.textContent=t,P.style.opacity="1"}async function pt(t,e={}){lt();let n,o;if(t&&t.nodeType===1){await $t(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await Q(450));const a=ut(t);n=a.x,o=a.y}else if(t&&typeof t.x=="number")n=t.x,o=t.y;else return;ct(n,o),await Q(e.duration||420)}function kt(t,e){const n=document.createElement("div");n.style.cssText=`
    position: fixed;
    left: ${t}px;
    top: ${e}px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${h.accSoft};
    border: 2px solid ${h.acc};
    pointer-events: none;
    z-index: 2147483646;
    transform: translate(-50%,-50%);
    animation: __cl_click_pulse 520ms ease-out forwards;
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function C(t,e){if(!t)return!1;await pt(t),e&&q(e);const n=ut(t);kt(n.x,n.y),await Q(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}function vt(){g&&g.parentNode&&g.parentNode.removeChild(g),g=null,P=null,Et()}const D=(...t)=>console.log("[CL-migration]",...t),W=(...t)=>console.warn("[CL-migration]",...t);D("content script boot, url:",location.href);const R={config:null,inProgress:!1};function I(t,e,{multi:n=!1}={}){if(!e)return null;const o=e.selector;if(!o||o==="TBD")return null;if(n)return O(t,o).map(i=>et(i,e.attr||"text")).filter(Boolean);const a=mt(t,o);return a?et(a,e.attr||"text"):null}function et(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function nt(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function Tt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(A("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await f(6e4)))}async function Lt(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,o=t.pagination?.max_scrolls??200,a=t.pagination?.scroll_container_selector;A("Loading your automations","Scrolling + paginating through the SuperProfile list…"),q("loading every automation");function r(){if(a){const p=document.querySelector(a);if(p)return p}return document.scrollingElement||document.documentElement||document.body}async function i(){let p=O(document,e).length,y=0;for(let _=0;_<o;_++){const $=r();$.scrollTop=$.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(b=>{const L=(b.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(L))try{b.click()}catch{}}),await f(n);const T=O(document,e).length;if(T>p?(p=T,y=0):y++,y>=6)break}return p}function c(){if(document.querySelector(".modal.show, .modal.fade.show"))return null;const p=[".pagination",".paging","nav[aria-label*='pagination' i]","[role='navigation'][aria-label*='page' i]"];let y=null;for(const b of p){const L=document.querySelector(b);if(L){y=L;break}}if(!y)return null;const _=y.querySelector(".active, .selected, [aria-current='page']")||null,$=_?parseInt((_.textContent||"").trim(),10):NaN,T=Array.from(y.querySelectorAll("button, a, li, [role='button']"));for(const b of T){if(b.hasAttribute("disabled")||b.classList.contains("disabled")||b.getAttribute("aria-disabled")==="true")continue;const L=(b.textContent||"").trim().toLowerCase(),X=(b.getAttribute("aria-label")||"").toLowerCase();if(L==="next"||L==="›"||L===">"||/^next$/.test(X))return b}if(!isNaN($)){for(const b of T)if(parseInt((b.textContent||"").trim(),10)===$+1)return b}return null}let l=await i();x(`page 1: ${l} rows`);let u=location.href,d=l;for(let p=2;p<=50;p++){const y=c();if(!y)break;try{await C(y,`page ${p}`)}catch{break}await f(n);const _=await i();x(`page ${p}: ${_} rows`);const $=location.href!==u;if(u=location.href,!$&&_<=d){x("page nav clicked but no progress — stopping pagination");break}d=_,_>l&&(l=_)}q(`loaded ${l}`);const w=r();return w.scrollTop=0,window.scrollTo(0,0),await f(400),l}function At(t){const e=Array.from(document.querySelectorAll("li, button, a, [role='menuitem'], div, span")),n=[];for(const i of e){if(!i.offsetParent&&i.offsetWidth===0&&i.offsetHeight===0)continue;Array.from(i.childNodes).filter(l=>l.nodeType===Node.TEXT_NODE).map(l=>l.textContent.trim()).join("").trim().toLowerCase()===t&&n.push(i)}if(n.length===0)for(const i of e){if(!i.offsetParent&&i.offsetWidth===0&&i.offsetHeight===0)continue;(i.textContent||"").trim().toLowerCase()===t&&i.children.length<=2&&n.push(i)}if(n.length===0)return null;const a=n.find(i=>i.closest(".cf-dropdown-menu, .dropdown-menu, [class*='dropdown'], [role='menu'], [class*='popover']"))||n[0];let r=a;for(let i=0;i<6&&r;i++){if(r.matches("li, button, [role='menuitem'], a")||r.onclick||r.parentElement&&getComputedStyle(r).cursor==="pointer")return r;r=r.parentElement}return a}async function Rt(t,e){const n=e.open_modal_flow||{};async function o(a){const r=at(t,n.dropdown_trigger_selector);if(!r)throw new Error("dropdown_trigger_not_found");await C(r,a===1?"open menu":"retry menu"),await f(n.wait_after_trigger_ms??350);const i=(n.dropdown_edit_option_text||"Edit").toLowerCase(),c=At(i);if(!c)throw new Error("edit_option_not_found");await C(c,"click Edit");try{await it(n.modal_root_selector,n.modal_wait_timeout_ms??8e3)}catch(l){const u=document.querySelector(".modal.show, .modal.fade.show");if(u&&!u.matches(n.modal_root_selector)){x(`wrong modal opened (${u.className}) — dismissing`);const d=u.querySelector(".cf-close-button, [aria-label='close' i], button.close");if(d)try{d.click()}catch{}document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await f(500)}throw l}return await f(300),document.querySelector(n.modal_root_selector)}try{return await o(1)}catch(a){return x(`open modal failed: ${a?.message||a} — retrying`),document.body.click(),await f(800),await o(2)}}async function Mt(t,e){if(!t)return null;const n=e.step3_link_flow||{},o=n.dm_pencil_selector||".dm-container-main .edit-icon-div",a=t.querySelector(o);if(!a)return null;await C(a,"open DM editor");const r=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await it(r,n.step_wait_timeout_ms??6e3)}catch{return null}await f(300);const i=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let c=null;for(const d of document.querySelectorAll(i)){const w=d.value||d.getAttribute("value")||"";if(w){c=w;break}}if(!c){const d=[".a-dm-text-button-container",".link-button-container",".modal-body"],w=/^https?:\/\/\S+$/i;for(const p of d){const y=document.querySelector(p);if(!y)continue;const _=y.querySelectorAll("input[type='text'], input:not([type])");for(const $ of _){const T=($.value||$.getAttribute("value")||"").trim();if(w.test(T)){c=T,x(`link_url found via fallback in ${p}`);break}}if(c)break}}c||x("no link_url found in Step 3 — card may have no button configured");const l=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let u=document.querySelector(l);if(u||(u=Array.from(document.querySelectorAll(".modal-footer button")).find(d=>(d.textContent||"").trim().toLowerCase()==="cancel")),u)await C(u,"back to review"),await f(400);else{const d=t.querySelector(".cf-modal-header-content img.cf-close-button");if(d){await C(d,"close (fallback)"),await f(350);const w=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(p=>(p.textContent||"").trim().toLowerCase()==="exit");w&&await C(w,"discard")}}return c}async function It(t,e){const n=e.modal_fields||{},o={keyword:I(t,n.keyword,{multi:!0}),dm_body:I(t,n.dm_body),comment_reply:I(t,n.comment_reply),caption:I(t,n.caption),thumbnail_src:I(t,n.thumbnail_src)};let a=null;try{a=await Mt(t,e)}catch(r){x(`link_url capture failed: ${r?.message||r}`)}return{...o,link_url:a}}async function ot(t){const e=t.modal_close_selector,n=e?at(document,e):null;n?await C(n,"close modal"):(q("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const o=t.open_modal_flow?.modal_root_selector;if(o)for(let a=0;a<25&&document.querySelector(o);a++)await f(150);for(let a=0;a<25;a++){const r=document.querySelector(".modal.fade.a-dm-modal"),i=document.querySelector(".modal-backdrop");if(!r&&!i)break;await f(150)}await f(300)}async function Nt(t){const e=t.pagination||{},n=e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input",o=e.items_per_page_option_selector||".select-dropdown.open .select-option",a=document.querySelector(n);if(!a)return null;const r=parseInt(a.value||a.getAttribute("value")||"0",10);try{await C(a,"items per page"),await f(350);const i=document.querySelectorAll(o);if(i.length===0)return r;let c=i[i.length-1],l=parseInt((c.textContent||"").trim(),10)||0;for(const u of i){const d=parseInt((u.textContent||"").trim(),10)||0;d>l&&(c=u,l=d)}return await C(c,`set ${l}/page`),await f(700),x(`items per page: ${r} → ${l}`),l}catch{return r||null}}function Pt(t){const e=t.pagination||{},n=document.querySelectorAll(".tab, .auto-tabs-item, [class*='automation-tab']");for(const r of n){const i=(r.textContent||"").match(/automations?\s*\((\d+)\)/i);if(i)return parseInt(i[1],10)}const o=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages"),a=document.querySelector(e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input");if(o&&a){const r=(o.textContent||"").match(/(\d+)/),i=parseInt(a.value||"0",10)||0;if(r&&i)return parseInt(r[1],10)*i}return null}async function qt(t){const e=t.pagination||{};if(document.querySelector(".modal.show, .modal.fade.show"))return!1;const n=e.next_button_selector||".pagination-buttons-container .pagination-button:last-of-type";let o=document.querySelector(n);if(!o){const i=document.querySelector(e.container_selector||".pagination-container");i&&(o=Array.from(i.querySelectorAll("button")).find(c=>(c.textContent||"").trim().toLowerCase()==="next"))}if(!o||o.disabled||o.hasAttribute("disabled")||o.classList.contains("disabled"))return!1;const a=F(t);return await C(o,`page ${a+1}`),await f(e.page_transition_ms||900),F(t)>a}function F(t){const e=t.pagination||{},n=document.querySelector(e.current_page_selector||".pagination-input");return n&&parseInt(n.value||n.getAttribute("value")||"1",10)||1}function Bt(t){const e=t.pagination||{},n=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages");if(!n)return 1;const o=(n.textContent||"").match(/(\d+)/);return o?parseInt(o[1],10):1}async function rt(t,e,n){const o=[],a=O(document,t.row_selector).length;for(let r=0;r<a;r++){let c=O(document,t.row_selector)[r];if(!c){o.push({index:e+r,name:null,status:null,scrape_error:"row_not_mounted"}),n&&n(e+r+1);continue}wt(c),q(`automation ${e+r+1}`),await pt(c);const l=t.list_fields||{},u={name:I(c,l.name),status:I(c,l.status)};let d=null,w=null;try{const p=await Rt(c,t);d=await It(p,t),await ot(t),x(`✓ ${u.name||`automation ${e+r+1}`}`)}catch(p){w=p?.message||String(p),x(`× ${u.name||`automation ${e+r+1}`}: ${w}`);try{await ot(t)}catch{}}o.push({index:e+r,name:u.name,status:u.status,...d||{},scrape_error:w}),n&&n(e+r+1)}return o}async function J(t){if(!R.inProgress){R.inProgress=!0;try{dt(),A("Starting scrape","Creator Lane is reading your SuperProfile automations."),q("starting…"),await Tt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=document.querySelector(t.pagination?.container_selector||".pagination-container");let n=[];if(e){await Nt(t),await f(400);const o=Pt(t),a=Bt(t);A(`Scraping ${o||"?"} automations across ${a} page${a===1?"":"s"}`,"Walking page by page."),G(0,o||1);const r=l=>{G(l,o||l),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:F(t),added:1,total:l,stage:"scraping_modals",of:o||l})};let i=0;const c=new Set;for(;;){const l=F(t);if(c.has(l)){x(`page ${l} already scraped — stopping`);break}c.add(l),x(`-- page ${l} of ${a} --`);const u=await rt(t,i,r);if(n.push(...u),i+=u.length,!await qt(t)){x(`no more pages (current=${F(t)})`);break}}}else{const o=await Lt(t);if(o===0)throw N("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");A(`Scraping ${o} automation${o===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),G(0,o),n=await rt(t,0,r=>{G(r,o),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:r,stage:"scraping_modals",of:o})})}if(n.length===0)throw N("Couldn't find any automations. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");K(),A("Sending to Creator Lane",`Uploading ${n.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:n})}catch(e){W("scrape failed:",e),N(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{R.inProgress=!1}}}function Ft(){if(nt(R.config)){A("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{nt(R.config)||(clearInterval(t),D("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),A("Logged in","Starting the scrape now…"),J(R.config))},1500);return}D("starting scrape immediately"),J(R.config)}function Ot(){dt(),q("connecting to Creator Lane…"),A("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){W("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),N(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(D("REQUEST_RUN_CONFIG response:",e),!e||!e.active){bt(),vt(),D("no active migration run for this tab — sitting idle");return}R.config=e.config,Ft()})}catch(e){W("sendMessage threw:",e),N(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(W("background did not respond within 5s"),N("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return R.config=t.config,J(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const o=t.result||{},a=(o.created||[]).length,r=(o.skipped||[]).length,i=(o.duplicates||[]).length;ht(`Imported ${a} campaign${a===1?"":"s"}`,`Skipped ${r}, duplicates ${i}. Closing this tab in a few seconds — review them in Creator Lane.`)}else N(t.error||"Import failed");return n({ok:!0}),!0}});Ot();
})()
