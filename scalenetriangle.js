// Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.

// scalenetriangle


// function scalene(side1, side2, side3) {
//     var scaleneCalc = side1 + side2 + side3 / 2
// }

function areaOfScaleneTriangle() {

    const prompt = require("prompt-sync")({signit: true});

    side1 = parseInt(prompt("Enter first side: "))
    side2 = parseInt(prompt("Enter second side: "))
    side3 = parseInt(prompt("Enter third side: "))

    let s = (side1 + side2 + side3) / 2
    var area = (s * (s - side1)*(s - side2)*(s - side3))

    console.log("Area = ", Math.sqrt(area))
}
areaOfScaleneTriangle()