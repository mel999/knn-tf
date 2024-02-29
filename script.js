"use strict";

const project1Details = document.querySelector(".expandDetails");
const linkShow = document.querySelector(".linkShow");

const init = function () {
  project1Details.classList.add("hidden");
};
init();

linkShow.addEventListener("click", function () {
  project1Details.classList.remove("hidden");
});
