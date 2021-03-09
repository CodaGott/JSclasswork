// Write a function called sandwich calculator. This should accept one value: slicesOfBread

// The function should return the total number of possible sandwiches based
// on the amount of slices available, so if there are 10 slices, it should return 5. 
// Test your function with an alert box.
// Extend your function so it accepts two values, slicesOfBread and
// slicesOfCheese.
// It takes two slices of bread and one of cheese to make a sandwich. The
// function should return the total number of possible sandwiches, so if there
// are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need
// an if statement to make this work. sandwichcalc


function sandwichCalculator(slicesOfBread) {
    let possibleSandwich = slicesOfBread / 2
    console.log("Possible sandwich based of bread provided: ", possibleSandwich)
    return possibleSandwich;
}

function sandwichCalculator2(slicesOfBread, slicesOfCheese) {
    let possibleSandwich = slicesOfBread / 2
    if (slicesOfCheese != possibleSandwich){
        console.log("slice of cheess not equal to possible slice")
        return 1;
    }else{
        console.log("possible Sandwich: ", possibleSandwich)
        return possibleSandwich;
    }
}

sandwichCalculator(10)
sandwichCalculator2(9,5)