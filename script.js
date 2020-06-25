// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//This sets the length of the password
var numberChar = parseInt(prompt("Choose password length (must be between 8 and 128"));

//These for confirm functions determine which characters the password can have.
var lowerCase = confirm("Do you want lowercase letters?");
var upperCase = confirm("Do you want uppercase letters?");
var numeric = confirm("Do you want numbers?");
var specialChar = confirm("Do you want special characters?");

//this is a string of ALL the possible characters that could be in the password (includes lowercase letters, uppercase letters, numbers, and special characters).
var charArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//this string will change depending on what type of characters the user chooses.
var passwordArray = ""

//This logic basically changes the passwordArray (string) depending on which options are chosen using the substring function to pull different sections of the charArray string.

  if (lowerCase) {
    var passwordArray = charArray.substring(0,26);
  }
  if (upperCase) {
    var passwordArray = (passwordArray + charArray.substring(26,52));
  }
  if (numeric) {
    var passwordArray = (passwordArray + charArray.substring(52,62));
  }
  if (specialChar) {
    var passwordArray = (passwordArray + charArray.substring(62,charArray.length));
  }

  if (numberChar < 8 || numberChar > 128) {
    alert("Must be between 8 and 128 characters!");
  }
  else if (numberChar >= 8 || numberChar <= 128) {

      //this array is the generated password (as an array) using the characters that the user chooses.

      var genPassword = [];

      //This for loop creates a random number and sets the genPassword array to have as many items as there are characters chosen for the password. It then sets each index of this array to a different random character from the passwordArray string.
      for (var i = 0; i < numberChar; i++){
        var randomNum = Math.floor(Math.random() * passwordArray.length);
        genPassword.push(i);
        genPassword[i] = passwordArray[randomNum];

        //this variable turns out to be the final generated password. The join function converts the genPassword array into a string separated by nothing.
        var finalPassword = genPassword.join('');
      }

      return finalPassword;

  }
  else {
    alert("Must enter a number!");
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



