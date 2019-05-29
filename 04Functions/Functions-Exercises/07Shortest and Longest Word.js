function solve(input) {
    let arrayOfWords = input.split(/[ !?.,]/);
    let longest = findLongestWord(arrayOfWords);
    let shortestWord = findShortestWord(arrayOfWords);
    console.log(`Longest -> ${longest}`);
    console.log(`Shortest -> ${shortestWord}`);

    function findShortestWord(arrayOfWords) {
        let smallestLength = Number.MAX_SAFE_INTEGER;
        let shortestWord = "";
        for (let index = 0; index < arrayOfWords.length; index++) {
            let wordToCheck = arrayOfWords[index];
            let wordToCheckLenght = wordToCheck.length;

            if (wordToCheckLenght < smallestLength) {
                smallestLength = wordToCheckLenght;
                shortestWord = wordToCheck;
            }
        }
        return shortestWord;
    }
    
    function findLongestWord(arrayOfWords) {
        let longestLength = Number.MIN_SAFE_INTEGER;
        let longestWord = "";

        for (let index = 0; index < arrayOfWords.length; index++) {
            let wordToCheck = arrayOfWords[index];
            let wordToCheckLenght = wordToCheck.length;

            if (wordToCheckLenght > longestLength) {
                longestLength = wordToCheckLenght;
                longestWord = wordToCheck;
            }
        }
        return longestWord;
    }
}
solve(["Hello people, are you familiar with the terms of application at the software university?"])