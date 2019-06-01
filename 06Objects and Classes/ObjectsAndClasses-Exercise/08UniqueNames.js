function solve(input) {
    let uniqueNames = [];
    for (let index = 0; index < input.length; index++) {
        let currentName = input[index];
        if (!uniqueNames.includes(currentName)) {
            uniqueNames.push(currentName);
        }
    }
    let sorted = uniqueNames.sort(sortUnique);

    function sortUnique(a, b) {
        if (a.length > b.length || a.length < b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    };
    sorted.forEach(x => console.log(x));
}
solve(["Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"]

)