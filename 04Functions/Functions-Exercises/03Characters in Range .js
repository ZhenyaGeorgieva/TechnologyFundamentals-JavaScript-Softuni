function solve(firstChar, secondChar) {
    let print = printCharsInBetween(firstChar, secondChar);
    console.log(print.join(" "));

    function printCharsInBetween(a, b) {
        let asciiCodeOfa = a.charCodeAt();
        let asciiCodeOfb = b.charCodeAt();

        let beginning;
        let end;
        let result = [];
        if (asciiCodeOfa >= asciiCodeOfb) {
            beginning = asciiCodeOfb;
            end = asciiCodeOfa;
        } else {
            beginning = asciiCodeOfa;
            end = asciiCodeOfb;
        }
        for (let index = beginning + 1; index < end; index++) {
            let symbolToAdd = String.fromCharCode(index);
            result.push(symbolToAdd);
        }
        return result;
    }
}
solve('C', '#')