// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompt for the length of the password
  var characters = prompt("How many characters would you like your password to contain?")
  // Use if/else to determine if the answer meets the criteria
  var confirmSpecialCharacter = confirm("Click Ok to confirm including special characters.")
  var confirmNumericCharacter = confirm("Click Ok to confirm including numeric characters.")
  var confirmLowercaseCharacter = confirm("Click Ok to confirm including lowercase characters.")
  var confirmUppercaseCharacter = confirm("Click Ok to confirm including uppercase characters.")

  if (characters < 8 || characters > 128) {
    alert("Your password must have at least 8 and no more than 128 characters")

  } else if (confirmSpecialCharacter === false || confirmNumericCharacter === false || confirmLowercaseCharacter === false || confirmUppercaseCharacter === false) {
    alert("You must select at least one character type")

  } else {
    // var randomPassword = generatePassword();
    var randomPassword = "";
    var passwordText = document.querySelector("#password");
    // Loop to get random password
    for (var i = 0; i < characters; i++) {
      randomPassword = randomPassword + generateRandomCharacter(confirmSpecialCharacter, confirmNumericCharacter, confirmLowercaseCharacter, confirmUppercaseCharacter);
    }
    passwordText.value = randomPassword;
  }

}
function generateRandomCharacter(confirmSpecialCharacter, confirmNumericCharacter, confirmLowercaseCharacter, confirmUppercaseCharacter) {
  // Arrays
  var specialCharacter = ["!", "'", "#", "$", "%", "&", ",", "*", "(", ")", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "{", "}", "[", "]", "_", "~"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var passwordRandomCharacter = [];

  // If the user confirmed, add character from the array to the password
  if (confirmSpecialCharacter) {
    passwordRandomCharacter = passwordRandomCharacter.concat(specialCharacter);
  }
  if (confirmNumericCharacter) {
    passwordRandomCharacter = passwordRandomCharacter.concat(number);
  }
  if (confirmLowercaseCharacter) {
    passwordRandomCharacter = passwordRandomCharacter.concat(lowercaseCharacter);
  }
  if (confirmUppercaseCharacter) {
    passwordRandomCharacter = passwordRandomCharacter.concat(uppercaseCharacter);
  }
  // Get a random character
  var randomNumber = Math.random();
  var randomValue = passwordRandomCharacter.length * randomNumber;
  var randomIndex = Math.floor(randomValue);
  var randomCharacter = passwordRandomCharacter[randomIndex];
  return randomCharacter;

}



