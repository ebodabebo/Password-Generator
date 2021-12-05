// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("How long would you like your password?")
  var lowerCase = confirm("Do you want lower case letter?")
  var upperCase = confirm("Do you want upper case letters?")
  var numbers = confirm("Do you want numbers?")
  var specialCharacters = confirm("Do you want special characters?")
  var passwordOptions="" 
  
  if (lowerCase === true){
    passwordOptions="abcdefghijklmnopqrstuvwxyz"
  }

  if (upperCase === true){
    passwordOptions+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numbers === true){
    passwordOptions+="0123456789"
  }

  if (specialCharacters === true){
    passwordOptions+="!@#$%^&*?~"
  }

  function stringGen(yourNumber){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?~"

  }

  console.log(passwordOptions)




  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);