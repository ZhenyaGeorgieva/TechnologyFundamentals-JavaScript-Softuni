function solve(input) {
    let polyndromes = [];
    for (let index = 0; index < input.length; index++) {
        let word = input[index].split(" ").join("");
        let reversed = word.split("").reverse().join("");
        if (word == reversed) {
            polyndromes.push(word);
        }
    }

    if (polyndromes.length > 0) {
        console.log(polyndromes.join(", "))
    } else {
        console.log("No palindromes found")
    }
}

solve([' stella won no wallets',
    'not a palindrome'])