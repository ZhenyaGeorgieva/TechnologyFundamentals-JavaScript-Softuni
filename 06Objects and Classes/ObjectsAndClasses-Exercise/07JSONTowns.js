function solve(input) {
    let towns = [];
    for (let index = 1; index < input.length; index++) {
        let tokens = input[index].split('|');
        let name = tokens[1].trim();
        let latitudeTokens = tokens[2].trim();
        let latitude = Number(latitudeTokens).toFixed(2);
        let longitudeTokens = tokens[3].trim();
        let longitude = Number(longitudeTokens).toFixed(2);
        let obj = {
            Town: name,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        towns.push(obj);
    }
    console.log(JSON.stringify(towns))
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)