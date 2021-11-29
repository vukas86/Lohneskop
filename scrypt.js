const quoteTabs = document.querySelectorAll(".quote-tab-div");
const qouteContainer = document.querySelector(".quote-tab");
const qouteContent = document.querySelectorAll(".quote-content");
const nav = document.querySelector(".nav-links");

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
