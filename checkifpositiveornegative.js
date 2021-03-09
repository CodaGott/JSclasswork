// 2- Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative.



    


function checkNegativeOrPositiveNumber(){

    const prompt = require("prompt-sync")({signit: true});

    number1 = parseInt(prompt("Enter first number: "))
    number2 = parseInt(prompt("Enter second number: "))

    if(number1 >= 0){
        console.log("Number 1 ",number1, " is a positive number")
    }
    if(number1 < 0){
        console.log("Number 1 ",number1, " is a negative number")
    }
    if(number2 >= 0){
        console.log("Number 2 ",number2, " is a positive number")
    }
    if(number2 < 0){
        console.log("Number 2 ",number2, " is a negative number")
}
}

checkNegativeOrPositiveNumber()