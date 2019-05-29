function solve(a, b, c) {
    let sum = (x1, x2) => x1 + x2;
    let sumOfTwoNumbers = sum(a, b);
    let subtract = (y1, y2) => y1 - y2;
    let result = subtract(sumOfTwoNumbers, c);
    console.log(result)
}
solve(5, 4, 3)