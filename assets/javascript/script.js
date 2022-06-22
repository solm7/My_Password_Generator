// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  var userChoices = [];
  var myPassword = [];
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Entry Invalid! Please try again.");
  } else {
    var lowerCase = confirm("Do you want Lower Case?");
    var upperCase = confirm("Do you want Upper Case?");
    var number = confirm("Do you want Numbers?");
    var specialChar = confirm("Do you want Special Characters?");
  }
  if (criteriaCheck()) {
    for (var i = 0; i < passwordLength; i++) {
      var currentChoice = userChoices[Math.floor(Math.random() * userChoices.length)];
      if (currentChoice === "lower") {
        myPassword.push(pickLetter());
      }
      if (currentChoice === "upper") {
        myPassword.push(pickLetter(true));
      }
      if (currentChoice === "number") {
        myPassword.push(pickNumber());
      }
      if (currentChoice === "specialChar") {
        myPassword.push(pickSpecial());
      }
    }
  } else {
    alert("Please Choose at least 1 Criteria and try again!");
  }
  function pickLetter(x) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var myLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (x) {
      return myLetter.toUpperCase();
    } else {
      return myLetter;
    }
  }
  function pickNumber() {
    var myNumber = Math.floor(Math.random() * 10);
    return myNumber;
  }
  function pickSpecial() {
    var specialCharacters = ["\\", "!", '\"', "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var mySpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    return mySpecial;
  }
  function criteriaCheck() {
    var wasCriteriaSelected;
    if (lowerCase) {
      wasCriteriaSelected = true;
      userChoices.push("lower");
    }
    else if (upperCase) {
      wasCriteriaSelected = true;
      userChoices.push("upper");
    }
    else if (number) {
      wasCriteriaSelected = true;
      userChoices.push("number");
    }
    else if (specialChar) {
      wasCriteriaSelected = true;
      userChoices.push("specialChar");
    }
    return wasCriteriaSelected;
  }
  return myPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
