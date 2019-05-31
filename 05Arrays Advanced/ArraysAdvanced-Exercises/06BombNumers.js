function solve(arr1, arr2) {
    let specialNum = arr2.shift();
    let power = arr2.shift();
    while (arr1.includes(specialNum)) {
        let indexOfSpecial = arr1.indexOf(specialNum);
        let start = indexOfSpecial - power;
        let countOfElementsToRemove = 2 * power + 1;
        if (start < 0) {
            countOfElementsToRemove += start;
            start = 0;
        }

        arr1.splice(start, countOfElementsToRemove);
    }
    if (arr1.length > 0) {
        let sum = arr1.reduce((a, b) => a + b);
        console.log(sum);
    } else {
        console.log(0);
    }
}
solve([1, 7, 7, 1, 2, 3, 7, 9, 8, 9],
    [7, 2]
)
