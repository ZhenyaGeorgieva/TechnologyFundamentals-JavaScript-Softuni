function solve(input) {
    let soughtWords = input.shift().split(' ');
    let wordsCount = new Map();
    for (let i = 0; i < soughtWords.length; i++) {
        let wordToAdd = soughtWords[i];
        wordsCount.set(wordToAdd, 0);
    }
    for (let i = 0; i < input.length; i++) {
        let wordToCheck = input[i];
        if (wordsCount.has(wordToCheck)) {
            wordsCount.set(wordToCheck, wordsCount.get(wordToCheck) + 1)
        }
    }
    let sorted = [...wordsCount.entries()].sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`)
    }
}
solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)