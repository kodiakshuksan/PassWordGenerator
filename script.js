//PassWord Generator//

console.log("heelo")

//alerts with instructions
// window.alert('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to inclue and cancel means not to include')
// console.log('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to include and cancel means not to include ')



// //alert for choose PASSWORD LENGTH
// var numbersInPassword = window.prompt('Pick amount of characters you would like in your password from 8-128.');
// console.log('Pick amount of characters you would like in your password from 8-128. ')
// //how do I get value of this back?
// var lengthofPassword = console.log(numbersInPassword)

// //prompt for INCLUDE NUMBER yes or no
// var questionBox2 = window.confirm('Do you want to include a number?');
// console.log('Do you want to include a number?')
// var numberAnswer = console.log(questionBox2);

// //prompt for include LOWERCASE yes or no
// var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
// console.log('Do you want to include a lowercase letter?')
// var includeLowerCase = console.log(questionBox3);

// //prompt for include UPPERCASE yes or no
// var questionBox4 = window.confirm('Do you want to include an uppercase letter?');
// console.log('Do you want to include an uppercase letter?')
// var includeUpperCase = console.log(questionBox4);

// //prompt for include SYMBOL
// var included = new Array();
// var questionBox5 = window.confirm('Do you want to include a special character?');
// console.log('Do you want to include a special character?')
// var includeSymbol = console.log(questionBox5);



// //how the password is created and collected in the console after the prompts
// if (questionBox2 === true) {
//   var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   var randomNumber4 = Math.floor(Math.random() * 10)
//   console.log(number[randomNumber4])
//   var choiceNumber = number[randomNumber4];
//   console.log(choiceNumber)
//   box2 = choiceNumber
//   included.push(choiceNumber)
// };

// while (!numberAnswer) {
//   window.confirm('Must choose a Number!')
//   console.log('Must choose a Number');
//   console.log(numberAnswer)




// };
//   //prompt for include lowercase yes or no
//   var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
//   console.log('Do you want to include a lowercase letter?')
//   console.log(questionBox3)

//   //prompt for include uppercase yes or no
//   var box4 = window.confirm('Do you want to include an uppercase letter?');
//   console.log('Do you want to include an uppercase letter?')
//   console.log(questionBox4)
// };


// if (!box2) {
//   window.open('Must choose a Number!')
//   console.log('Must choose a Number!');
// };

// console.log(included)

// if (questionBox3 === true) {

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomNumber2 = Math.floor(Math.random() * 26)
console.log(lowercase[randomNumber2])
var choiceLowercase = (lowercase[randomNumber2]);
console.log(choiceLowercase)
included.push(choiceLowercase)
console.log(choiceLowercase)
console.log(included)


// if (questionBox4 === true) {

//   var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var randomNumber3 = Math.floor(Math.random() * 26)
//   console.log(uppercase[randomNumber3])
//   var choiceUppercase = (uppercase[randomNumber3]);
//   included.push(choiceUppercase)
//   console.log(choiceUppercase)
// };









// if (questionBox5 === true) {
//   var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
//   console.log(symbols[0])
//   // //generate a random number between 0 and 7
//   var randomNumber1 = Math.floor(Math.random() * 8);
//   //generates random symbol
//   console.log(symbols[randomNumber1])
//   console.log(randomNumber1)
//   var choiceSymbols = (symbols[randomNumber1]);
//   console.log(choiceSymbols)
//   included.push(choiceSymbols)
// };


// console.log(included.join(""))
// var passwordNoLength = (included.join(""));
// console.log(passwordNoLength)


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


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber3 = Math.floor(Math.random() * 26)
console.log(uppercase[randomNumber3])
var choiceUppercase = (uppercase[randomNumber3]);




//User chooses lowercase


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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

console.log(numbersInPassword)

console.log(passwordNoLength)//PASSWORD


//alert for choose length
// var lengthOfPassword = window.prompt('Pick amount of characters you would like in your password from 8-128.');
// console.log('Pick amount of characters you would like in your password from 8-128. ')
// //how do I get value of this back?
// console.log(lengthOfPassword)
// //prompt for include number yes or no
// var questionBox2 = window.confirm('Do you want to include a number?');
// console.log('Do you want to include a number?')
// console.log(questionBox2)

