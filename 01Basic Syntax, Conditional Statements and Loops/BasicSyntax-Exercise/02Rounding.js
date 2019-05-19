function rounding(number, precisionNumber) {
    if (precisionNumber > 15) {
        precisionNumber = 15;
    }
    let printNumber = number.toFixed(precisionNumber);
    printNumber=parseFloat(printNumber)
    console.log(printNumber);
}