function solve(input) {
    let pattern = /[A-Z]{1}[^A-Z]{0,}/g;
    let matches = input.match(pattern);
    console.log(matches.join(", "));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')