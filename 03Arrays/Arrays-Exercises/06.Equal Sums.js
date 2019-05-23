function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let found = false;
    for (let index = 0; index < arr.length; index++) {
        let numberToCompare = arr[index];
        for (let y = index + 1; y < arr.length; y++) {
            let rightNum = arr[y];
            rightSum += rightNum;
        }
        for (let x = 0; x < index; x++) {
            let leftNum = arr[x];
            leftSum += leftNum;
        }
        if (rightSum == leftSum) {
            console.log(index);
            found = true;
            break;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!found) {
        console.log("no")
    }
}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])