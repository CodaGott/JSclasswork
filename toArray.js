// Write a function toArray that takes 2 values and returns these
// values in an array.



function toArray(num1, num2) {
    console.log(Array.from(arguments));
}

toArray(3,6)