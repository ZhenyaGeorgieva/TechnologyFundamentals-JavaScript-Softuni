function solve(input) {
    let countryTown = new Map();

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(" > ");
        let country = tokens[0];
        let town = tokens[1];
        let price = tokens[2];
        if (!countryTown.has(country)) {
            let townPrice = new Map();
            countryTown.set(country, townPrice);
            countryTown.get(country).set(town, price);
        } else {
            if (!countryTown.get(country).has(town)) {
                countryTown.get(country).set(town, price);
            } else {
                if (countryTown.get(country).get(town) > price) {
                    countryTown.get(country).set(town, price);
                }
            }
        }
    }
    let sorted = [...countryTown.entries()]
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    for (let [key, value] of sorted) {
        let finalLineToPrint = "";
        let country = key;
        finalLineToPrint += country + " -> "
        let townsPrices = value;
        let sortedTowns = [...townsPrices]
            .sort((a, b) => a[1] - b[1]);
        
            for (let [key, value] of sortedTowns) {
            let town = key;
            let price = value;
            finalLineToPrint += town + " -> " + price + " "
        }
        console.log(finalLineToPrint)
    }
}

solve(['Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10']
)