let givenArray = [4, 2, 7, 1, 9, 5];  /* define the given array */
let target = 14;                        /* define the given target */
function calc(array, targetNum){
    const sum = arr => arr.reduce((a,b) => a + b); /* function that return the sum of array's elements */
    // iterate through array's elements to found subArray that should be stored and added to each other, then be compared to the target
    for (let i = 0; i < array.length; i++) {
        const tempArray = [];
        for(let j = i; j < array.length; j++){
            tempArray.push(array[j]);
            if(sum(tempArray) === targetNum) return true;
        }
    }
    return false;
}

console.log(calc(givenArray,target))