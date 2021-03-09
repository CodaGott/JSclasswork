// Write a JavaScript program to compute the sum and product of
// an array of integers.

function sumandproductofanArray() {
    let sum = 0
    let product = 1
    let myArray = [10, 10]

    for(var count = 0; count<myArray.length; count++){
        sum += myArray[count]
        product *= myArray[count] 
    }
    console.log("sum", sum)
    console.log("product", product)
}

sumandproductofanArray()