// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  // Declaration of acceptable character variables

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var specialChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";

  // logic for initial prompt asking for number of characters for password

  var numChars = prompt('Please enter a password length between 8 and 128 characters.');
  while(numChars < 8 || numChars > 128) {
    numChars = prompt('Please enter a password length between 8 and 128 characters.');
  }

  var random = Math.floor(Math.random() * lowercase.length);

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);