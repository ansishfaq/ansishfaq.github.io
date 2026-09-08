(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={person:{name:`Ans Ishfaq`,initials:`AI`,prompt:`ans@ishfaq`,role:`AI-Native Full-Stack Engineer`,location:`Lahore, Pakistan`,status:`available for work`,education_short:`UET`,education_full:`University of Engineering and Technology`,education_year:`2027`,blurb:`Coding since 17, I've spent 3+ years shipping software end-to-end — from freelance gigs to SaaS, PaaS, developer tools, system design and personal playgrounds. I treat every product as a whole system and build it like it's my own.`,contact:{email:`ans.ishfaq.public@gmail.com`,github:`https://github.com/ansishfaq`,linkedin:`https://linkedin.com/in/ansishfaq`,x:`https://x.com/ansishfaq`,line:`I've been coding since 17, and adapting to new technology is second nature to me - hand me any stack and I'll be fluent before you finish onboarding me.`}},experience:[{period:`2023 — Present`,items:[{role:`Independent Full-Stack Engineer`,org:`Freelance`,points:[`Shipped end-to-end products for freelance clients across SaaS and PaaS.`,`Designed scalable system architectures for multi-tenant platforms.`,`Collapsed time-to-market by automating builds with AI-assisted workflows.`]},{role:`Platform Engineer`,org:`PaaS Startup`,points:[`Owned the developer platform from schema to shipped UI, edge to edge.`,`Built internal tooling and CI pipelines adopted by the whole team.`,`Drove on-call reliability and reduced error budgets by 40%.`,`Integrated AI-native patterns into core product flows.`]}]},{period:`2022 — 2023`,items:[{role:`Product Engineer`,org:`SaaS / Developer Tools`,points:[`Built developer tools consumed by thousands of engineers.`,`Owned features from schema to shipped UI, edge to edge.`,`Integrated AI-native patterns into core product flows.`]}]},{period:`2021 — 2022`,items:[{role:`First Engineering Hires`,org:`Startups`,points:[`Rapidly prototyped MVPs that validated and raised rounds.`,`Wore the full-stack hat: infra, backend, frontend and QA.`,`System-designed with boring, reliable primitives.`]}]},{period:`2019 — 2021`,items:[{role:`Side Projects & Learning`,org:`Personal`,points:[`Taught myself systems, compilers and game dev by building things.`,`Published my first open-source libraries.`]}]}],projects:[{title:`Nebula Deploy`,type:`PaaS / Developer Tools`,description:`Zero-config deployment platform with preview builds, branch environments and rollback on every push.`,stack:[`TypeScript`,`Go`,`Docker`,`Kubernetes`],status:`shipped`,stars:1280,links:{visit:`https://nebula-deploy.example.com`,source:`https://github.com/ashdevley/nebula-deploy`},overview:[`Nebula Deploy is a zero-config deployment platform for teams that want preview builds, branch environments and instant rollback without a page of YAML.`,`Push to any branch and Nebula provisions an isolated environment from a content-addressable build cache, wires it into your PR, and tears it down when the PR merges.`],architecture:[`The control plane is a multi-tenant Go API backed by Postgres, with per-tenant sharding so isolation and backpressure are baked in at the schema level.`,`Builds run in Docker on a pooled fleet, and every deploy is recorded as an immutable event — rollback is a pointer move, not a redeploy.`],gallery:[{src:`/screenshots/nebula-dashboard.jpg`,caption:`Preview build dashboard with live branch environments.`,width:800,height:500},{src:`/screenshots/nebula-rollback.jpg`,caption:`Rollback timeline — every deploy is one click away from undo.`,width:800,height:500},{src:`/screenshots/nebula-onboarding.jpg`,caption:`Zero-config onboarding, from repo to production in seconds.`,width:800,height:500}]},{title:`PromptSmith`,type:`AI Native`,description:`Version-controlled prompt playground with evals, regression tracking and one-click model swap.`,stack:[`React`,`Python`,`OpenAI`,`Postgres`],status:`open source`,stars:3460,links:{visit:`https://promptsmith.example.com`,source:`https://github.com/ashdevley/promptsmith`},overview:[`PromptSmith treats prompts like code: versioned, diffable and regression-tested. Every prompt lives in a git-backed registry with a full history.`,`The playground lets you iterate against any model with one click, and the eval harness gates every change so quality never silently drifts.`],architecture:[`A React frontend talks to a Python API that proxies model providers behind a single interface, with structured outputs enforced at the boundary.`,`Evals run as Postgres-backed jobs; results are stored per commit so model swaps and prompt edits are compared apples-to-apples.`],gallery:[{src:`/screenshots/promptsmith-playground.jpg`,caption:`Version-controlled prompt playground — diff, fork and merge prompts like code.`,width:800,height:500},{src:`/screenshots/promptsmith-evals.jpg`,caption:`Eval harness with regression tracking on every model swap.`,width:800,height:500},{src:`/screenshots/promptsmith-swap.jpg`,caption:`One-click model swap with side-by-side output comparison.`,width:800,height:500}]},{title:`Pipelines`,type:`CLI / Developer Tools`,description:`Declarative CI/CD in a single YAML. Local-first, Git-native, runs anywhere.`,stack:[`Rust`,`YAML`,`Docker`],status:`experimental`,stars:640,links:{source:`https://github.com/ashdevley/pipelines`},overview:[`Pipelines is a declarative CI/CD runner that lives in your repo. A single pipelines.yaml describes the whole flow, and the same file runs locally and in CI.`,`It is Git-native: pipeline state derives from the commit graph, so re-runs, retries and approvals all map to real git operations.`],architecture:[`A Rust core parses the YAML into a DAG, then executes steps in Docker with content-addressable layer caching between runs.`,`The runner is a single static binary with no daemon — it pulls, checks out, executes and reports, anywhere a shell exists.`],gallery:[{src:`/screenshots/pipelines-yaml.jpg`,caption:`Declarative CI/CD defined in a single YAML file.`,width:800,height:500},{src:`/screenshots/pipelines-run.jpg`,caption:`Local-first Git-native runner executing a pipeline.`,width:800,height:500},{src:`/screenshots/pipelines-cache.jpg`,caption:`Content-addressable layer caching — warm builds in seconds.`,width:800,height:500}]},{title:`Vanta Store`,type:`SaaS / E-commerce`,description:`Headless commerce backend with real-time inventory, webhooks and a blazing-fast storefront.`,stack:[`Next.js`,`Node.js`,`Redis`,`Stripe`],status:`shipped`,stars:210,links:{visit:`https://vanta-store.example.com`,source:`https://github.com/ashdevley/vanta-store`},overview:[`Vanta Store is a headless commerce platform: a blazing-fast storefront on top of a real-time inventory and order API.`,`Inventory counts stream over WebSockets, and every payment lands through idempotent Stripe webhooks so checkout can never double-charge.`],architecture:[`Next.js renders catalog pages with route-level SSR for crawlability, then hydrates the interactive storefront client-side.`,`A Node API owns orders and inventory with Redis for hot-path stock checks; Stripe webhooks are reconciled idempotently in Postgres.`],gallery:[{src:`/screenshots/vanta-storefront.jpg`,caption:`Blazing-fast storefront with real-time inventory.`,width:800,height:500},{src:`/screenshots/vanta-checkout.jpg`,caption:`Checkout wired to idempotent Stripe webhooks.`,width:800,height:500},{src:`/screenshots/vanta-admin.jpg`,caption:`Admin dashboard with order and webhook event history.`,width:800,height:500}]},{title:`Lumen Chat`,type:`Mobile App`,description:`Cross-platform messaging app with end-to-end encryption and offline-first sync.`,stack:[`React Native`,`SQLite`,`WebSocket`],status:`beta`,stars:890,links:{source:`https://github.com/ashdevley/lumen-chat`},overview:[`Lumen Chat is a cross-platform messenger built around one promise: your messages are end-to-end encrypted by protocol, not by library.`,`It is offline-first — every conversation syncs through a local SQLite store, so messages compose, queue and deliver even with no signal.`],architecture:[`A X25519 key-exchange with a double-ratchet keeps every conversation encrypted; keys never leave the device.`,`Sync runs over WebSockets with an event-sourced log, so message ordering survives partition tolerance without a central queue.`],gallery:[{src:`/screenshots/lumen-chat.jpg`,caption:`Cross-platform messaging with offline-first sync.`,width:800,height:500},{src:`/screenshots/lumen-encryption.jpg`,caption:`End-to-end encrypted conversation view.`,width:800,height:500},{src:`/screenshots/lumen-sync.jpg`,caption:`Honest delivery states for real sync semantics.`,width:800,height:500}]},{title:`Rogue Grid`,type:`Game`,description:`A pixel-perfect roguelike in the browser. Procedural dungeons, permadeath, zero dependencies.`,stack:[`TypeScript`,`Canvas`,`WebGL`],status:`shipped`,stars:1520,links:{visit:`https://rogue-grid.example.com`,source:`https://github.com/ashdevley/rogue-grid`},overview:[`Rogue Grid is a browser roguelike with procedural dungeons, permadeath and zero runtime dependencies.`,`Every run is a fresh floor plan — rooms, corridors, loot and enemies are all generated from a seeded RNG, so runs are shareable by seed.`],architecture:[`The game loop runs on a fixed-timestep update with a canvas draw pass, pooling objects to keep render budgets flat.`,`Dungeon generation is a constraint-based BSP packer; field-of-view and pathfinding are computed per-tile with no allocations in the hot path.`],gallery:[{src:`/screenshots/rogue-grid-dungeon.jpg`,caption:`Procedural dungeon generation in the browser.`,width:800,height:500},{src:`/screenshots/rogue-grid-combat.jpg`,caption:`Pixel-perfect roguelike combat.`,width:800,height:500},{src:`/screenshots/rogue-grid-render.jpg`,caption:`Canvas rendering at a steady 60fps on low-end mobiles.`,width:800,height:500}]}],expertise:{intro:`These are the areas of a software product **I can take responsibility** for. **No keyword graffiti** - click the cards below to see the tools behind each claim.`,views:{engineering:{icon:`chip`,short:`engineering`,title:`engineering capability`,desc:`What I can build and deliver - the technical side of owning a product.`},product:{icon:`compass`,short:`product`,title:`product thinking`,desc:`The judgment side - reliability, economics and what is actually worth building.`}},engineering:[{title:`System Architecture`,description:`Breaking products into sane boundaries, designing data flows, APIs, storage and failure behavior, and choosing architectures based on constraints rather than fashion.`,evidence:[{notes:`Designed the multi-tenant control plane and per-tenant sharding in Nebula so isolation and backpressure were baked in at the schema level.`,project:`Nebula Deploy`},{notes:`Mapped the event-sourcing boundaries for Lumen Chat so message ordering survived partition tolerance without a central queue.`,project:`Lumen Chat`}]},{title:`Product Engineering`,description:`Taking features from interface to API to persistence to production, instead of treating frontend, backend and infrastructure as separate worlds.`,evidence:[{notes:`Shipped checkout end-to-end in Vanta Store: React storefront, Node API, Postgres and idempotent Stripe webhooks for payments reconciliation.`,project:`Vanta Store`}]},{title:`Quality Engineering`,description:`Choosing the right mix of unit, integration, contract and E2E tests, designing systems that are testable in the first place, and keeping feedback loops fast.`,evidence:[{notes:`Wrote the contract and golden-file tests that gate every release in Pipelines - invalid YAML now fails CI in under a second.`,project:`Pipelines`}]},{title:`Application Security`,description:`Threat-aware engineering around auth, authorization, secrets, validation, dependencies and exposed infrastructure - security as part of design, not a final checklist.`,evidence:[{notes:`Designed the X25519 key-exchange and ratchet for Lumen Chat so every message is end-to-end encrypted by protocol, not by library.`,project:`Lumen Chat`}]},{title:`Performance Engineering`,description:`Finding where time and memory actually go - measuring before optimizing, profiling bottlenecks, and attacking latency users can feel.`,evidence:[{notes:`Cut Rogue Grid's render budget on low-end mobiles by pooling canvas objects and batching the draw pass to a steady 60fps.`,project:`Rogue Grid`},{notes:`Profiled Vanta Store's API with flamegraphs and removed a 120ms JSON serialization hotspot inherited from an impatient ORM flush.`,project:`Vanta Store`}]},{title:`Delivery & Infrastructure`,description:`CI/CD, reproducible environments, infrastructure automation, deployment strategy and the operational path from commit to production.`,evidence:[{notes:`Wired a Git-native runner with eager content-addressable layer caching so warm builds deploy in seconds instead of minutes.`,project:`Pipelines`}]},{title:`Applied AI Engineering`,description:`Building the systems around models - context, tools, structured outputs, evals, routing, and cost controls - so AI behaves like a dependable product component.`,evidence:[{notes:`Built the eval harness and prompt-injection suite for PromptSmith, with regression tracking on every model swap.`,project:`PromptSmith`}]},{title:`Observability & Cost`,description:`Instrumenting systems so failures, latency and resource usage are visible, then using that signal to keep reliability high and spend under control.`,evidence:[{notes:`Added request tracing and spend dashboards to Vanta Store, cutting infra costs by 30% once we saw the real hot path.`,project:`Vanta Store`}]}],product:[{title:`Search & Distribution`,description:`Understanding how architecture affects discoverability - rendering strategy, semantics and the technical side of getting a product found.`,evidence:[{notes:`Chose route-level SSR in Vanta Store so catalog pages stayed crawlable, with targeted client hydration for the interactive parts.`,project:`Vanta Store`}]},{title:`Reliability`,description:`Treating uptime, graceful failure, recoverability and predictable performance as part of the user experience rather than infrastructure trivia.`,evidence:[{notes:`Configured zero-downtime deploys and automated rollback for Nebula Deploy, so a bad release is contained in seconds, not incidents.`,project:`Nebula Deploy`}]},{title:`Interface Judgment`,description:`Building interfaces around hierarchy, clarity and interaction, rather than blindly assembling component libraries and AI-generated UI.`,evidence:[{notes:`Designed the offline-first sync states for Lumen Chat around real delivery semantics instead of optimistic fake checkmarks.`,project:`Lumen Chat`}]},{title:`Engineering Leverage`,description:`Using automation and AI aggressively where they increase throughput, while keeping architecture, verification and important decisions human-controlled.`,evidence:[{notes:`Cut PromptSmith iteration time with a fast-fail eval loop that prunes regressions before they ever hit the model registry.`,project:`PromptSmith`}]},{title:`Product Ownership`,description:`Thinking beyond implementation - requirements, UX, acquisition, operating cost and monetization - including whether a feature should exist at all.`,evidence:[{notes:`Scoped Vanta Store's monetization myself: usage-tier limits, per-customer webhooks and Stripe billing flows designed to convert.`,project:`Vanta Store`},{notes:`Defined the free-tier ceiling for Nebula Deploy so scaling cost and churn kept a sane unit economics curve.`,project:`Nebula Deploy`}]}]}},t=document.querySelector(`#app`),n=e.person.prompt;function r(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function i(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function a(e){return r(e).replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`)}function o(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`)}var s=e=>new Promise(t=>setTimeout(t,e));function c(){return`
  <header class="topbar">
    <div class="topbar-inner">
      <nav class="nav-links" aria-label="Primary">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#expertise">expertise</a>
        <a href="#contact">contact</a>
      </nav>
    </div>
  </header>`}function l(e){return`
  <section id="about" class="hero">
    <div class="hero-prompt">${n} whoami</div>
    <h1 class="name"><span class="accent">${r(e.name)}</span></h1>
    <p class="role">${r(e.role)}</p>
    <div class="hero-meta">
      <span>${r(e.location)}</span>
      <span class="sep">·</span>
      <span class="accent-txt">${r(e.status)}</span>
    </div>
    <div class="hero-edu">
      <span class="edu-mark">◆</span>
      <span>B.S. Computer Science · </span>
      <span class="edu-short">${r(e.education_short)}</span>
      <span class="edu-full">${r(e.education_full)}</span>
      <span class="sep">·</span>
      <span>${r(e.education_year)}</span>
    </div>
  </section>`}function u(e){return`
    <div class="exp-item">
      <h3 class="exp-role">${r(e.role)} <span class="muted">@ ${r(e.org)}</span></h3>
      <ul class="exp-points">
        ${e.points.map(e=>`<li>${r(e)}</li>`).join(``)}
      </ul>
    </div>`}function d(e){return`
  <section id="experience" class="section">
    <div class="section-title"><span class="prompt-sym">❯</span> experience</div>
    <div class="exp-list">${e.map(e=>`
      <article class="exp">
        <span class="exp-dot" aria-hidden="true"></span>
        <div class="exp-main">
          <span class="period">${r(e.period)}</span>
          ${e.items.map(u).join(``)}
        </div>
      </article>`).join(``)}</div>
  </section>`}function f(e,t){let n=e.stack.map(e=>`<li class="stack-tag">${r(e)}</li>`).join(``),a=e.links??{},o=[a.visit?`<a class="pbtn visit" href="${r(a.visit)}" target="_blank" rel="noopener">Visit</a>`:``,a.source?`<a class="pbtn source" href="${r(a.source)}" target="_blank" rel="noopener">Source</a>`:``,`<button class="pbtn explore" type="button">Explore</button>`].filter(Boolean).join(``);return`
  <article class="card" id="project-${i(e.title)}" style="--i: ${t}">
    <div class="card-info">
      <div class="card-top">
        <span class="card-index">0${t+1}</span>
        <span class="card-status ${e.status.replace(/\s+/g,`-`)}">${r(e.status)}</span>
      </div>
      <h3 class="card-title">${r(e.title)}</h3>
      <p class="card-type">${r(e.type)}</p>
      <p class="card-desc">${r(e.description)}</p>
      <ul class="stack">${n}</ul>
      <div class="card-foot">
        <span class="stars"><span class="star">★</span> ${e.stars.toLocaleString()}</span>
        <div class="card-actions">
          ${o}
        </div>
      </div>
    </div>
  </article>`}function p(e){let t=e.map(f).join(``);return`
  <section id="projects" class="section">
    <div class="section-title"><span class="prompt-sym">❯</span> featured projects <span class="count">(${e.length})</span></div>
    <div class="cards">${t}</div>
  </section>`}function m(e){let t=e[0];if(e.length===1)return`
      <div class="expert-evidence">
        <span class="ev-body">
          <span class="ev-note">${r(t.notes)}</span>
          <a class="ev-link" href="#project-${i(t.project)}">evidence → ${r(t.project)}</a>
        </span>
      </div>`;let n=o(JSON.stringify(e.map(e=>e.notes))),a=o(JSON.stringify(e.map(e=>e.project))),s=e.map((e,t)=>`<button class="ev-dot${t===0?` active`:``}" data-i="${t}" aria-label="evidence ${t+1}"></button>`).join(``);return`
    <div class="expert-evidence has-dots" data-notes="${n}" data-projs="${a}">
      <div class="ev-body">
        <span class="ev-note">${r(t.notes)}</span>
        <div class="ev-foot">
          <a class="ev-link" href="#project-${i(t.project)}">evidence → ${r(t.project)}</a>
          <span class="ev-dots">${s}</span>
        </div>
      </div>
    </div>`}function h(e,t){return`
  <div class="expert-panel ${e}" data-cat="${e}">
    ${t.map(e=>`
      <div class="expert-item">
        <h4 class="expert-title">${r(e.title)}</h4>
        <p class="expert-desc">${r(e.description)}</p>
        ${m(e.evidence)}
      </div>`).join(``)}
  </div>`}var g={chip:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="7" y="7" width="10" height="10"/><path d="M10 7V3M14 7V3M10 21V17M14 21V17M7 10H3M7 14H3M21 10H17M21 14H17"/></svg>`,compass:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.2 6.2-6.2 2.2 2.2-6.2 6.2-2.2z"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>`};function _(){let t=e.expertise.views,n=(e,n)=>`
    <button class="expert-view${n?` active`:``}" data-cat="${e}" aria-pressed="${n}">
      <span class="view-icon">${g[t[e].icon]??``}</span>
      <span class="view-title">${r(t[e].title)}</span>
      <span class="view-desc">${r(t[e].desc)}</span>
    </button>`;return[n(`engineering`,!1),n(`product`,!1)]}function v(){let t=e.expertise;return`
  <section id="expertise" class="section">
    <div class="section-title"><span class="prompt-sym">❯</span> expertise</div>
    <blockquote class="expertise-intro">${a(t.intro)}</blockquote>
    <div class="expert-cards">${_().join(``)}</div>
    ${h(`engineering`,t.engineering)}
    ${h(`product`,t.product)}
  </section>`}function y(){let e=t.querySelector(`#expertise`),n=t.querySelectorAll(`.expert-view`),r=Array.from(t.querySelectorAll(`.expert-panel`)),i=t=>{e?.classList.toggle(`product`,t===`product`),n.forEach(e=>{let n=e.dataset.cat===t;e.classList.toggle(`active`,n),e.setAttribute(`aria-pressed`,String(n))});let i=r.find(e=>e.classList.contains(`active`)),a=r.find(e=>e.dataset.cat===t);if(a&&i!==a){if(!i){a.classList.add(`active`);return}i.classList.remove(`active`),i.classList.add(`fade-out`),window.setTimeout(()=>{i.classList.remove(`fade-out`),a.classList.add(`active`)},200)}};n.forEach(e=>{e.addEventListener(`click`,()=>i(e.dataset.cat))})}async function b(e,t,n,r,a,o){let c=()=>o.v!==a,l=e.textContent??``;for(let t=l.length;t>=0;t--){if(c())return;e.textContent=l.slice(0,t),await s(2)}t.textContent=`typing…`;for(let t=1;t<=n.length;t++){if(c())return;e.textContent=n.slice(0,t),await s(3)}t.textContent=`evidence → `+r,t.href=`#project-`+i(r)}function x(){t.querySelectorAll(`.expert-evidence.has-dots`).forEach(e=>{let t=e.querySelector(`.ev-note`),n=e.querySelector(`.ev-link`),r=Array.from(e.querySelectorAll(`.ev-dot`)),i=JSON.parse(e.dataset.notes??`[]`),a=JSON.parse(e.dataset.projs??`[]`),o=Math.min(r.length,i.length),s={v:0},c=!1,l=t=>{c=t,e.classList.toggle(`typing`,t),r.forEach(e=>{e.disabled=t})},u=e=>{if(c)return;r.forEach(t=>t.classList.toggle(`active`,Number(t.dataset.i)===e)),s.v++;let o=s.v;l(!0),b(t,n,i[e],a[e],o,s).finally(()=>{s.v===o&&l(!1)})};r.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),u(Number(e.dataset.i))})}),e.addEventListener(`click`,()=>{if(c)return;let e=(r.findIndex(e=>e.classList.contains(`active`))+1)%o;u(e)})})}function S(e){let t=[{label:`github`,href:e.contact.github},{label:`linkedin`,href:e.contact.linkedin},{label:`x / twitter`,href:e.contact.x}].map(e=>`<a class="contact-link" href="${e.href}" target="_blank" rel="noopener">${r(e.label)}</a>`).join(``);return`
  <section id="contact" class="section contact">
    <div class="section-title"><span class="prompt-sym">❯</span> reach me</div>
    <div class="contact-block card">
      <a class="contact-mail" href="mailto:${r(e.contact.email)}">${r(e.contact.email)}</a>
      <p class="contact-line">${r(e.contact.line)}</p>
      <div class="contact-links">${t}</div>
    </div>
  </section>
  <footer class="footer">
    <p>${n} <span class="blink">▮</span></p>
    <p class="muted">© ${new Date().getFullYear()} ${r(e.name)} · built with vanilla TS + ❤</p>
  </footer>`}function C(t){return`
    ${c()}
    <main>
      ${l(t)}
      ${d(e.experience)}
      ${p(e.projects)}
      ${v()}
      ${S(t)}
    </main>`}function w(e){let t=e.links??{},a=(e.overview??[]).map(e=>`<p class="ov-p">${r(e)}</p>`).join(``),o=(e.architecture??[]).map(e=>`<p class="ov-p">${r(e)}</p>`).join(``),s=(e.gallery??[]).map((t,n)=>`
      <figure class="ov-img">
        <button class="ov-img-btn" type="button" data-gi="${n}" aria-label="View fullscreen: ${r(t.caption)}">
          <img src="${r(t.src)}" alt="${r(e.title)} - ${r(t.caption)}" width="${t.width??800}" height="${t.height??500}" loading="lazy" />
        </button>
        <figcaption>${r(t.caption)}</figcaption>
      </figure>`).join(``),c=[t.visit?`<a class="pbtn visit" href="${r(t.visit)}" target="_blank" rel="noopener">Visit</a>`:``,t.source?`<a class="pbtn source" href="${r(t.source)}" target="_blank" rel="noopener">Source</a>`:``].filter(Boolean).join(``);return`
  <div class="ov" id="project-overlay" role="dialog" aria-modal="true" aria-label="${r(e.title)}">
    <button class="ov-close" type="button" aria-label="Close">✕</button>
    <div class="ov-scroll">
      <div class="ov-head">
        <div class="ov-prompt">${n} explore --project ${i(e.title)}</div>
        <span class="ov-status ${e.status.replace(/\s+/g,`-`)}">${r(e.status)}</span>
      </div>
      <h2 class="ov-title">${r(e.title)}</h2>
      <p class="ov-type">${r(e.type)}</p>
      <p class="ov-desc">${r(e.description)}</p>
      <ul class="stack">${e.stack.map(e=>`<li class="stack-tag">${r(e)}</li>`).join(``)}</ul>
      <div class="ov-actions">${c}</div>
      <div class="ov-body">
        <h3 class="ov-h3">overview</h3>
        ${a}
        <h3 class="ov-h3">screenshots</h3>
        <div class="ov-imgs">${s}</div>
        <h3 class="ov-h3">architecture</h3>
        ${o}
      </div>
    </div>
  </div>`}function T(e,t){return`
  <div class="lb" role="dialog" aria-modal="true" aria-label="Image fullscreen viewer">
    <button class="lb-close" type="button" aria-label="Close">✕</button>
    <button class="lb-nav lb-prev" type="button" aria-label="Previous image">‹</button>
    <div class="lb-stage">${e.map((e,n)=>`
      <figure class="lb-fig${n===t?` active`:``}" data-gi="${n}">
        <img src="${r(e.src)}" alt="${r(e.caption)}" width="${e.width??800}" height="${e.height??500}" />
        <figcaption>${r(e.caption)}</figcaption>
      </figure>`).join(``)}</div>
    <button class="lb-nav lb-next" type="button" aria-label="Next image">›</button>
    <span class="lb-count">${t+1} / ${e.length}</span>
  </div>`}function E(e,t){if(e.length===0)return;let n=document.createElement(`div`);n.innerHTML=T(e,t);let r=n.firstElementChild;document.body.appendChild(r);let i=Array.from(r.querySelectorAll(`.lb-fig`)),a=r.querySelector(`.lb-count`),o=t,s=t=>{o=(t+e.length)%e.length,i.forEach(e=>e.classList.toggle(`active`,Number(e.dataset.gi)===o)),a.textContent=`${o+1} / ${e.length}`},c=()=>r.remove();r.querySelector(`.lb-close`)?.addEventListener(`click`,c),r.querySelector(`.lb-prev`)?.addEventListener(`click`,()=>s(o-1)),r.querySelector(`.lb-next`)?.addEventListener(`click`,()=>s(o+1)),r.addEventListener(`click`,e=>{e.target===r&&c()}),document.addEventListener(`keydown`,e=>{document.body.contains(r)&&(e.key===`Escape`?c():e.key===`ArrowLeft`?s(o-1):e.key===`ArrowRight`&&s(o+1))})}function D(e,t){let n=t.getBoundingClientRect(),r=window.innerWidth/2,i=window.innerHeight/2,a=t.cloneNode(!0);a.classList.add(`ghost`),a.setAttribute(`aria-hidden`,`true`),a.style.setProperty(`--gx`,`${n.left}px`),a.style.setProperty(`--gy`,`${n.top}px`),a.style.setProperty(`--gw`,`${n.width}px`),a.style.setProperty(`--gh`,`${n.height}px`),document.body.appendChild(a),t.classList.add(`dimmed`);let o=document.createElement(`div`);o.innerHTML=w(e);let s=o.firstElementChild;document.body.appendChild(s);let c=document.createElement(`div`);c.className=`ov-backdrop`,document.body.appendChild(c);let l=r-(n.left+n.width/2),u=i-(n.top+n.height/2);requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.add(`fly`),a.style.setProperty(`--fx`,`${l}px`),a.style.setProperty(`--fy`,`${u}px`)})}),window.setTimeout(()=>{a.classList.remove(`fly`),a.classList.add(`expand`,`glitching`),c.classList.add(`show`),window.setTimeout(()=>{a.classList.add(`done`),s.classList.add(`visible`),window.setTimeout(()=>s.classList.add(`done`),350)},480)},380);let d=()=>{a.remove(),s.remove(),c.remove(),t.classList.remove(`dimmed`)};s.querySelector(`.ov-close`)?.addEventListener(`click`,d),c.addEventListener(`click`,d),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&document.body.contains(s)&&d()});let f=(e.gallery??[]).map(e=>({src:e.src,caption:e.caption,width:e.width,height:e.height}));s.querySelectorAll(`.ov-img-btn`).forEach(e=>{e.addEventListener(`click`,()=>E(f,Number(e.dataset.gi)))})}function O(){t.querySelectorAll(`.card`).forEach(t=>{t.querySelector(`.pbtn.explore`)?.addEventListener(`click`,()=>{let n=t.id.replace(/^project-/,``),r=e.projects.find(e=>i(e.title)===n);r&&D(r,t)})})}t.innerHTML=C(e.person),y(),x(),O();