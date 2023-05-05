// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to add a character to the password

function addCharacter(password, characters) {
  password += characters[Math.floor(Math.random() * characters.length)];
  return password;
}

// function to check the generated password length to see if it matches the user's specified length before adding a new character

function checkLength(password, size) {
  return password.length === size;
}

function generatePassword() {
  // Declaration of acceptable character variables

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var specialChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";

  // logic for initial prompt asking for number of characters for password

  var numChars = prompt('How many characters do you want your password to be? (Must be a whole number length between 8-128 characters long)');

  // if prompt is cancelled, return empty string. Otherwise attempt to convert input to a number.

  if(numChars === null) {
    return "";
  } else {
    numChars = Number(numChars);
  }

  // check for invalid inputs i.e. words (Number(word) will return NaN), decimals (not a whole number), or numbers outside of range. If invalid, alert and return empty string.
  // if valid input, generate password based on criteria to be selected.


  if(!numChars || Math.floor(numChars) != numChars || (numChars < 8 || numChars > 128)) {
    alert('Invalid input\nPlease try again!');
    return "";
  } else {

    var wantLowercase = confirm("Include lowercase letters?");
    var wantUppercase = confirm("Include uppercase letters?");
    var wantNumerics = confirm("Include numbers?");
    var wantSpecialChars = confirm("Include special characters?");

    var password = "";

    // loop to build password based on selected criteria. Password length will be checked at each stage before adding a new character.
    // Once the password lengths equals the required length, break the loop and return the password.
    // If no criteria is select, break and return an empty string.
  
    while(password.length < numChars) {

      if(checkLength(password, numChars)) {
        break;
      } else {
        wantLowercase ? password = addCharacter(password, lowercase) : password;
      }
  
      if(checkLength(password, numChars)) {
        break;
      } else {
        wantUppercase ? password = addCharacter(password, uppercase) : password;
      }
  
      if(checkLength(password, numChars)) {
        break;
      } else {
        wantNumerics ? password = addCharacter(password, numbers) : password;
      }
  
      if(checkLength(password, numChars)) {
        break;
      } else {
        wantSpecialChars ? password = addCharacter(password, specialChars) : password;
      }

      if(!wantLowercase && !wantUppercase && !wantSpecialChars && !wantNumerics) {
        alert('Please select at least one criteria to generate password.');
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