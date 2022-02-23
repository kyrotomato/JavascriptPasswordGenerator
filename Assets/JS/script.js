// Assignment code here
//array
var lowerChars = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var upperChars = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
var symbols = [ "!","@","#","$","%","^","&","*","(",")","-","_","=","+","'",";",":","<",",",">",".","/","?","*" ];
var nums = [ "1","2","3","4","5","6","7","8","9","0" ];
var charLength = 0;
var charpool = [];


function promptAnswers(){
  //length //parse int is to turn the string into a solid number
  charLength = parseInt(prompt("Please choose a length between 8 - 128!"));
  if (Number.isNaN(charLength)){
  alert("Please provide a valid number");
  }
  if (charLength > 128){
    alert("Pick a length lower than 128");
    return false;
  }
  if (charLength < 8){
    alert("Pick a length larger than 8");
    return false;
  }
  //lowercase?
  if (confirm("Do you want to use lowercase letters?")) {
  //add chars to char pool
    charpool = charpool.concat(lowerChars);
    }
  //uppercase?
  if (confirm("Do you want to use capital letters?")) {
    //add chars to char pool
      charpool = charpool.concat(upperChars);
  }
      if (confirm("Do you want to use symbols?")) {
    //add chars to char pool
      charpool = charpool.concat(symbols);
  }
      if (confirm("Do you want to use numbers?")){
    //add chars to char pool
      charpool = charpool.concat(nums);
      return true
  }
}


function generatePassword(){

//generate a random number using math function
var password = "";
for(var i = 0; i < charLength; i++) {
  var locIndex = Math.floor(Math.random() * charpool.length);
  password = password + charpool[locIndex];
  }
  return password;
}
//generate from the charpool array

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//return results string


// Write password to the #password input
function writePassword() {
  var complPrompts = promptAnswers();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (complPrompts) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


