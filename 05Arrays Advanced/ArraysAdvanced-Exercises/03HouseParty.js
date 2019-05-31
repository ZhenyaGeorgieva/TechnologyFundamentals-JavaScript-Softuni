function solve(input) {
    let listOfGuests = [];
    for (let index = 0; index < input.length; index++) {
        let command = input[index].split(" ");
        let name = command[0];
        if (command[2] != "not") {
            if (!listOfGuests.includes(name)) {
                listOfGuests.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (listOfGuests.includes(name)) {
                let indexOfGuest = listOfGuests.indexOf(name);
                listOfGuests.splice(indexOfGuest, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    for (let key of listOfGuests) {
        console.log(key);
    }
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)