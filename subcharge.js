// Write a function addWithSubcharge that adds two amounts with
// subcharge. For each amount less than or equal to 10, the subcharge
// is 1. For each amount greater than 10, the subcharge is 2.

function addWithSubcharge(num1, num2) {

    subcharge = 0;
    if(num1 <= 10){subcharge += 1}
    else{ subcharge += 2}

    if (num2 <= 10){subcharge += 1}
    else{subcharge += 2}

    total = subcharge + num1 + num2

    console.log("total is ", total)
    // let amount = [48, 10,]
    // var subcharge = 0;
    
    // for(let count = 0; count < amount.length; count++){
    //     if(amount[count] <= 10){
    //         subcharge = subcharge + 1
    //         console.log("Subcharge less than 10", subcharge)
    //     }
    //     else if(amount[count] > 10){
    //         subcharge = subcharge + 2
    //         console.log("Subcharge greater than 10", subcharge)
    //     }
    //     }
}

addWithSubcharge(10, 10)