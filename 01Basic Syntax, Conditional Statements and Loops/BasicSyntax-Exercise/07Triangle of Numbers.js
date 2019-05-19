function solve(number) {
    for (let numberToPrint = 1; numberToPrint <= number; numberToPrint++) {
        let numberToPrintString = "";
        for (let timesToPrint = 0; timesToPrint < numberToPrint; timesToPrint++) {
            numberToPrintString += numberToPrint + " ";
        }
        console.log(numberToPrintString);
    }
}