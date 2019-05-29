function solve(input) {
    let arrayOfNumbers = findIntegersInNumber(input);
    let oddSum = findOddNumbersSum(arrayOfNumbers);
    let evenSum = findEvenNumbersSum(arrayOfNumbers);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

    function findIntegersInNumber(number) {
        let integersArray = [];
        while (number > 0) {
            let numberToAdd = parseInt(number % 10);
            integersArray.push(numberToAdd);
            number = parseInt(number / 10);
        }
        return integersArray;
    }
    function findOddNumbersSum(arrayOfIntegers) {
        let oddSum = 0;
        for (let index = 0; index < arrayOfIntegers.length; index++) {
            let numberToCheck = Number(arrayOfIntegers[index]);
            if (numberToCheck % 2 != 0) {
                oddSum += numberToCheck;
            }
        }
        return oddSum;
    }
    function findEvenNumbersSum(arrayOfIntegers) {
        let evenSum = 0;
        for (let index = 0; index < arrayOfIntegers.length; index++) {
            let numberToCheck = arrayOfIntegers[index];
            if (numberToCheck % 2 == 0) {
                evenSum += numberToCheck;
            }
        }
        return evenSum;
    }
}
solve(3495892137259234)