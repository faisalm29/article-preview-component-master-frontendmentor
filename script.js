// jshint esversion:6

const shareBtn = document.querySelector(".share-btn");
const tooltip = document.querySelector(".tooltip-content");
const shareIcon = document.querySelector(".share-icon");

const mobileShareBtn = document.getElementById("mobile-share-button");

shareBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Share button clicked");
  tooltip.classList.toggle("open");
  shareBtn.classList.toggle("active");
  shareIcon.classList.toggle("filter-white");
});

mobileShareBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tooltip.classList.remove("open");
  shareBtn.classList.remove("active");
  shareIcon.classList.remove("filter-white");
});
