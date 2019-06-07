function solve(input) {
    let inputLength = input.length;
    let firstWord = "";
    for (let index = inputLength / 2 - 1; index >= 0; index--) {
        let currentSymbol = input[index];
        firstWord += currentSymbol;
    }
    console.log(firstWord)
    
    let secondWord = "";
    for (let index = input.length - 1; index >= inputLength / 2; index--) {
        let currentSymbol = input[index]
        secondWord += currentSymbol;
    }
    console.log(secondWord);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')