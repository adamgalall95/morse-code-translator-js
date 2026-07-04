import loadMorseCode from "./js/load-morse.js";
import translate from "./js/translate-functions.js";

const translatorForm = document.getElementById("translator-form");
const inputText = document.getElementById("input-text");

const translationBox = document.getElementById("output-text");

const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");

loadMorseCode("./morse.json").then((morse) => {
  translatorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = inputText.value;
    const buttonId = event.submitter.id;

    const transArr = translate(text, morse, buttonId);

    translationBox.textContent = transArr;
  });

  clearBtn.addEventListener("click", () => {
    location.reload();
  });
});
