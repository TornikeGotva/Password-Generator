"use strict";

const btnGenerate = document.getElementById("button");
const inputField = document.querySelector(".input_field");
const inputForm = document.getElementById("form");
const btnRefresh = document.querySelector(".button-refresh");
const btnClipboard = document.querySelector(".clipboard_icon");

const arrayLowerCase = [
  "q",
  "w",
  "e",
  "r",
  "g",
  "i",
  "p",
  "h",
  "k",
  "x",
  "m",
  "j",
];

const arrayUpperCase = [
  "Q",
  "W",
  "E",
  "R",
  "G",
  "I",
  "P",
  "H",
  "K",
  "X",
  "M",
  "J",
];
const arraySymbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "}",
  "{",
  ">",
  "?",
];
const arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const generateLowerCase = function () {
  const roll = Math.floor(Math.random() * arrayLowerCase.length);
  let randomArray = arrayLowerCase[roll];

  inputField.value += randomArray;
};

const generateUpperCase = function () {
  const roll = Math.floor(Math.random() * arrayUpperCase.length);
  let randomArray = arrayUpperCase[roll];
  inputField.value += randomArray;
};

const generateSymbols = function () {
  const roll = Math.floor(Math.random() * arraySymbols.length);
  let randomArray = arraySymbols[roll];
  inputField.value += randomArray;
};

const generateNumbers = function () {
  const roll = Math.floor(Math.random() * arrayNumbers.length);
  let randomArray = arrayNumbers[roll];
  inputField.value += randomArray;
};

function generalFunction() {
  generateLowerCase(arrayLowerCase);
  generateUpperCase(arrayUpperCase);
  generateSymbols(arraySymbols);
  generateNumbers(arrayNumbers);
  generateLowerCase(arrayLowerCase);
  generateUpperCase(arrayUpperCase);
  generateSymbols(arraySymbols);
  generateNumbers(arrayNumbers);
}

function innit() {
  inputField.value = "";
}

const copyPassword = function () {
  let passwordCopy = navigator.clipboard.writeText(inputField.value);
  let clipBoardIcon = document.querySelector(".clipboard_icon");

  alert(inputField.value + " Text is copied");
};

btnClipboard.addEventListener("click", copyPassword);
btnRefresh.addEventListener("click", innit);
btnGenerate.addEventListener("click", generalFunction);
