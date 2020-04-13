// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNumCharacters = prompt(
  "How many characters do you want your password to contain?"
);

if (userNumCharacters < 8) {
  alert("Password length must be at least 8 characters.");
} else if (userNumCharacters > 128) {
  alert("Password must be less than 129 characters.");
} else if (userNumCharacters !== numericCharacters) {
  alert("Please enter a valid number.");
} else {
  confirm("Click OK to confirm including special characters.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (var i = 0; i < 10; i++) {
  var numericCharacters = Math.floor(Math.random() * 10);
}
//var numericCharacters = Math.floor(Math.random() * 10) + 1;
//Math.floor rounds down
//math functions

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
