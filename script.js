// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "^", "&", "*", "-", "=", "?", ".", "_"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var passwordLength = prompt("What do you want your password length to be? choose between 8 and 128");
 if (passwordLength >= 8 && passwordLength <= 128) {
   var askNumbers = window.confirm("Do you want your password to contain numbers?", "yes, or no.")
 
    if (askNumbers ) {
      alert("Numbers will be included in your password.")
    } else {alert("Numbers will not be included in your password.")}

    if (askSpecial ) {
      alert("Special characters will be included in your password.")
    } else {alert("Special characters will not be included in your password.")}

    if (askUpperCase ) {
      alert("Upper case characters will be included in your password.")
    } else {alert("Upper case characters will not be included in your password.")}

    if (askLowerCase ) {
      alert("Lower case characters will be included in your password.")
    } else {alert("Lower case characters will not be included in your password.")}

  } else {alert("You must choose between 8 and 128 charecters");}
   
  
  return "generated password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);