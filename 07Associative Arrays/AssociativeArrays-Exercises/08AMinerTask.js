function solve(input) {
    let resourses = new Map();

    for (let index = 0; index < input.length - 1; index += 2) {
        let resourseName = input[index];
        let quantity = Number(input[index + 1]);
        if (!resourses.has(resourseName)) {
            resourses.set(resourseName, quantity);
        } else {
            resourses.set(resourseName, resourses.get(resourseName) + quantity);
        }
    }

    let print = [...resourses.entries()];
    for (let [key, value] of print) {
        console.log(`${key} -> ${value}`)
    }
}

solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])