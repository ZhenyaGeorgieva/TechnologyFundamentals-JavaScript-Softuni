function solve(input) {
    let words = input.split(' ');
    let wordsCounter = new Map();
    for (let i = 0; i < words.length; i++) {
        let wordInitial = words[i];
        let wordToLower = wordInitial.toLowerCase();
        if (!wordsCounter.has(wordToLower)) {
            wordsCounter.set(wordToLower, 1)
        } else {
            wordsCounter.set(wordToLower, wordsCounter.get(wordToLower) + 1)
        }
    }
    
    let final = [...wordsCounter.entries()];
    let finalArrayOfOddOccurences = [];
    
    for (let [key, value] of final) {
        if (value % 2 != 0) {
            finalArrayOfOddOccurences.push(key);
        }
    }
    console.log(finalArrayOfOddOccurences.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')