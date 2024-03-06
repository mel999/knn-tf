"use strict";

/*var commonjs = require("./commonjs");
require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");
const { shuffle } = require("lodash");*/
document.title = "Mel's tech skills";

const project1Details = document.querySelector(".expandDetails");
const earningPoints = document.querySelector(".earningPoints");
const earningsEl1 = document.getElementById("earningsY1");
const earningsEl2 = document.getElementById("earningsY2");
const formElem = document.getElementById("form1");
let e1 = document.getElementById("e1");
let e2 = document.getElementById("e2");

formElem.addEventListener("submit", function (e) {
  e1.textContent = earningsEl1.value;
  e2.textContent = earningsEl2.value;
  e.preventDefault();
});

earningPoints.disabled = true;
function myFunction3() {
  earningsEl1 && earningsEl2
    ? (earningPoints.disabled = false)
    : (earningPoints.disabled = true);
}

function myFunction2() {
  //condition ? exprIfTrue : exprIfFalse
  e0.classList.remove("gg");
  e1.classList.remove("gg");
  e2.classList.remove("gg");
  e4.classList.remove("gg");
}

function myFunction1() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*
  generate.innerHTML;
  generate.textContent = "100 and 200";
  generate.style.color = "pink";
  console.log("i am clicking");
  console.log(generate.textContent);
  */
