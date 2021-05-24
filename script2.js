function generatePassword() {
    // //New JavaScript



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





console.log(included)
console.log(lengthOfPassword)

var text = "";
var i;
for (i=0; i < lengthOfPassword; i++) {
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
}
for (i = 0; i < lengthOfPassword; i++) {
  text += included[i];
  console.log(i)
}


  
//console.log(randoms)
console.log(text)
document.getElementById("password").innerHTML = text;




}
//generatePassword();

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePassword);