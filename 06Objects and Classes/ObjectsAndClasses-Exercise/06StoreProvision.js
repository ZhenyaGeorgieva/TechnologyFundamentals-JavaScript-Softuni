function solve(input) {
    let provisions = {};
    let arr1 = input[0];
    let arr2 = input[1];
    for (let index = 0; index < arr1.length; index += 2) {
        let provisionName = arr1[index];
        let provisionQuantity = Number(arr1[index + 1]);
        provisions[provisionName] = provisionQuantity;
    }
    for (let index = 0; index < arr2.length; index += 2) {
        let provisionName = arr2[index];
        let provisionQuantity = Number(arr2[index + 1]);
        if (provisions.hasOwnProperty(provisionName)) {
            provisions[provisionName] += provisionQuantity;
        } else {
            provisions[provisionName] = provisionQuantity;
        }
    }
    console.log(provisions);
}
solve([['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2']
    , ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']])