// Assignment Code
var generateBtn = document.querySelector("#generate");

// character library
var charLibrary = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '-', '=', '<', '>', '?', '.'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
}

// let passwordLength = 0;
var finalPass = [];
let numbers = false;
let specialChar = false;
let upperCase = false;
let lowerCase = false;
var passwordLength = 0;

function generatePassword() {
  //if true then use all in password
  promptUser();
  return generateOutcome();
}
//declaring the function
function promptUser() {
   passwordLength = prompt("What do you want your password length to be? choose between 8 and 128 characters.");
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 and no greater than 128.")
    return;
  }

  // loops through the questions
  do {
    numb = window.confirm("Do you want your password to contain numbers? yes, or no.");
    if (numb ) {
      alert("Numbers will be included in your password.")
    } else {alert("Numbers will NOT be included in your password.")}

    specialChar = window.confirm("Do you want your password to contain special characters? yes, or no.")
    if (specialChar ) {
      alert("Special Characters will be included in your password.")
    } else {alert("Special characters will NOT be included in your password.")}

    upperCase = window.confirm("Do you want your password to contain upper case letters? yes, or no.")
    if (upperCase ) {
      alert("Upper case letters will be included in your password.")
    } else {alert("Upper case letters will NOT be included in your password.")}

    lowerCase = window.confirm("Do you want your password to contain lower case letters? yes, or no.")
    if (lowerCase ) {
      alert("Lower case letters will be included in your password.")
    } else {alert("Lower case letters will NOT be included in your password.")}

    if (!numb && !specialChar && !upperCase && !lowerCase) {
      window.alert("You need to select atleast one option!")
    }
  } while (
    !numb && !specialChar && !upperCase && !lowerCase
  )
}
function generateOutcome() {
  result = [];
  for (let i = 0; result.length < passwordLength; i++) {
    
    if  (numb && result.length < passwordLength) {
      result.push(charLibrary.numbers[Math.floor(Math.random() * charLibrary.numbers.length)]);
    }
    
    if (specialChar && result.length < passwordLength) {
      result.push(charLibrary.special[Math.floor(Math.random() * charLibrary.special.length)]);
    }

    if (upperCase && result.length < passwordLength) {
      result.push(charLibrary.upperCase[Math.floor(Math.random() * charLibrary.upperCase.length)]);
    }

    if (lowerCase && result.length < passwordLength) {
      result.push(charLibrary.lowerCase[Math.floor(Math.random() * charLibrary.lowerCase.length)]);
    }
  }
  return result;
 }
// writes password to the password display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}
// Add event listener to generate button
//this calls the function
generateBtn.addEventListener("click", writePassword);