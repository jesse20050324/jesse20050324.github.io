const hero = document.querySelector(".hero");
const spinner = document.getElementById("spinner");
const bootStatus = document.getElementById("boot-status");
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
const frames = ["/", "|", "\\", "-"];
const palette = document.getElementById("palette");
const root = document.documentElement;
const requested = new URLSearchParams(location.search).get("palette");
if (Array.from(palette.options).some(option => option.value === requested)) palette.value = requested;
root.dataset.palette = palette.value;
palette.addEventListener("change", () => { root.dataset.palette = palette.value; });

let spinTimer;
let finishTimer;

function finish() {
  clearInterval(spinTimer);
  clearTimeout(finishTimer);
  hero.classList.remove("playing");
  spinner.textContent = "✓";
  bootStatus.textContent = document.documentElement.lang === "en" ? "Both chats connected" : "两路会话已接通";
}

function replay() {
  finish();
  if (motion.matches) return;
  void hero.offsetWidth;
  hero.classList.add("playing");
  bootStatus.textContent = document.documentElement.lang === "en" ? "Connecting both chats" : "正在接入两路会话";
  spinner.textContent = frames[0];
  let frame = 0;
  spinTimer = setInterval(() => {
    frame = (frame + 1) % frames.length;
    spinner.textContent = frames[frame];
  }, 115);
  finishTimer = setTimeout(finish, 1500);
}

document.getElementById("replay").addEventListener("click", replay);
motion.addEventListener("change", finish);
if (!location.hash) replay();

/* ---------- 四阶段：下滚驱动的横移轨道 ---------- */
const railWrap = document.getElementById("stage-rail");
const railTrack = document.getElementById("rail-track");
const railIdx = document.getElementById("rail-idx");
const railHead = document.querySelector("[data-rail-head]");
const desktop = window.matchMedia("(min-width: 821px)");
let railQueued = false;

function railUpdate() {
  railQueued = false;
  if (!railWrap || !railTrack) return;
  if (!desktop.matches || motion.matches) { railTrack.style.transform = ""; if (railHead) railHead.classList.remove("fade"); return; }
  const rect = railWrap.getBoundingClientRect();
  const total = railWrap.offsetHeight - window.innerHeight;
  const p = Math.min(1, Math.max(0, -rect.top / (total || 1)));
  const max = Math.max(0, railTrack.scrollWidth - railWrap.clientWidth);
  railTrack.style.transform = "translateX(" + (-p * max).toFixed(1) + "px)";
  railIdx.textContent = "0" + Math.min(4, Math.floor(p * 3.999) + 1) + " / 04";
  if (railHead) railHead.classList.toggle("fade", p > 0.04);
}

function railQueue() {
  if (!railQueued) { railQueued = true; requestAnimationFrame(railUpdate); }
}

window.addEventListener("scroll", railQueue, { passive: true });
window.addEventListener("resize", railQueue);
railUpdate();

/* ---------- 四格矩阵：滚动驱动的拆解与重组 ---------- */
const mxWrap = document.getElementById("mx-wrap");
const mxStage = document.getElementById("mx-stage");
const mxSticky = mxWrap?.querySelector(".mx-sticky");
const mxT1 = mxStage ? [...mxStage.querySelectorAll("[data-t1]")] : [];
const mxT2H = mxStage ? [...mxStage.querySelectorAll("[data-t2]")] : [];
const mxCells = mxStage ? [...mxStage.querySelectorAll("[data-c]")] : [];
const mxChips = mxStage ? [...mxStage.querySelectorAll("[data-chip]")] : [];
const MX_C1 = [[110, 44], [350, 44], [110, 122], [350, 122]];
const mxSeg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));
const mxEz = t => t * t * (3 - 2 * t);

