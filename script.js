"use strict";

var commonjs = require("./commonjs");

require("@tensorflow/tfjs-node");

//const { tf } = require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");

//const { tf } = require("@tensorflow/tfjs");

const loadCSV = require("./load-csv");
const { shuffle } = require("lodash");

const project1Details = document.querySelector(".expandDetails");
const generate = document.querySelector(".generate");
const earningsEl1 = document.getElementById("earningsY2");
const earningsEl2 = document.getElementById("earningsY2");

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//console.log(document.querySelector(".message").textContent);
//console.log("hello");

/*
const init = function () {
  project1Details.classList.add("hidden");
};
init();

linkShow.addEventListener("click", function () {
  project1Details.classList.remove("hidden");
});

*/
