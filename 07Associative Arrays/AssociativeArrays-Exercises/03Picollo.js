function solve(input) {
    let numbersList = [];

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(", ");
        let direction = tokens[0];
        let number = tokens[1];
        if (direction == "IN") {
            if (!numbersList.includes(number)) {
                numbersList.push(number);
            }
        } else if (direction == "OUT") {
            let indexOfNumber = numbersList.indexOf(number);
            if (indexOfNumber != -1) {
                numbersList.splice(indexOfNumber, 1);
            }
        }
    }
    let sorted = numbersList.sort((a, b) => a > b)
    if (sorted.length == 0) {
        console.log("Parking Lot is Empty")
    } else {
        for (let car of sorted) {
            console.log(car);
        }
    }
}

solve(['IN, CA2844AA',
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])