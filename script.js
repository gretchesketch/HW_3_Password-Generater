// Assignment Code
var generateBtn = document.querySelector("#generate");

//password library
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "^", "&", "*", "-", "=", "?", ".", "_"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numOfCases = 0;

//Declare generatepassword and prompt user for criteria
function generatePassword() {
  var passwordLength = prompt("What do you want your password length to be? choose between 8 and 128 characters");
 if (passwordLength >= 8 && passwordLength <= 128) {
   
  var askNumbers = window.confirm("Do you want your password to contain numbers?", "yes, or no.");
    if (askNumbers ) {
      alert("Numbers will be included in your password.") 
      numOfCases += 1;
    } else {alert("Numbers will not be included in your password.")}


    var askSpecial = window.confirm("Do you want your password to contain special characters?", "yes, or no.");
    if (askSpecial ) {
      alert("Special characters will be included in your password.")
            numOfCases += 1;
    } else {alert("Special characters will not be included in your password.")}


    var askUpperCase = window.confirm("Do you want your password to contain upper case letters?", "yes, or no.");
    if (askUpperCase ) {
      alert("Upper case characters will be included in your password.")
            numOfCases += 1;
    } else {alert("Upper case characters will not be included in your password.")}

    var askLowerCase = window.confirm("Do you want your password to contain lower case letters?", "yes, or no.");
    if (askLowerCase ) {
      alert("Lower case characters will be included in your password.")
            numOfCases += 1;
    } else {alert("Lower case characters will not be included in your password.")}

  } else {alert("You must choose between 8 and 128 charecters");}
  
  var seenNumbers = false;
  var seenSpecial = false;
  var seenUpper = false;
  var seenLower = false;
  
  
  var ret_password = "";
  var casesSeen = 0;

  for (i = 0;  i < passwordLength; i++) {
      
      if (askNumbers == true && seenNumbers == false) {
          //return Math.floor(Math.random() * max); 
          var random_index = Math.floor(Math.random() * numbers.length);
      ret_password = ret_password + numbers[random_index];    
seenNumbers = true;
casesSeen += 1;

      } else if (askSpecial == true && seenSpecial == false) {
          var random_index = Math.floor(Math.random() * special.length);
      ret_password = ret_password + special[random_index];    
seenSpecial = true;
casesSeen += 1;
          } else if (askUpperCase == true && seenUpper == false) {
              var random_index = Math.floor(Math.random() * upperCase.length);
         ret_password = ret_password + upperCase[random_index];    
seenUpper = true;
casesSeen += 1;
              } else if (askLowerCase == True && seenLower == false) {
              var random_index = Math.floor(Math.random() * lowerCase.length);
         ret_password = ret_password + lowerCase[random_index];    
seenLower = true;
casesSeen += 1;
              } 
              
              
              if (casesSeen == numOfCases) {
                  
                  seenNumbers = false;
                  seenSpecial = false;
                  seenUpper = false;
                  seenLower = false;
                  
                  }
              
      
  }
   
  
  return ret_password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);