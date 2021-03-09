// Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.

// scalenetriangle


// function scalene(side1, side2, side3) {
//     var scaleneCalc = side1 + side2 + side3 / 2
// }

function areaOfScaleneTriangle() {
    side1 = 5; 
    side2 = 6; 
    side3 = 7;

    let s = (side1 + side2 + side3) / 2
    // console.log("s", s)
    var area = (s * (s - side1)*(s - side2)*(s - side3))

    console.log("Area = ", Math.sqrt(area))
}

// scalene(5, 6, 7)
areaOfScaleneTriangle()