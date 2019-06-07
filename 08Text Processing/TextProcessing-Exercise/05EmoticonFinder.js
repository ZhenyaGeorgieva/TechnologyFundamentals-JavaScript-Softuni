function solve(input) {
    let words = input.split(" ");
    
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        if (word.length == 2 && word[0] == ":") {
            console.log(word)
        }
    }
}

solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')