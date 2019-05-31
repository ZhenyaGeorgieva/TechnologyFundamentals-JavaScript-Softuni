function solve(input) {
    let sorted = input.sort((a, b) => a - b).reverse();
    let resultArr = [];
    let rotateCount;
    if (sorted.length % 2 == 0) {
        rotateCount = sorted.length / 2;
    } else {
        rotateCount = sorted.length / 2 - 1;
    }

    for (let index = 0; index < rotateCount; index++) {
        resultArr.push(Number(sorted[index]));
        resultArr.push(Number(sorted[sorted.length - 1 - index]));
    }
    if (sorted.length % 2 != 0) {
        let indexNumToAdd = parseInt(sorted.length / 2);
        let numToAdd = sorted[indexNumToAdd];
        resultArr.push(numToAdd);
    }
    console.log(resultArr.join(" "))
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18])