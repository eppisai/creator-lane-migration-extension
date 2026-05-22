(function(){function F(t,e){return e?Array.from(t.querySelectorAll(e)):[]}function mt(t,e){return e?t.querySelector(e):null}function V(t,e){if(!e)return null;for(const n of e.split(",").map(o=>o.trim()).filter(Boolean))try{const o=t.querySelector(n);if(o)return o}catch{}return null}async function it(t,e=15e3){if(!t)return null;const n=Date.now();return new Promise((o,r)=>{const a=()=>{const i=document.querySelector(t.split(",")[0].trim());if(i)return o(i);if(Date.now()-n>e)return r(new Error(`waitForSelector timed out: ${t}`));setTimeout(a,200)};a()})}function g(t){return new Promise(e=>setTimeout(e,t))}const X="__creatorlane_migration_overlay__",j="__cl_migration_highlight__",s={bg:"#0a0a0a",bg2:"#0f0f10",fg:"#f5f5f5",fg2:"#b3b3b3",fg3:"#71717a",border:"rgba(255,255,255,0.08)",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.14)",accFg:"#60a5fa",success:"#10b981",danger:"#f87171"},U='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',G='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',ft='"Iowan Old Style", Georgia, "Times New Roman", serif';let d=null,v=null,S=null,k=null,I=null,B=null,E=null;function z(){if(d&&document.body.contains(d))return d;const t=document.getElementById(X);t&&t.remove(),d=document.createElement("div"),d.id=X,d.setAttribute("data-creatorlane","migration"),d.style.cssText=`
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
    font-family: ${U};
    padding: 18px 18px 16px;
    overflow: hidden;
  `;const e=document.createElement("div");e.style.cssText="display:flex;align-items:center;gap:8px;margin-bottom:14px;";const n=document.createElement("span");n.style.cssText=`
    width:8px;height:8px;border-radius:50%;
    background:${s.acc};
    box-shadow:0 0 0 4px ${s.accSoft};
  `;const o=document.createElement("span");o.textContent="Creator Lane",o.style.cssText=`
    font-family:${U};
    font-weight:600;font-size:13px;letter-spacing:-0.1px;color:${s.fg};
  `;const r=document.createElement("span");r.textContent="Migration",r.style.cssText=`
    font-family:${G};font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;color:${s.fg2};
    margin-left:2px;
  `,e.appendChild(n),e.appendChild(o),e.appendChild(r),v=document.createElement("div"),v.style.cssText=`
    font-family:${G};
    font-size:10px;font-weight:500;
    text-transform:uppercase;letter-spacing:0.18em;
    color:${s.fg2};margin-bottom:6px;
  `,v.textContent="Step 01 — Boot",S=document.createElement("div"),S.style.cssText=`
    font-family:${U};
    font-weight:600;font-size:17px;line-height:1.25;
    letter-spacing:-0.2px;
    margin-bottom:6px;color:${s.fg};
  `,S.textContent="Booting…",k=document.createElement("div"),k.style.cssText=`
    font-family:${U};
    font-size:13px;color:${s.fg2};margin-bottom:14px;line-height:1.45;
  `,k.textContent="Setting up the migration. This window closes itself when finished.";const a=document.createElement("div");return a.style.cssText=`
    background:${s.bg2};
    height:4px;border-radius:999px;overflow:hidden;
    margin-bottom:6px;
    border:1px solid ${s.border};
  `,I=document.createElement("div"),I.style.cssText=`
    background:${s.acc};
    height:100%;width:0%;
    transition:width 240ms ease;
    border-radius:999px;
  `,a.appendChild(I),B=document.createElement("div"),B.style.cssText=`
    font-family:${G};
    font-size:10px;color:${s.fg3};text-align:right;margin-bottom:10px;
    letter-spacing:0.05em;
  `,B.textContent="",E=document.createElement("div"),E.style.cssText=`
    font-family:${G};
    font-size:10.5px;color:${s.fg3};
    max-height:88px;overflow-y:auto;
    border-top:1px solid ${s.border};
    padding-top:10px;display:none;
    line-height:1.5;
  `,d.appendChild(e),d.appendChild(v),d.appendChild(S),d.appendChild(k),d.appendChild(a),d.appendChild(B),d.appendChild(E),document.body.appendChild(d),d}function gt(t){const e=(t||"").toLowerCase();return e.includes("log in")?"Step 02 — Sign in":e.includes("logged in")||e.includes("starting")?"Step 03 — Reading":e.includes("loading")?"Step 03 — Loading list":e.includes("scraping")?"Step 04 — Scraping":e.includes("sending")?"Step 05 — Importing":e.includes("imported")?"Done":e.includes("navigat")?"Step 02 — Routing":"Step 01 — Boot"}function R(t,e){z(),t!=null&&(S.textContent=t,S.style.color=s.fg,v.textContent=gt(t),v.style.color=s.fg2),e!=null&&(k.textContent=e,k.style.color=s.fg2)}function H(t,e){if(z(),typeof t!="number"||typeof e!="number"||e<=0){I.style.width="0%",B.textContent="";return}const n=Math.max(0,Math.min(100,Math.round(t/e*100)));I.style.width=`${n}%`,I.style.background=s.acc,B.textContent=`${t} / ${e}`}function _(t){z(),E.style.display="block";const e=document.createElement("div"),n=document.createElement("span");for(n.textContent="›",n.style.cssText=`color:${s.accFg};margin-right:6px;`,e.appendChild(n),e.appendChild(document.createTextNode(t)),e.style.cssText=`padding:2px 0;color:${s.fg3};`,E.appendChild(e),E.scrollTop=E.scrollHeight;E.children.length>30;)E.removeChild(E.firstChild)}function N(t){z(),v.textContent="Error",v.style.color=s.danger,S.textContent="Something went wrong",S.style.color=s.danger,k.textContent=t,k.style.color=s.fg2,I.style.background=s.danger}function ht(t,e){z(),v.textContent="Done",v.style.color=s.success,S.textContent="";const n=document.createElement("span");n.textContent="Migrated — ",n.style.color=s.fg;const o=document.createElement("em");o.textContent=t,o.style.cssText=`
    font-family:${ft};
    font-style:italic;font-weight:400;
    color:${s.acc};
  `,S.appendChild(n),S.appendChild(o),k.textContent=e||"",k.style.color=s.fg2,I.style.background=s.success,I.style.width="100%"}let tt=!1;function yt(){if(tt)return;const t=document.createElement("style");t.textContent=`
    .${j} {
      outline: 2px solid ${s.acc} !important;
      outline-offset: 3px !important;
      transition: outline-color 200ms ease, box-shadow 200ms ease !important;
      box-shadow: 0 0 0 6px ${s.accSoft} !important;
      border-radius: 10px !important;
    }
  `,document.head.appendChild(t),tt=!0}function xt(t){if(t){yt(),Y(),t.classList.add(j);try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{t.scrollIntoView()}}}function Y(){document.querySelectorAll(`.${j}`).forEach(t=>t.classList.remove(j))}function wt(){Y(),d&&d.parentNode&&d.parentNode.removeChild(d),d=null}const bt="__creatorlane_cursor__",Q="__creatorlane_control_banner__",h={bg:"#0a0a0a",fg:"#f5f5f5",acc:"#3b82f6",accSoft:"rgba(59,130,246,0.18)",accRing:"rgba(59,130,246,0.55)",border:"rgba(255,255,255,0.10)"},_t='-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',St='ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',Ct='"Iowan Old Style", Georgia, "Times New Roman", serif';let f=null,P=null,et=!1;function st(){if(et)return;const t=document.createElement("style");t.textContent=`
    @keyframes __cl_click_pulse {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
    }
    @keyframes __cl_dot_pulse {
      0%, 100% { box-shadow: 0 0 0 0 ${h.accRing}; }
      50%      { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
  `,document.head.appendChild(t),et=!0}function lt(){return f&&document.body.contains(f)||(st(),f=document.createElement("div"),f.id=bt,f.setAttribute("data-creatorlane","cursor"),f.style.cssText=`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 2147483646;
    transition: transform 380ms cubic-bezier(.22,.61,.36,1);
    will-change: transform;
  `,f.innerHTML=`
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
  `,f.appendChild(P),document.body.appendChild(f),ct(window.innerWidth/2,window.innerHeight/4)),f}function ct(t,e){f.style.transform=`translate(${t-4}px, ${e-2}px)`}function ut(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}async function $t(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=window.innerHeight}function J(t){return new Promise(e=>setTimeout(e,t))}function dt(){if(document.getElementById(Q))return;st();const t=document.createElement("div");t.id=Q,t.setAttribute("data-creatorlane","banner"),t.style.cssText=`
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
  `;const n=document.createElement("span");n.textContent="Creator Lane",n.style.cssText=`font-weight:600;color:${h.fg};`;const o=document.createElement("span");o.textContent="·",o.style.cssText=`color:${h.fg};opacity:0.45;margin:0 4px;`;const r=document.createElement("span");r.textContent="is now",r.style.cssText=`color:${h.fg};opacity:0.85;`;const a=document.createElement("em");a.textContent="migrating your automations.",a.style.cssText=`
    font-family:${Ct};
    font-style:italic;font-weight:400;
    color:${h.acc};
    margin-left:6px;
  `,t.appendChild(e),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.documentElement.style.scrollPaddingTop="44px"}function Et(){const t=document.getElementById(Q);t&&t.remove()}function q(t){if(lt(),!t){P.style.opacity="0";return}P.textContent=t,P.style.opacity="1"}async function pt(t,e={}){lt();let n,o;if(t&&t.nodeType===1){await $t(t)||(t.scrollIntoView({behavior:"smooth",block:"center"}),await J(450));const r=ut(t);n=r.x,o=r.y}else if(t&&typeof t.x=="number")n=t.x,o=t.y;else return;ct(n,o),await J(e.duration||420)}function vt(t,e){const n=document.createElement("div");n.style.cssText=`
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
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),600)}async function C(t,e){if(!t)return!1;await pt(t),e&&q(e);const n=ut(t);vt(n.x,n.y),await J(180);try{t.click()}catch{t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}return!0}function kt(){f&&f.parentNode&&f.parentNode.removeChild(f),f=null,P=null,Et()}const D=(...t)=>console.log("[CL-migration]",...t),W=(...t)=>console.warn("[CL-migration]",...t);D("content script boot, url:",location.href);const A={config:null,inProgress:!1};function M(t,e,{multi:n=!1}={}){if(!e)return null;const o=e.selector;if(!o||o==="TBD")return null;if(n)return F(t,o).map(i=>nt(i,e.attr||"text")).filter(Boolean);const r=mt(t,o);return r?nt(r,e.attr||"text"):null}function nt(t,e){return e==="text"?(t.textContent||"").trim():e==="html"?t.innerHTML:e==="value"?t.value||t.getAttribute("value")||"":t.getAttribute(e)}function ot(t){if(t?.login_url_match)try{if(new RegExp(t.login_url_match).test(location.href))return!0}catch{}return/\/(login|signin|signup|auth)(\/|\?|$)/i.test(location.href)}async function Tt(t){t.entrypoint_url&&(location.href.startsWith(t.entrypoint_url)||(R("Navigating",`Going to ${new URL(t.entrypoint_url).pathname}…`),location.assign(t.entrypoint_url),await g(6e4)))}async function Lt(t){const e=t.row_selector,n=t.pagination?.idle_ms??1500,o=t.pagination?.max_scrolls??200,r=t.pagination?.scroll_container_selector;R("Loading your automations","Scrolling + paginating through the SuperProfile list…"),q("loading every automation");function a(){if(r){const u=document.querySelector(r);if(u)return u}return document.scrollingElement||document.documentElement||document.body}async function i(){let u=F(document,e).length,y=0;for(let b=0;b<o;b++){const $=a();$.scrollTop=$.scrollHeight,window.scrollTo(0,document.body.scrollHeight),document.querySelectorAll("button, a, [role='button']").forEach(x=>{const L=(x.textContent||"").trim().toLowerCase();if(/^(load|show|view)\s+more$/i.test(L))try{x.click()}catch{}}),await g(n);const T=F(document,e).length;if(T>u?(u=T,y=0):y++,y>=6)break}return u}function c(){if(document.querySelector(".modal.show, .modal.fade.show"))return null;const u=[".pagination",".paging","nav[aria-label*='pagination' i]","[role='navigation'][aria-label*='page' i]"];let y=null;for(const x of u){const L=document.querySelector(x);if(L){y=L;break}}if(!y)return null;const b=y.querySelector(".active, .selected, [aria-current='page']")||null,$=b?parseInt((b.textContent||"").trim(),10):NaN,T=Array.from(y.querySelectorAll("button, a, li, [role='button']"));for(const x of T){if(x.hasAttribute("disabled")||x.classList.contains("disabled")||x.getAttribute("aria-disabled")==="true")continue;const L=(x.textContent||"").trim().toLowerCase(),Z=(x.getAttribute("aria-label")||"").toLowerCase();if(L==="next"||L==="›"||L===">"||/^next$/.test(Z))return x}if(!isNaN($)){for(const x of T)if(parseInt((x.textContent||"").trim(),10)===$+1)return x}return null}let l=await i();_(`page 1: ${l} rows`);let p=location.href,m=l;for(let u=2;u<=50;u++){const y=c();if(!y)break;try{await C(y,`page ${u}`)}catch{break}await g(n);const b=await i();_(`page ${u}: ${b} rows`);const $=location.href!==p;if(p=location.href,!$&&b<=m){_("page nav clicked but no progress — stopping pagination");break}m=b,b>l&&(l=b)}q(`loaded ${l}`);const w=a();return w.scrollTop=0,window.scrollTo(0,0),await g(400),l}async function Rt(t,e){const n=e.open_modal_flow||{};async function o(r){const a=V(t,n.dropdown_trigger_selector);if(!a)throw new Error("dropdown_trigger_not_found");await C(a,r===1?"open menu":"retry menu"),await g(n.wait_after_trigger_ms??350);let i=V(document,n.dropdown_edit_option_selector)||null;if(!i){const c=F(document,".pl-dropdown-text"),l=(n.dropdown_edit_option_text||"Edit").toLowerCase();i=c.find(p=>(p.textContent||"").trim().toLowerCase()===l)}if(!i)throw new Error("edit_option_not_found");return await C(i,"click Edit"),await it(n.modal_root_selector,n.modal_wait_timeout_ms??8e3),await g(300),document.querySelector(n.modal_root_selector)}try{return await o(1)}catch(r){return _(`open modal failed: ${r?.message||r} — retrying`),document.body.click(),await g(800),await o(2)}}async function At(t,e){if(!t)return null;const n=e.step3_link_flow||{},o=n.dm_pencil_selector||".dm-container-main .edit-icon-div",r=t.querySelector(o);if(!r)return null;await C(r,"open DM editor");const a=n.step_body_selector||".a-dm-trigger-main.reel-post-step-3";try{await it(a,n.step_wait_timeout_ms??6e3)}catch{return null}await g(300);const i=n.link_input_selector||'input[id^="link-product-button-"][id$="-primaryMsgCta-link"]';let c=null;for(const m of document.querySelectorAll(i)){const w=m.value||m.getAttribute("value")||"";if(w){c=w;break}}if(!c){const m=[".a-dm-text-button-container",".link-button-container",".modal-body"],w=/^https?:\/\/\S+$/i;for(const u of m){const y=document.querySelector(u);if(!y)continue;const b=y.querySelectorAll("input[type='text'], input:not([type])");for(const $ of b){const T=($.value||$.getAttribute("value")||"").trim();if(w.test(T)){c=T,_(`link_url found via fallback in ${u}`);break}}if(c)break}}c||_("no link_url found in Step 3 — card may have no button configured");const l=n.cancel_button_selector||".modal-footer button.base-button.md-button.tertiary-button";let p=document.querySelector(l);if(p||(p=Array.from(document.querySelectorAll(".modal-footer button")).find(m=>(m.textContent||"").trim().toLowerCase()==="cancel")),p)await C(p,"back to review"),await g(400);else{const m=t.querySelector(".cf-modal-header-content img.cf-close-button");if(m){await C(m,"close (fallback)"),await g(350);const w=Array.from(document.querySelectorAll(".auto-dm-exit-modal .pop-confirm-footer button")).find(u=>(u.textContent||"").trim().toLowerCase()==="exit");w&&await C(w,"discard")}}return c}async function It(t,e){const n=e.modal_fields||{},o={keyword:M(t,n.keyword,{multi:!0}),dm_body:M(t,n.dm_body),comment_reply:M(t,n.comment_reply),caption:M(t,n.caption),thumbnail_src:M(t,n.thumbnail_src)};let r=null;try{r=await At(t,e)}catch(a){_(`link_url capture failed: ${a?.message||a}`)}return{...o,link_url:r}}async function rt(t){const e=t.modal_close_selector,n=e?V(document,e):null;n?await C(n,"close modal"):(q("press Escape"),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})));const o=t.open_modal_flow?.modal_root_selector;if(o)for(let r=0;r<25&&document.querySelector(o);r++)await g(150);for(let r=0;r<25;r++){const a=document.querySelector(".modal.fade.a-dm-modal"),i=document.querySelector(".modal-backdrop");if(!a&&!i)break;await g(150)}await g(300)}async function Mt(t){const e=t.pagination||{},n=e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input",o=e.items_per_page_option_selector||".select-dropdown.open .select-option",r=document.querySelector(n);if(!r)return null;const a=parseInt(r.value||r.getAttribute("value")||"0",10);try{await C(r,"items per page"),await g(350);const i=document.querySelectorAll(o);if(i.length===0)return a;let c=i[i.length-1],l=parseInt((c.textContent||"").trim(),10)||0;for(const p of i){const m=parseInt((p.textContent||"").trim(),10)||0;m>l&&(c=p,l=m)}return await C(c,`set ${l}/page`),await g(700),_(`items per page: ${a} → ${l}`),l}catch{return a||null}}function Nt(t){const e=t.pagination||{},n=document.querySelectorAll(".tab, .auto-tabs-item, [class*='automation-tab']");for(const a of n){const i=(a.textContent||"").match(/automations?\s*\((\d+)\)/i);if(i)return parseInt(i[1],10)}const o=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages"),r=document.querySelector(e.items_per_page_trigger_selector||".select-wrapper.pagination-select .select-input");if(o&&r){const a=(o.textContent||"").match(/(\d+)/),i=parseInt(r.value||"0",10)||0;if(a&&i)return parseInt(a[1],10)*i}return null}async function Pt(t){const e=t.pagination||{};if(document.querySelector(".modal.show, .modal.fade.show"))return!1;const n=e.next_button_selector||".pagination-buttons-container .pagination-button:last-of-type";let o=document.querySelector(n);if(!o){const i=document.querySelector(e.container_selector||".pagination-container");i&&(o=Array.from(i.querySelectorAll("button")).find(c=>(c.textContent||"").trim().toLowerCase()==="next"))}if(!o||o.disabled||o.hasAttribute("disabled")||o.classList.contains("disabled"))return!1;const r=O(t);return await C(o,`page ${r+1}`),await g(e.page_transition_ms||900),O(t)>r}function O(t){const e=t.pagination||{},n=document.querySelector(e.current_page_selector||".pagination-input");return n&&parseInt(n.value||n.getAttribute("value")||"1",10)||1}function qt(t){const e=t.pagination||{},n=document.querySelector(e.pages_label_selector||".pagination-input-container .pagination-number-of-pages");if(!n)return 1;const o=(n.textContent||"").match(/(\d+)/);return o?parseInt(o[1],10):1}async function at(t,e,n){const o=[],r=F(document,t.row_selector).length;for(let a=0;a<r;a++){let c=F(document,t.row_selector)[a];if(!c){o.push({index:e+a,name:null,status:null,scrape_error:"row_not_mounted"}),n&&n(e+a+1);continue}xt(c),q(`automation ${e+a+1}`),await pt(c);const l=t.list_fields||{},p={name:M(c,l.name),status:M(c,l.status)};let m=null,w=null;try{const u=await Rt(c,t);m=await It(u,t),await rt(t),_(`✓ ${p.name||`automation ${e+a+1}`}`)}catch(u){w=u?.message||String(u),_(`× ${p.name||`automation ${e+a+1}`}: ${w}`);try{await rt(t)}catch{}}o.push({index:e+a,name:p.name,status:p.status,...m||{},scrape_error:w}),n&&n(e+a+1)}return o}async function K(t){if(!A.inProgress){A.inProgress=!0;try{dt(),R("Starting scrape","Creator Lane is reading your SuperProfile automations."),q("starting…"),await Tt(t),chrome.runtime.sendMessage({type:"SCRAPE_STARTED"});const e=document.querySelector(t.pagination?.container_selector||".pagination-container");let n=[];if(e){await Mt(t),await g(400);const o=Nt(t),r=qt(t);R(`Scraping ${o||"?"} automations across ${r} page${r===1?"":"s"}`,"Walking page by page."),H(0,o||1);const a=l=>{H(l,o||l),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:O(t),added:1,total:l,stage:"scraping_modals",of:o||l})};let i=0;const c=new Set;for(;;){const l=O(t);if(c.has(l)){_(`page ${l} already scraped — stopping`);break}c.add(l),_(`-- page ${l} of ${r} --`);const p=await at(t,i,a);if(n.push(...p),i+=p.length,!await Pt(t)){_(`no more pages (current=${O(t)})`);break}}}else{const o=await Lt(t);if(o===0)throw N("Couldn't find any automations on this page. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");R(`Scraping ${o} automation${o===1?"":"s"}`,"Opening each automation to read the keyword, DM, and caption."),H(0,o),n=await at(t,0,a=>{H(a,o),chrome.runtime.sendMessage({type:"SCRAPE_PROGRESS",page:1,added:1,total:a,stage:"scraping_modals",of:o})})}if(n.length===0)throw N("Couldn't find any automations. Make sure you're on the SuperProfile auto-DM tab and have at least one automation set up."),new Error("no_rows_found");Y(),R("Sending to Creator Lane",`Uploading ${n.length} automations to create paused campaigns…`),chrome.runtime.sendMessage({type:"SCRAPE_RESULT",rows:n})}catch(e){W("scrape failed:",e),N(e?.message||String(e)),chrome.runtime.sendMessage({type:"SCRAPE_ERROR",error:e?.message||String(e)})}finally{A.inProgress=!1}}}function Bt(){if(ot(A.config)){R("Log in to SuperProfile","We'll continue automatically once you're signed in."),chrome.runtime.sendMessage({type:"NEEDS_LOGIN"});const t=setInterval(()=>{ot(A.config)||(clearInterval(t),D("login completed via SPA, starting scrape"),chrome.runtime.sendMessage({type:"LOGGED_IN"}),R("Logged in","Starting the scrape now…"),K(A.config))},1500);return}D("starting scrape immediately"),K(A.config)}function Ft(){dt(),q("connecting to Creator Lane…"),R("Connecting to Creator Lane","Checking whether this tab is part of a migration…");let t=!1;try{chrome.runtime.sendMessage({type:"REQUEST_RUN_CONFIG"},e=>{if(t=!0,chrome.runtime.lastError){W("REQUEST_RUN_CONFIG error:",chrome.runtime.lastError),N(`Couldn't reach the Creator Lane extension service worker: ${chrome.runtime.lastError.message}. Try reloading the extension at chrome://extensions.`);return}if(D("REQUEST_RUN_CONFIG response:",e),!e||!e.active){wt(),kt(),D("no active migration run for this tab — sitting idle");return}A.config=e.config,Bt()})}catch(e){W("sendMessage threw:",e),N(`Extension messaging failed: ${e.message}. Reload the extension and try again.`);return}setTimeout(()=>{t||(W("background did not respond within 5s"),N("The Creator Lane extension didn't respond. Open chrome://extensions and reload the Creator Lane Migration card, then click Start again from the dashboard."))},5e3)}chrome.runtime.onMessage.addListener((t,e,n)=>{if(t.type==="START_SCRAPE")return A.config=t.config,K(t.config),n({ok:!0}),!0;if(t.type==="IMPORT_FINISHED"){if(t.ok){const o=t.result||{},r=(o.created||[]).length,a=(o.skipped||[]).length,i=(o.duplicates||[]).length;ht(`Imported ${r} campaign${r===1?"":"s"}`,`Skipped ${a}, duplicates ${i}. Closing this tab in a few seconds — review them in Creator Lane.`)}else N(t.error||"Import failed");return n({ok:!0}),!0}});Ft();
})()
