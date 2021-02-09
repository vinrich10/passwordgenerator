document.body.innerHTML = "password generate";

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

var generateBtn = document.querySelector("#generate");

//getRandom function
function getRandom(){


}

function generatePassword(){
    var possibleCharacters = [];
    var length = prompt("How many characters should your password be? Select between 8-128.");
    if(length < 8 || length > 128) {
        alert("You chose" + length + "!");
    }
    console.log(length);
    var hasLowercase = confirm("Would you like lowercases?");
    console.log(lowercase);
    var hasUppercase = confirm("Would you like uppercases?");
    var hasNumeric = confirm("Would you like numbers?");
    var hasSymbols = confirm("Would you like symbols?")
    if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSymbols === false) {
        alert("Must choose at least one option");
    }
    if(hasLowercase === true) {
        possibleCharacters = possibleCharacters.concat(lowercase);
    }
    if(hasUppercase === true) {
        possibleCharacters = possibleCharacters.concat(uppercase);
    }
    if(hasNumeric === true) {
        possibleCharacters = possibleCharacters.concat(numeric);
    }
    if(hasSymbols === true) {
        possibleCharacters = possibleCharacters.concat(symbols);
    }

    //finish if conditions
    console.log(possibleCharacters);

    // random function to get random chars out of possible array for your password

}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
