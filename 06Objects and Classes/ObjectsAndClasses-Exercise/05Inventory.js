function solve(input) {
    let inventory = [];
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');
        let obj = {
            name: name,
            level: level,
            items: items
        };
        inventory.push(obj);
    }
    console.log(JSON.stringify(inventory));
}
solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]
)