function solve(input) {
    let sum = 0;
    while (input > 0) {
        let numberToAdd = input % 10;
        sum += numberToAdd;
        input = parseInt(input / 10)
    }
    console.log(sum)
}
solve(245678)