function solve(input) {
    let inventory = input.shift().split(" ");
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        if (tokens[0] === "Buy") {
            let equipmentToAdd = tokens[1];
            if (!inventory.includes(equipmentToAdd)) {
                inventory.push(equipmentToAdd);
            }
        } else if (tokens[0] === "Trash") {
            if (inventory.includes(tokens[1])) {
                let index = inventory.indexOf(tokens[1]);
                inventory.splice(index, 1);
            }

        } else if (tokens[0] === "Repair") {
            if (inventory.includes(tokens[1])) {
                let index = inventory.indexOf(tokens[1]);
                inventory.splice(index, 1);
                inventory.push(tokens[1]);
            }

        } else if (tokens[0] === "Upgrade") {
            let inventoryToUpgrade = tokens[1].split("-");

            if (inventory.includes(inventoryToUpgrade[0])) {
                let newInventory = inventoryToUpgrade[0] + ":" + inventoryToUpgrade[1];
                let index = inventory.indexOf(inventoryToUpgrade[0]);
                inventory.splice(index + 1, 0, newInventory);
            }
        }
    }
    console.log(inventory.join(" "));

}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]
)