function solve(input) {
    let pattern = /#(?<words>[A-Za-z]{1,})/g;
    let result = pattern.exec(input);
    while (result !== null) {
        console.log(result.groups.words);
        result = pattern.exec(input);
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
