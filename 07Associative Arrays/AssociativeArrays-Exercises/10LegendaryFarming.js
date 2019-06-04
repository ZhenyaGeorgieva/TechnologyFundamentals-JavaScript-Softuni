function solve(input) {
    let special = new Map();
    special.set("shards", 0);
    special.set("fragments", 0);
    special.set("motes", 0);

    let junk = new Map();
    let arr = input.split(" ");
    for (let index = 0; index < arr.length - 1; index += 2) {
        let quantity = Number(arr[index]);
        let item = arr[index + 1].toLowerCase();
        if (special.has(item)) {
            special.set(item, special.get(item) + quantity);
            if (item == "shards" && special.get(item) >= 250) {
                console.log("Shadowmourne obtained!");
                special.set(item, special.get(item) - 250);
                break;
            } else if (item == "fragments" && special.get(item) >= 250) {
                console.log("Valanyr obtained!");
                special.set(item, special.get(item) - 250);
                break;
            } else if (item == "motes" && special.get(item) >= 250) {
                console.log("Dragonwrath obtained!");
                special.set(item, special.get(item) - 250);
                break;
            }
        }
        else {
            if (junk.has(item)) {
                junk.set(item, junk.get(item) + quantity);
            } else {
                junk.set(item, quantity);
            }
        }
    }

    let sortedSpecial = [...special].sort(sortSpecial);
   
    function sortSpecial(a, b) {
        let difference = b[1] - a[1];
        if (difference === 0) {
            return a[0].localeCompare(b[0]);
        }
        return difference;
    }
    
    for (let [key, value] of sortedSpecial) {
        console.log(`${key}: ${value}`);
    }
    
    let sortedJunk = [...junk].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of sortedJunk) {
        console.log(`${key}: ${value}`);
    }
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')