// Assignment Code
var generateBtn = document.querySelector("#generate");
// you need all characters in their own array
var uppercase = ["A","B"]
var lowercase = ["a","b"]
var numeric = ["0","1"]
var special = ["?","!"]

function passwordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to be? (between 8-128)"));
  var hasUpper = confirm("Would you like Uppercase characters?");
  var hasLower = confirm("Would you like Lowercase characters?");
  var hasNumbers = confirm("Would you like Numaric characters?");
  var HasSpecial = confirm("Would you like Special characters?");

  var options = {
    length,
    hasLower,
    hasUpper,
    HasSpecial,
    hasNumbers
  }

  return options;
}

function generatePassword(){
var options = passwordOptions();
var results = [];
var possible= [];
// you need to create a poool with all the chracters given based on user option.
for (let i = 0; < passwordLength; )


return results.join("");
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
