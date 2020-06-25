// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var numberChar = parseInt(prompt("Choose password length"));
var lowerCase = confirm("Do you want lowercase letters?");
var upperCase = confirm("Do you want uppercase letters?");
var numeric = confirm("Do you want numbers?");
var specialChar = confirm("Do you want special characters?");
//this is a string of ALL the possible characters that could be in the password.
var charArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//this string will change depending on what type of characters the user chooses.
var passwordArray = ""
//this string is the generated password using the characters that the user chooses.
var genPassword = ""

  if (lowerCase) {
    var passwordArray = charArray.substring(0,26);
    //console.log(passwordArray);
  }
  if (upperCase) {
    var passwordArray = (passwordArray + charArray.substring(26,52));
    //console.log(passwordArray);
  }
  if (numeric) {
    var passwordArray = (passwordArray + charArray.substring(52,62));
    //console.log(passwordArray);
  }
  if (specialChar) {
    var passwordArray = (passwordArray + charArray.substring(62,charArray.length));
    //console.log(passwordArray);
  }
  if (numberChar < 8 || numberChar > 128) {
    alert("Must be between 8 and 128 characters!");
  }
  else {
      for (var i = 0; i < numberChar; i++){
        var randomNum = Math.floor(Math.random() * passwordArray.length) + 1;
        genPassword.length = numberChar;
        for (var j = 0; j < genPassword.length; j++){
          genPassword[i] = genPassword + passwordArray[randomNum];
        }
       // genPassword = genPassword + passwordArray[randomNum];
        //genPassword[2] = genPassword + passwordArray[randomNum];
        
      
        return genPassword;
    }
    
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


