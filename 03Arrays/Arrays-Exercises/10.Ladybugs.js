function solve(input) {
    let fieldSize = Number(input.shift());
    let ladybugField = [];

    let occupiedIndexes = (input.shift()).split(" ");

    for (let i = 0; i < occupiedIndexes.length; i++) {
        let currentIndex = Number(occupiedIndexes[i]);
        if (currentIndex >= 0 && currentIndex < fieldSize) {
            ladybugField[currentIndex] = 1;
        }
    }
    for (let index = 0; index < fieldSize; index++) {
        if (ladybugField[index] != 1) {
            ladybugField[index] = 0;
        }
    }
    for (let index = 0; index < input.length; index++) {
        let command = input[index].split(" ");
        let isFirst = true;
        let currentIndex = Number(command[0]);

        while (currentIndex >= 0 && currentIndex < fieldSize
            && ladybugField[currentIndex] != 0) {
            if (isFirst) {
                ladybugField[currentIndex] = 0;
                isFirst = false;
            }

            let direction = command[1];
            let flightLength = Number(command[2]);
            if (direction == "left") {
                currentIndex -= flightLength;

                if (currentIndex >= 0 && currentIndex < fieldSize) {
                    if (ladybugField[currentIndex] == 0) {
                        ladybugField[currentIndex] = 1;
                        break;
                    }
                }
            } else {
                currentIndex += flightLength;
                if (currentIndex >= 0 && currentIndex < fieldSize) {
                    if (ladybugField[currentIndex] == 0) {
                        ladybugField[currentIndex] = 1;
                        break;
                    }
                }
            }
        }
    }
    console.log(ladybugField.join(" "));
}
solve([5,
    '3',
    '3 left 2',
    '1 left -2'])
