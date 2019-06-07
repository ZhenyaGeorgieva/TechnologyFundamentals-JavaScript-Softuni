function solve(word, text) {
    let lowerWord = word.toLowerCase();
    let textLower = text.split(" ");
    let isFound = false;
    
    for (let index = 0; index < textLower.length; index++) {
        let word = textLower[index].toLowerCase();
        if (word == lowerWord) {
            console.log(lowerWord);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`)
    }
}
solve('javascript',
    'JavaScript is the best programming language')