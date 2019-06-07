function solve(input) {
    let firstWord = input[0];
    let secondWord = input[1];
    let thirdWord = input[2];
    let thirdWordCharCounter = -1;
    let wordToCrypt = firstWord + secondWord;

    for (let index = 0; index < wordToCrypt.length; index++) {
        let currentChar = wordToCrypt[index];
        if (currentChar == "a"
            || currentChar == "e"
            || currentChar == "o"
            || currentChar == "i"
            || currentChar == "u") {
            thirdWordCharCounter++;
            if (thirdWordCharCounter > thirdWord.length - 1) {
                thirdWordCharCounter = 0;
            }
            let charToReplace = thirdWord[thirdWordCharCounter].toUpperCase();
            wordToCrypt = wordToCrypt.replace(wordToCrypt[index], charToReplace);
        }
    }

    let password = wordToCrypt.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}

solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])