function solve(arr1,arr2){
let countOfElementsToTake=arr2.shift();
let countOfElementsToRemove=arr2.shift();
let numberToCount=arr2.shift();
let slicedArr=arr1.slice(0,countOfElementsToTake);
let countOfNumber=0;
slicedArr.splice(0,countOfElementsToRemove);
for (let index = 0; index < slicedArr.length; index++) {
    if(slicedArr[index]==numberToCount){
        countOfNumber++;
    }
}
console.log(`Number ${numberToCount} occurs ${countOfNumber} time.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )