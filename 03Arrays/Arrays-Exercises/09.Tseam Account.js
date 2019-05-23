function solve(listOfGames1) {
    let listOfGames = (listOfGames1.shift()).split(" ");
    let command = listOfGames1.shift();

    while (command != "Play!") {
        let tokens = command.split(" ");
        if (tokens[0] == "Install") {
            if (!listOfGames.includes(tokens[1])) {
                listOfGames.push(tokens[1]);
            }
        } else if (tokens[0] == "Uninstall") {
            if (listOfGames.includes(tokens[1])) {
                let indexOfGameToRemove = listOfGames.indexOf(tokens[1]);
                listOfGames.splice(indexOfGameToRemove, 1);
            }
        } else if (tokens[0] == "Update") {
            if (listOfGames.includes(tokens[1])) {
                let indexOfGameToRemove = listOfGames.indexOf(tokens[1]);
                listOfGames.splice(indexOfGameToRemove, 1);
                listOfGames.push(tokens[1]);
            }
        } else if (tokens[0] == "Expansion") {
            let tokenGames = tokens[1].split("-");
            let gameName = tokenGames[0];
            let expansion = tokenGames[1];
            if (listOfGames.includes(gameName)) {
                let indexOfGame = listOfGames.indexOf(gameName);
                let newElement = gameName + ":" + expansion;
                listOfGames.splice(indexOfGame + 1, 0, newElement);
            }
        }
        command = listOfGames1.shift();
    }
    console.log(listOfGames.join(" "));
}
solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])