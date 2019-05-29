function solve(input) {

    let isLengthRight = checkLength(input);
    let isLettersAndDigitsOnly = checkLettersAndDigits(input);
    let isDigitsCountRight = checkNumCount(input);

    if (isLengthRight && isLettersAndDigitsOnly && isDigitsCountRight) {
        console.log("Password is valid")
    }
    if (!isLengthRight) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isDigitsCountRight) {
        console.log("Password must have at least 2 digits");
    }
    
    function checkLength(input) {
        if (input.length >= 6 && input.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function checkLettersAndDigits(input) {
        for (let index = 0; index < input.length; index++) {
            let element = input[index];
            let regexNum = /^[0-9]+$/;
            let regexLetter = /^[A-Z a-z]+$/;
            if (element.match(regexNum) || element.match(regexLetter)) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }

    function checkNumCount(input) {
        let digitsCount = 0;
        for (let index = 0; index < input.length; index++) {
            let element = input[index];
            let regexNum = /^[0-9]+$/;
            if (element.match(regexNum)) {
                digitsCount++;
            }
        }
        if (digitsCount >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

solve("Pa$s$s")

