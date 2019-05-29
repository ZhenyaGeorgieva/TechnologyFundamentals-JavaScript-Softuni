function solve(input) {
    while (input.length > 0) {
        let numberToCheck = Number(input.shift());
        let result = checkIfNumberIsPolindrome(numberToCheck);
        console.log(result);
        function checkIfNumberIsPolindrome(number) {
            let numberToString = number.toString();
            let reversedString = "";
            for (let index = numberToString.length - 1; index >= 0; index--) {
                let charToAdd = numberToString[index].toString();
                reversedString += charToAdd;
            }
            if (numberToString == reversedString) {
                return true;
            } else {
                return false;
            }
        }
    }
}
solve([32, 2, 232, 1010])