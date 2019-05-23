function solve(arr, rotationsCount) {
    let resultArr = [];
    if (rotationsCount > arr.length) {
        rotationsCount = rotationsCount % arr.length;
    }
    for (let index = rotationsCount; index < arr.length; index++) {
        resultArr.push(arr[index]);
    }
    for (let index = 0; index < rotationsCount; index++) {
        resultArr.push(arr[index]);
    }
    console.log(resultArr.join(" "));
}
solve([2, 4, 15, 31],
    5)