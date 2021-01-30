//PassWord Generator//
// Assignment Code

//set boolean values

// let result, yes = true, no = false
// console.log(yes)

// result = yes && yes
// console.log('Are both true? ' + result)

// result = yes && no
// console.log('Are both still true? ' + result)

// result = yes || no
// console.log('Are either true? ' + result)

// result = no || no
// console.log('Are either still true? ' + result)

// console.log('Original value ' + yes)
// yes = !yes
// console.log( 'Toggled value: ' + yes)

//alert with instructions
//eventually have this ALL happen when user clicks password start button
window.alert('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to inclue and cancel means not to include')
console.log('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to include and cancel means not to include ')



//alert for choose length
var box1 = window.prompt('Pick amount of characters you would like in your password from 8-128.');
console.log('Pick amount of characters you would like in your password from 8-128. ')
console.log(box1)
//how do I get value of this back?

//prompt for include number yes or no
var box2 = window.confirm('Do you want to include a number?');
console.log('Do you want to include a number?')
console.log(box2)

//prompt for include lowercase yes or no
var box3 = window.confirm('Do you want to include a lowercase letter?');
console.log('Do you want to include a lowercase letter?')
console.log(box3)

//prompt for include uppercase yes or no
var box4 = window.confirm('Do you want to include an uppercase letter?');
console.log('Do you want to include an uppercase letter?')
console.log(box4)

//prompt for include symbol
var included = new Array();
var box5 = window.confirm('Do you want to include a special character?');
console.log('Do you want to include a special character?')
console.log(box5)



// if yes value then push to new array
//box1 length??? 
// var box3 = choiceLowercase; too early will make values not === anymore
// console.log(box3)
//need math probably first?

// var lowercase = ["a", "b", "c", "d" , "e", "f" , "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// var randomNumber2 = Math.floor(Math.random() * 26)
// console.log(lowercase[randomNumber2])
// var choiceLowercase = (lowercase[randomNumber2]);
// console.log(choiceLowercase)


//length of password

var numberofchars = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];
console.log(numberofchars)
console.log(numberofchars.length)
var lengthofpassword = numberofchars.length;
console.log(lengthofpassword) 
console.log(box1)

lengthofpassword = box1;
console.log(lengthofpassword)

if (box2 === true) {
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var randomNumber4 = Math.floor(Math.random() * 10)
  console.log(number[randomNumber4])
  var choiceNumber = number[randomNumber4];
  console.log(choiceNumber)
  box2 = choiceNumber
  included.push("choiceNumber")
};

console.log(included)

if (box3 === true) {

  var lowercase = ["a", "b", "c", "d" , "e", "f" , "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var randomNumber2 = Math.floor(Math.random() * 26)
  console.log(lowercase[randomNumber2])
  var choiceLowercase = (lowercase[randomNumber2]);
  console.log(choiceLowercase)
  box3 = choiceLowercase
  included.push("choiceLowercase")
  console.log(choiceLowercase)
  console.log(included)
};


if (box4 === true) {

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ,"L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomNumber3 = Math.floor(Math.random() * 26)
  console.log(uppercase[randomNumber3])
  var choiceUppercase = (uppercase[randomNumber3]);
  box4 = choiceUppercase
  included.push("choiceUppercase")
  console.log(choiceUppercase)
};

if (box5 === true) {
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
  console.log(symbols[0])
  // //generate a random number between 0 and 7
  var randomNumber1 = Math.floor(Math.random() * 8);
  //generates random symbol
  console.log(symbols[randomNumber1])
  console.log(randomNumber1)
  var choiceSymbols = (symbols[randomNumber1]);
  console.log(choiceSymbols)
  box5 = choiceSymbols
  included.push("choiceSymbols")
};


console.log(choiceNumber)



console.log(included) 
console.log(choiceLowercase)


//bringing value to box2, box3, box4, box5
//setting box2, box3, box4, box5 to the actual value of question 
// var box3 = choiceLowercase; figuring out where to place this
// console.log(box3)

console.log(included)













var lowercase = ["a", "b", "c", "d" , "e", "f" , "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var randomNumber2 = Math.floor(Math.random() * 26)
console.log(lowercase[randomNumber2])
var choiceLowercase = (lowercase[randomNumber2]);
console.log(choiceLowercase)




// console.log(yes)
// console.log(no)
// console.log(true)
// console.log(false)


// console.log(box3)
// console.log(no)
// console.log(yes)



//if box3 = 

//if all values are true then 
//make loop to go through array once collecting values or variables 
//to concatenate into the new password


// loop alert message box to they must include...
//retarts at length prompt



//display in browser




// number of characters the user chooses from 8-128 eventually


var numberofchars = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];
console.log(numberofchars)
console.log(numberofchars.length)
var lengthofpassword = numberofchars.length;
console.log(lengthofpassword)


//  Number (User chooses to include number)


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomNumber4 = Math.floor(Math.random() * 10)
console.log(number[randomNumber4])
var choiceNumber = number[randomNumber4];
console.log(choiceNumber)



// User chooses uppercase


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ,"L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber3 = Math.floor(Math.random() * 26)
console.log(uppercase[randomNumber3])
var choiceUppercase = (uppercase[randomNumber3]);




//User chooses lowercase


var lowercase = ["a", "b", "c", "d" , "e", "f" , "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var randomNumber2 = Math.floor(Math.random() * 26)
console.log(lowercase[randomNumber2])
var choiceLowercase = (lowercase[randomNumber2]);
console.log(choiceLowercase)


// // User chooses Symbol

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
console.log(symbols[0])
// //generate a random number between 0 and 7
var randomNumber1 = Math.floor(Math.random() * 8);
//generates random symbol
console.log(symbols[randomNumber1])
console.log(randomNumber1)
var choiceSymbols = (symbols[randomNumber1]);
console.log(choiceSymbols)

  















//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);





//WHEN I click the button to generate a password

//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria

//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt

//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered

//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page//

