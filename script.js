// Assignment Code
var generateBtn = document.querySelector("#generate");

//Validate the user input
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each chosen character type
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

//Function to prompt user for password options
function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = getPasswordOptions(userNumCharacters);
  if (passwordValid) {
    var hasSpecialCharacters = confirm(
      "Click OK to confirm special characters."
    );
    var hasNumbers = confirm("Click OK to confirm adding special characters.");
    var hasLowerCase = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var hasUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
    console.log(hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase);
  }
  if (
    [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  ) {
    console.log(getRandomElementFromArray(specialCharacters));
    console.log(getRandomElementFromArray(numericCharacters));
    console.log(getRandomElementFromArray(lowerCasedCharacters));
    console.log(getRandomElementFromArray(upperCasedCharacters));
  }
}

//Store user input of what kinds of characters they want in their password based on boolean values
// var userInput = {
//   symbol: getRandomSymbol,
//   number: getRandomNumber,
//   lower: getRandomLower,
//   upper: getRandomUpper,
// };
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
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

// var numericCharacters = Math.floor(Math.random() * 10) + 1;

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
