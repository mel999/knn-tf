"use strict";

const project1Details = document.querySelector(".expandDetails");
const generate = document.querySelector(".generate");
//from project1:     <input type="submit" value="Submit" class="linkShow" />
const earningsEl = document.getElementById("earnings");
earningsEl.textContent = "input";

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*
const init = function () {
  project1Details.classList.add("hidden");
};
init();

linkShow.addEventListener("click", function () {
  project1Details.classList.remove("hidden");
});

*/
