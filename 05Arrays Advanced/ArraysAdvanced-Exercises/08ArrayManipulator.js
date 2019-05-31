function solve(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(" ");
        if (tokens[0] == "add") {
            let index =Number(tokens[1]);
            let element =Number(tokens[2]);
            arr.splice(index, 0, element);
        } else if (tokens[0] == "addMany") {
            let indexToAdd =Number(tokens[1]);
            for (let index = tokens.length-1; index >=2; index--) {
                let numToAdd = Number(tokens[index]);
                arr.splice(indexToAdd, 0, numToAdd);
            }
        } else if (tokens[0] == "contains") {
            let numberToFind =Number(tokens[1]);
            let index = arr.indexOf(numberToFind);
            console.log(index);
        } else if (tokens[0] == "remove") {
            let index = Number(tokens[1]);
            arr.splice(index, 1);

        } else if (tokens[0] == "shift") {
            let rotationCount = Number(tokens[1]);
            for (let index = 0; index < rotationCount; index++) {
                let numToPush = arr.shift();
                arr.push(numToPush);
            }

        } else if (tokens[0] == "sumPairs") {
            for (let index = 0; index < arr.length - 1; index++) {
                let numToAdd = arr[index + 1];
                arr[index] += numToAdd;
                arr.splice(index+1,1);
            }

        } else if (tokens[0] == "print") {
            console.log(arr)
        }
    }
}
solve([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]   
)