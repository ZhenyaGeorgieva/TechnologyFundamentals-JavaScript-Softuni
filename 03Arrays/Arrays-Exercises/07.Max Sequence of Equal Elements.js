function solve(input) {
    let arr = (input.shift()).split(" ");
    let longestSub = 0;
    let bestElement = 0;
    let currentSub = 0;
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] == arr[index + 1]) {
            currentSub++;
            currentElem = arr[index];
        } else {
            currentSub = 0;
        }
        if (currentSub > longestSub) {
            bestElement = currentElem;
            longestSub = currentSub;
        }
    }
    let finalPrint = "";
    for (let index = 0; index <= longestSub; index++) {
        finalPrint += ((bestElement.toString()) + " ")
    }
    console.log(finalPrint)
}
solve(['1 1 1 2 3 1 3 3'])