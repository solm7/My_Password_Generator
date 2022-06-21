// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Entry Invalid! Please try again.");
  } else {
    var lowerCase = confirm("Do you want Lower Case?");
    var upperCase = confirm("Do you want Upper Case?");
    var number = confirm("Do you want Numbers?");
    var specialChar = confirm("Do you want Special Characters?");
  }
  function pickLetter(shouldUpperCase) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var myLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (shouldUpperCase) {
      return myLetter.toUpperCase();
    } else {
      return myLetter;
    }


  }
  console.log(pickLetter());
  console.log(pickLetter(true));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
