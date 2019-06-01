function solve(input) {
    let catalogue = [];
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        catalogue[product] = price;
    }
    let keys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    let alphabetKeys = [];
    for (let index = 0; index < keys.length; index++) {
        let currentWord = keys[index];
        let startLetter = currentWord[0];
        if (!alphabetKeys.hasOwnProperty(startLetter)) {
            alphabetKeys[startLetter] = [];
            alphabetKeys[startLetter].push(currentWord);
        } else {
            alphabetKeys[startLetter].push(currentWord);
        }
    }
    for (let key in alphabetKeys) {
        let firstIndex = key;
        console.log(firstIndex);
        let wordsWithThisIndex = alphabetKeys[firstIndex];
        for (let word of wordsWithThisIndex) {
            let currentWord = word;
            let price = catalogue[currentWord];
            console.log(`  ${currentWord}: ${price}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)