const quoteTabs = document.querySelectorAll(".quote-tab-div");
const qouteContainer = document.querySelector(".quote-tab");
const qouteContent = document.querySelectorAll(".quote-content");

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
