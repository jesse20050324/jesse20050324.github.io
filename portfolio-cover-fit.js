const hero = document.querySelector(".hero");
const artwork = hero.querySelector(".hero-grid, .b-grid");
const navigation = document.querySelector(".nav, .site-head");
const desktop = matchMedia("(min-width: 1100px) and (min-aspect-ratio: 4/3)");
const editionWidth = hero.querySelector('.b-grid') ? 1440 : 1284;
let scheduled = false;

function fitCover() {
  scheduled = false;
  if (!desktop.matches) {
    hero.classList.remove("fit-cover");
    return;
  }

  hero.classList.add("fit-cover");
  const style = getComputedStyle(hero);
  const roomWidth = hero.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const roomHeight = innerHeight - navigation.getBoundingClientRect().height
    - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const scale = Math.min(1, roomWidth / editionWidth, roomHeight / Math.max(artwork.offsetHeight, 1));
  if (scale < 0.6) {
    hero.classList.remove("fit-cover");
    return;
  }
  const value = scale.toFixed(4);
  if (hero.style.getPropertyValue("--cover-scale") !== value) hero.style.setProperty("--cover-scale", value);
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(fitCover);
}

window.addEventListener("resize", schedule);
desktop.addEventListener("change", schedule);
const observer = new ResizeObserver(schedule);
observer.observe(navigation);
document.fonts.ready.then(schedule);
fitCover();
