function solve(input) {
    let wagons = input.shift().split(" ");
    let maxCapacity = input.shift();
    for (let index = 0; index < input.length; index++) {
        let command = input[index];
        let tokens=command.split(" ");
        if (tokens[0] == "Add") {
            let wagonToAdd=Number(tokens[1]);
            wagons.push(wagonToAdd);
        } else {
            let passangersToAdd = Number(tokens[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (Number(wagons[i]) + passangersToAdd <= maxCapacity) {
                    let newValue = Number(wagons[i]) + passangersToAdd;
                    wagons.splice(i, 1, newValue);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)