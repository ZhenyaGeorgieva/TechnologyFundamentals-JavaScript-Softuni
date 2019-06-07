function solve(words,text){
    let wordsArr=words.split(", ");
    let resultStr="";
    
    for (let index = 0; index < wordsArr.length; index++) {
    let wordToFind=wordsArr[index];
    let wordToFindLength=wordToFind.length;
    let searchWord="*".repeat(wordToFindLength);
    resultStr=text.replace(searchWord,wordToFind);
    text=resultStr;
    }
    console.log(resultStr);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')