// while noNumberAlert {
//   !questionBox2
//   window.alert('Must choose a Number!')
// };

//window.confirm('Do you want to include a number?');


//prompt for include lowercase yes or no
// var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
// console.log('Do you want to include a lowercase letter?')
// console.log(QuesionBox3)

//prompt for include uppercase yes or no

// var chooseAgain = !box3;
// var tryAgain = !box4 == chooseAgain;
// var doOver = !box5 == tryAgain;


// doOver = (
//   window.prompt('Must include at least ONE lowercase letter, uppercase letter, or symbol ')
// );

//prompt for include symbol
// var included = new Array();
// var questionBox5 = window.confirm('Do you want to include a special character?');
// console.log('Do you want to include a special character?')
// console.log(questionBox5)



//alerts with instructions

// window.alert('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to inclue and cancel means not to include')
// console.log('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to include and cancel means not to include ')



//alert for choose length
// var lengthOfPassword = window.prompt('Pick amount of characters you would like in your password from 8-128.');
// console.log('Pick amount of characters you would like in your password from 8-128. ')
// //how do I get value of this back?
// console.log(lengthOfPassword)

// //prompt for include number yes or no
// var questionBox2 = window.confirm('Do you want to include a number?');
// console.log('Do you want to include a number?')
// var numberAnswer = console.log(questionBox2);

// //prompt for include lowercase yes or no
// var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
// console.log('Do you want to include a lowercase letter?')
// var includeLowerCase = console.log(questionBox3);

// //prompt for include uppercase yes or no
// var questionBox4 = window.confirm('Do you want to include an uppercase letter?');
// console.log('Do you want to include an uppercase letter?')
// var includeUpperCase = console.log(questionBox4);

// //prompt for include symbol
// var included = new Array();
// var questionBox5 = window.confirm('Do you want to include a special character?');
// console.log('Do you want to include a special character?')
// var includeSymbol = console.log(questionBox5);



// //how the password is created and collected in the console after the prompts
// if (questionBox2 === true) {
//   var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   var randomNumber4 = Math.floor(Math.random() * 10)
//   console.log(number[randomNumber4])
//   var choiceNumber = number[randomNumber4];
//   console.log(choiceNumber)
//   quesionBox2 = choiceNumber
//   included.push(choiceNumber)
// };

// while (!numberAnswer) {
//   window.confirm('Must choose a Number!')
//   console.log('Must choose a Number');
//   console.log(numberAnswer)
// };

//prompt for include lowercase yes or no
// var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
// console.log('Do you want to include a lowercase letter?')
// console.log(questionBox3)

//prompt for include uppercase yes or no
// var box4 = window.confirm('Do you want to include an uppercase letter?');
// console.log('Do you want to include an uppercase letter?')
// console.log(questionBox4)



// if (!box2) {
//   window.open('Must choose a Number!')
//   console.log('Must choose a Number!');
// };

// console.log(included)

// if (questionBox3 === true) {

//   var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   var randomNumber2 = Math.floor(Math.random() * 26)
//   console.log(lowercase[randomNumber2])
//   var choiceLowercase = (lowercase[randomNumber2]);
//   console.log(choiceLowercase)
//   included.push(choiceLowercase)
//   console.log(choiceLowercase)
//   console.log(included)
// };


// if (questionBox4 === true) {

//   var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var randomNumber3 = Math.floor(Math.random() * 26)
//   console.log(uppercase[randomNumber3])
//   var choiceUppercase = (uppercase[randomNumber3]);
//   included.push(choiceUppercase)
//   console.log(choiceUppercase)
// };


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomNumber2 = Math.floor(Math.random() * 26)
console.log(lowercase[randomNumber2])
var choiceLowercase = (lowercase[randomNumber2]);
console.log(choiceLowercase)






// if (questionBox5 === true) {
//   var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
//   console.log(symbols[0])
//   // //generate a random number between 0 and 7
//   var randomNumber1 = Math.floor(Math.random() * 8);
//   //generates random symbol
//   console.log(symbols[randomNumber1])
//   console.log(randomNumber1)
//   var choiceSymbols = (symbols[randomNumber1]);
//   console.log(choiceSymbols)
//   included.push(choiceSymbols)
// };


// console.log(included.join(""))
// var passwordNoLength = (included.join(""));
// console.log(passwordNoLength)

