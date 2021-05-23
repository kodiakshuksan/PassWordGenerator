// //New JavaScript

// //showing Javascript is Connected
// console.log("hello")



// //NUMBER
// var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var randomNumber4 = Math.floor(Math.random() * 10)
// console.log(number[randomNumber4])
// var choiceNumber = number[randomNumber4];
// console.log(choiceNumber)


// //LOWERCASE
// var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var randomNumber2 = Math.floor(Math.random() * 26)
// console.log(lowercase[randomNumber2])
// var choiceLowercase = lowercase[randomNumber2];
// console.log(choiceLowercase)

// //UPPERCASE
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var randomNumber3 = Math.floor(Math.random() * 26)
// console.log(uppercase[randomNumber3])
// var choiceUppercase = uppercase[randomNumber3];
// //included.push(choiceUppercase)
// console.log(choiceUppercase)

// //SYMBOLS
// var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
// console.log(symbols[0]);

// // //generate a random number between 0 and 7
// var randomNumber1 = Math.floor(Math.random() * 8);

// //generates random symbol
// console.log(symbols[randomNumber1])
// console.log(randomNumber1)
// var choiceSymbols = (symbols[randomNumber1]);
// console.log(choiceSymbols)



//alerts with instructions
window.alert('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to inclue and cancel means not to include')
console.log('Instructions-Must Choose length of password from 8-128. Must include at least a number, lowercase letter, uppercase letter, and symbol. Okay is yes to include and cancel means not to include ')



//alert for choose PASSWORD LENGTH
var lengthOfPassword = window.prompt('Pick amount of characters you would like in your password from 8-128.');
var numbersInPassword = console.log('Pick amount of characters you would like in your password from 8-128. ')
//how do I get value of this back?
console.log(lengthOfPassword)

//prompt for INCLUDE NUMBER yes or no
var questionBox2 = window.confirm('Do you want to include a number?');
console.log('Do you want to include a number?')
console.log(questionBox2);

//prompt for include LOWERCASE yes or no
var questionBox3 = window.confirm('Do you want to include a lowercase letter?');
console.log('Do you want to include a lowercase letter?')
var includeLowerCase = console.log(questionBox3);

//prompt for include UPPERCASE yes or no
var questionBox4 = window.confirm('Do you want to include an uppercase letter?');
console.log('Do you want to include an uppercase letter?')
var includeUpperCase = console.log(questionBox4);

// //prompt for include SYMBOL
var questionBox5 = window.confirm('Do you want to include a special character?');
console.log('Do you want to include a special character?')
var includeSymbol = console.log(questionBox5);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

var included = new Array();








var usersChoices = [number + lowercase + uppercase + symbols];
console.log(usersChoices)
console.log(questionBox2)

//how the password is created and collected in the console after the prompts
if (questionBox2 === true) {
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


    included.push(number[Math.floor(Math.random() * 10)])
    if (questionBox3 === true) {

        var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        included.push(lowercase[Math.floor(Math.random() * 26)])
        console.log(included)
    }

    if (questionBox4 === true) {

        var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        included.push(uppercase[Math.floor(Math.random() * 26)])
        console.log(included)
    }



    if (questionBox5 === true) {
        var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

        included.push(symbols[Math.floor(Math.random() * 8)])
        console.log(included)
    }
} else {
    alert('Must include Number!')


    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


    included.push(number[Math.floor(Math.random() * 10)])



    if (questionBox3 === true) {

        var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        included.push(lowercase[Math.floor(Math.random() * 26)])
        console.log(included)
    }

    if (questionBox4 === true) {

        var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        included.push(uppercase[Math.floor(Math.random() * 26)])
        console.log(included)
    }



    if (questionBox5 === true) {
        var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

        included.push(symbols[Math.floor(Math.random() * 8)])
        console.log(included)
    }


};
console.log(included)
console.log(lengthOfPassword)
const goal = lengthOfPassword;
console.log(goal)
var text = "";
var i;
for (i = 0; i < included.length; i++) {
  text += included[i];
}
console.log(text)
document.getElementById("password").innerHTML = text;

// work on length of password 
// make password
// displaying password





//document.getElementById("generate").addEventListener("click", inclu//);








    // lengthOfPassword.toString().length;

    // console.log(lengthOfPassword)



    // //var practice = usersChoices + password part 
    // console.log(practice)








