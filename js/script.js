// All Targets
var textarea = document.querySelector("textarea");
var toShowLeftWords = document.querySelector(".leftwords");
var toShowTotalCharacters = document.querySelector(".totalCharacters");

// All initial default values
var allowedWords = 200;
var totalWritenWords = 0;
var totalLeftWords = allowedWords - totalWritenWords;

// Initial default value to show in total writen characters
toShowTotalCharacters.innerHTML = 0;

// Initial default value to show in total left characters
toShowLeftWords.innerHTML = totalLeftWords;

// function to chnage left words value on every key up event
function countwords() {
  totalWritenWords = textarea.value.length;
  totalLeftWords = allowedWords - totalWritenWords;
  toShowLeftWords.innerHTML = totalLeftWords;
  toShowTotalCharacters.innerHTML = textarea.value.length;
}
