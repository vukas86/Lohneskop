const quoteTabs = document.querySelectorAll(".quote-tab-div");
const qouteContainer = document.querySelector(".quote-tab");
const qouteContent = document.querySelectorAll(".quote-content");
const nav = document.querySelector(".nav-links");
const navSticky = document.querySelector(".nav");
const scrollBtn = document.querySelector(".sticky-hidden");
const quoteSection = document.querySelector(".quote");
const projectSection = document.querySelector("#projects");
const aboutSection = document.querySelector(".about");
const hamburgerElement = document.querySelector(".burger");
const menuElement = document.querySelector(".nav__respon-links");

qouteContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".quote-tab-div");

  if (!clicked) return;

  quoteTabs.forEach((t) => t.classList.remove("quote-tab-div-active"));
  clicked.classList.add("quote-tab-div-active");

  qouteContent.forEach((q) => q.classList.add("inactive"));
  document
    .querySelector(`.quote-content-${clicked.dataset.tab}`)
    .classList.remove("inactive");
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sibling = link.closest(".nav-links").querySelectorAll(".nav-link");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navSticky.classList.add("sticky");
  else navSticky.classList.remove("sticky");
};
const aboutObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-136.5px",
});

aboutObserver.observe(aboutSection);

scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.closest(".sticky-hidden")) return;

  const idLink = e.target.getAttribute("href");
  console.log(idLink);

  document.querySelector(idLink).scrollIntoView({ behavior: "smooth" });
});

const obserBtn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) scrollBtn.style.visibility = "visible";
  else scrollBtn.style.visibility = "hidden";
};

const scrollObserver = new IntersectionObserver(obserBtn, {
  root: null,
  threshold: 0,
});

scrollObserver.observe(aboutSection);

// Lazy loading imgs
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("blur-img");
    });
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.5,
});

imgTargets.forEach((img) => imgObserver.observe(img));

hamburgerElement.addEventListener("click", () => {
  if (menuElement.classList.contains("nav__respon-links-close")) {
    menuElement.classList.remove("nav__respon-links-close");
  } else {
    menuElement.classList.add("nav__respon-links-close");
  }
});
