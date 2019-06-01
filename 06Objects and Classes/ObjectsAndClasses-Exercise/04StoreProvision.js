function solve(input) {
    let currentStock = input.shift();
    let orderedStock = input.shift();

    let obj = {};
    for (let index = 0; index <= currentStock.length - 1; index++) {
        if (index % 2 === 0) {
            obj[currentStock[index]] = Number(currentStock[index + 1]);
        }
    }
    for (let index = 0; index < orderedStock.length - 1; index++) {
        if (index % 2 === 0) {
            if (obj.hasOwnProperty(orderedStock[index])) {
                obj[orderedStock[index]] += Number(orderedStock[index + 1]);
            } else {
                obj[orderedStock[index]] = Number(orderedStock[index + 1]);
            }
        }
    }
    console.log(obj);
}
solve([['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']])