function mxRender(p) {
  const mxIntro = document.querySelector("[data-intro]");
  const mxCap = document.querySelector("[data-cap]");
  const mxHead = document.querySelector(".mx-head");
  if (mxIntro) mxIntro.style.opacity = 1 - mxEz(mxSeg(p, .02, .09));
  if (mxCap) mxCap.style.opacity = mxEz(mxSeg(p, .42, .52));
  if (mxHead) mxHead.classList.toggle("capmode", p > .45);
  if (mxStage) mxStage.style.translate = "0 " + (-46 * mxEz(mxSeg(p, .40, .50))).toFixed(2) + "px";
  const f1 = 1 - mxEz(mxSeg(p, .09, .27));
  for (const el of mxT1) el.style.opacity = f1;
  const lift = Math.sin(Math.PI * mxSeg(p, .17, .31));
  const fly = mxEz(mxSeg(p, .31, .57));
  mxChips.forEach((el, i) => {
    const [x1, y1] = MX_C1[i];
    const x2 = 0, y2 = 104 + i * 70;
    el.style.left = (x1 + (x2 - x1) * fly) + "px";
    el.style.top = (y1 + (y2 - y1) * fly - lift * (16 + i * 6)) + "px";
    el.style.width = (240 + (200 - 240) * fly) + "px";
    el.style.height = (78 + (70 - 78) * fly) + "px";
    el.classList.toggle("landed", fly > .96);
  });
  const f2 = mxEz(mxSeg(p, .41, .55));
  for (const el of mxT2H) el.style.opacity = f2;
  mxCells.forEach((el, i) => {
    const row = i >> 1;
    el.style.opacity = mxEz(mxSeg(p, .57 + row * .07, .65 + row * .07));
  });
}

function mxFit() {
  const s = Math.min(1, (mxSticky.clientWidth - 8) / 760);
  mxStage.style.transform = "scale(" + s + ")";
  if (mxWrap.classList.contains("static")) mxSticky.style.height = (388 * s + 16) + "px";
}

let mxQueued = false;
function mxUpdate() {
  mxQueued = false;
  if (!desktop.matches || motion.matches) { mxRender(1); return; }
  const r = mxWrap.getBoundingClientRect();
  const total = mxWrap.offsetHeight - window.innerHeight;
  // 进度重映射：动画在 .86 完成，尾部死区从 28vh 缩到 14vh（缩短 1/2）
  mxRender(Math.min(1, Math.max(0, -r.top / (total || 1)) * 0.925));
}

function mxQueue() {
  if (!mxQueued) { mxQueued = true; requestAnimationFrame(mxUpdate); }
}

if (mxWrap) {
  if (motion.matches) mxWrap.classList.add("static");
  window.addEventListener("scroll", mxQueue, { passive: true });
  window.addEventListener("resize", mxQueue);
  mxFit();
  mxUpdate();
}

/* ---------- 导航高亮 ---------- */
const links = [...document.querySelectorAll("nav a")];
const chapters = links.map(link => document.querySelector(link.hash));
const header = document.querySelector(".site-header");

