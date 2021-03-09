function checkTwoIntergerValues(number1, number2) {
sum = number1 + number2;

if (number1 == 50 || number2 == 50){
    console.log("one of the numbers is 50")
    return true;
    }
else if(sum == 50){
    console.log("Sum is 50")
    return true;
    }
else{
    console.log("None of the numbers or sum is 50")
    return false;
    }
}

checkTwoIntergerValues(45, 20)