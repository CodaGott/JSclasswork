function getfirstelement(array, n = 1) {
    
    if (array){
        if (n === 1){
            return array[0];
        }
        else{
            return array.splice(0, n)
        }
    }
    return array
    
}
console.log(getfirstelement([7, 9, 0, -2]))
console.log(getfirstelement([],3))
console.log(getfirstelement([7, 9, 0],3))
console.log(getfirstelement([7, 9, 0, -2],6))