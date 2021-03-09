// Write a JavaScript program to compute the sum of the two given
// integers. If the two values are same, then returns triple their sum.

function SumOfInt(num1, num2) {
    sum = num1 + num2
    if (num1 == num2){
        sum *= 3
    }
    console.log(sum)
}
SumOfInt(10,10)