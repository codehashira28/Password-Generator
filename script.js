// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  // Declaration of acceptable character variables

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var specialChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";

  // logic for initial prompt asking for number of characters for password

  var numChars = prompt('How many characters do you want your password to be? (Must be between 8-128 characters long)');

  // conditions to handle unexpected inputs (strings, decimals, and numbers outside the range)

  while(((numChars < 8 || numChars > 128) && numChars != null) || (Math.floor(numChars) != numChars && numChars != null) || (isNaN(parseInt(numChars))) && numChars != null) { 
    numChars = prompt('Please enter a whole number length between 8 and 128 characters.');
  }

  // if no valid length is entered and prompt is cancelled, return an empty string,
  // otherwise generate password based on selected credentials

  if(numChars === null) {
    return "";
  } else {

    var wantLowercase = confirm("Include lowercase letters?");
    var wantUppercase = confirm("Include uppercase letters?");
    var wantNumerics = confirm("Include numbers?");
    var wantSpecialChars = confirm("Include special characters?");

    var password = "";
  
    while(password.length < numChars) {
      if(wantLowercase) {
        if(password.length == numChars) {
          break;
        }
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
      }

      if(wantUppercase) {
        if(password.length == numChars) {
          break;
        }
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
      }

      if(wantNumerics) {
        if(password.length == numChars) {
          break;
        }
        password += numbers[Math.floor(Math.random() * numbers.length)];
      }

      if(wantSpecialChars) {
        if(password.length == numChars) {
          break;
        }
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
      }

      if(!wantLowercase && !wantUppercase && !wantSpecialChars && !wantNumerics) {
        break;
      }
    }
      return password;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);