function markSection() {
  const current = chapters.findLast(chapter => chapter.getBoundingClientRect().top <= header.offsetHeight + 52);
  for (const link of links) {
    if (current?.id === link.hash.slice(1)) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

window.addEventListener("scroll", markSection, { passive: true });
window.addEventListener("resize", markSection);
markSection();

/* ---------- 入场动效 ---------- */
const revealables = document.querySelectorAll(".ch-head, .entry, .figure-row, .prose-block, .figure-band, .rail-card, .rail-head, .table-wrap, .duo-chat");
if (!motion.matches && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { threshold: .08, rootMargin: "0px 0px -6% 0px" });
  for (const el of revealables) { el.classList.add("rv"); io.observe(el); }
}

/* ---------- 双会话流程画布：拖拽 + 缩放 ---------- */
(function () {
  const frame = document.getElementById("flow-frame");
  const canvas = document.getElementById("flow-canvas");
  if (!frame || !canvas || !window.FLOW_DATA) return;
  const D = window.FLOW_DATA, GAP = 24;

  /* 卡片 */
  const els = {};
  for (const id in D.cards) {
    const c = D.cards[id], d = document.createElement("div");
    d.className = "fcard " + c.k; d.dataset.id = id; d.innerHTML = c.t;
    d.style.width = c.w + "px";
    canvas.appendChild(d); els[id] = d;
  }

  /* 布局：按实测高度堆叠，泳道居中 */
  const zoneH = { h: 0, m: 0, e: 0 };
  const stacks = [];
  for (const col of D.cols) {
    for (const z of ["h", "m", "e"]) {
      const rows = col.lanes[z];
      if (!rows) continue;
      const rh = rows.map(ids => Math.max(...ids.map(id => els[id].offsetHeight)));
      const sh = rh.reduce((a, b) => a + b, 0) + GAP * (rows.length - 1);
      stacks.push({ col, z, rows, rh, sh });
      if (sh > zoneH[z]) zoneH[z] = sh;
    }
  }
  const HER_C = zoneH.h / 2 + 30;
  const HIS_C = zoneH.h + 130 + zoneH.m / 2;
  const END_C = (HER_C + HIS_C) / 2;
  const H = Math.ceil(Math.max(zoneH.h + 130 + zoneH.m, zoneH.e) + 60);
  const C = z => z === "h" ? HER_C : z === "m" ? HIS_C : END_C;
  for (const st of stacks) {
    let top = C(st.z) - st.sh / 2;
    st.rows.forEach((ids, r) => {
      const rowW = ids.reduce((a, id) => a + els[id].offsetWidth, 0) + GAP * (ids.length - 1);
      let left = st.col.x + (st.col.w - rowW) / 2;
      for (const id of ids) {
        const el = els[id];
        el.style.left = Math.round(left) + "px";
        el.style.top = Math.round(top + (st.rh[r] - el.offsetHeight) / 2) + "px";
        left += els[id].offsetWidth + GAP;
      }
      top += st.rh[r] + GAP;
    });
  }
  let maxR = 0;
  for (const id in els) maxR = Math.max(maxR, els[id].offsetLeft + els[id].offsetWidth);
  const W = Math.ceil(Math.max(maxR + 40, D.W));
  canvas.style.width = W + "px"; canvas.style.height = H + "px";

  /* 连线（实测卡片矩形） */
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "flow-edges");
  svg.setAttribute("width", W); svg.setAttribute("height", H);
  canvas.prepend(svg);
  const rct = id => { const e = els[id]; return { l: e.offsetLeft, t: e.offsetTop, r: e.offsetLeft + e.offsetWidth, b: e.offsetTop + e.offsetHeight, cx: e.offsetLeft + e.offsetWidth / 2, cy: e.offsetTop + e.offsetHeight / 2 }; };
  for (const [a, b, dash, lab] of D.edges) {
    if (!els[a] || !els[b]) continue;
    const A = rct(a), B = rct(b);
    let d, lx, ly;
    if (Math.abs(A.l - B.l) < 8 && Math.abs(A.cx - B.cx) < 8) {
      const bx = Math.max(A.r, B.r) + 54;
      d = `M${A.cx} ${A.b} C${bx} ${A.b},${bx} ${B.t},${B.cx} ${B.t}`;
      lx = bx + 6; ly = (A.b + B.t) / 2 + 3;
    } else if (B.r <= A.l + 4) {
      const by = Math.max(A.b, B.b) + 46;
      d = `M${A.l} ${A.cy} C${A.l} ${by},${B.r} ${by},${B.r} ${B.cy}`;
      lx = (A.l + B.r) / 2; ly = by + 12;
    } else {
      const x1 = A.r, y1 = A.cy, x2 = B.l, y2 = B.cy;
      const dx = Math.max(26, Math.min(110, (x2 - x1) * 0.5));
      d = `M${x1} ${y1} C${x1 + dx} ${y1},${x2 - dx} ${y2},${x2} ${y2}`;
      lx = x1 + (x2 - x1) * 0.42; ly = y1 + (y2 - y1) * 0.42;
    }
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    if (dash) p.setAttribute("class", "x");
    svg.appendChild(p);
    if (lab && lab.length) {
      const t = document.createElementNS(NS, "text");
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("x", Math.round(lx));
      const lines = lab.length;
      t.setAttribute("y", Math.round(ly - (lines - 1) * 5.2 + 3));
      for (const ln of lab) {
        const ts = document.createElementNS(NS, "tspan");
        ts.setAttribute("x", Math.round(lx));
        ts.setAttribute("dy", lines.length > 1 ? "10.4" : "0");
        ts.textContent = ln;
        t.appendChild(ts);
      }
      svg.appendChild(t);
    }
  }

  /* 拖拽 + 缩放 */
  let s = .5, tx = 16, ty = 0;
  const clampT = () => {
    const r = frame.getBoundingClientRect();
    tx = Math.min(40, Math.max(r.width - W * s - 40, tx));
    ty = Math.min(40, Math.max(r.height - H * s - 40, ty));
  };
  const apply = () => { canvas.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + s + ")"; };
  const fit = () => {
    const r = frame.getBoundingClientRect();
    s = Math.min((r.width - 24) / W, (r.height - 24) / H);
    tx = (r.width - W * s) / 2; ty = (r.height - H * s) / 2;
    apply();
  };
  const init = () => {
    const r = frame.getBoundingClientRect();
    s = Math.min(.6, Math.max(.18, r.height / H * .8));
    tx = 16; ty = (r.height - H * s) / 2;
    clampT(); apply();
  };
  let px = 0, py = 0, drag = false;
  frame.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    drag = true; frame.classList.add("dragging");
    px = e.clientX; py = e.clientY;
    frame.setPointerCapture(e.pointerId);
  });
  frame.addEventListener("pointermove", (e) => {
    if (!drag) return;
    tx += e.clientX - px; ty += e.clientY - py;
    px = e.clientX; py = e.clientY;
    clampT(); apply();
  });
  const stop = () => { drag = false; frame.classList.remove("dragging"); };
  frame.addEventListener("pointerup", stop);
  frame.addEventListener("pointercancel", stop);
  frame.addEventListener("wheel", (e) => {
    e.preventDefault();
    const r = frame.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    const ns = Math.min(2.5, Math.max(.1, s * Math.exp(-e.deltaY * .0013)));
    tx = mx - (mx - tx) * ns / s;
    ty = my - (my - ty) * ns / s;
    s = ns;
    clampT(); apply();
  }, { passive: false });
  frame.addEventListener("dblclick", fit);
  const fitBtn = document.getElementById("flow-fit");
  if (fitBtn) fitBtn.addEventListener("click", fit);
  addEventListener("resize", () => { clampT(); apply(); });
  if (document.readyState === "complete") init();
  else addEventListener("load", init);
})();


/* ---------- 中英切换（默认英文） ---------- */
(function () {
  const btns = document.querySelectorAll(".lang-switch button");
  if (!btns.length) return;
  const zhStore = new Map();
  document.querySelectorAll("[data-en]").forEach((el) => zhStore.set(el, el.innerHTML));
  const dlgBand = document.querySelector("#dialogue .figure-band");
  const dlgClosing = document.querySelectorAll("#dialogue > p.prose")[1] || null;
  function setLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.body.classList.toggle("lang-en", lang === "en");
    document.querySelectorAll("[data-en]").forEach((el) => {
      el.innerHTML = lang === "en" ? el.dataset.en : zhStore.get(el);
    });
    btns.forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
    if (typeof hero !== "undefined" && !hero.classList.contains("playing")) {
      bootStatus.textContent = lang === "en" ? "Both chats connected" : "两路会话已接通";
    }
    // 对话单元：EN 模式把收尾段挪到四项卡之后（中文版保持原结构）
    if (dlgBand && dlgClosing) {
      if (lang === "en") dlgBand.after(dlgClosing);
      else dlgBand.before(dlgClosing);
    }
  }
  btns.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang("en");
})();
