function solve(input) {
    let playersCards = new Map();
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(": ");
        let name = tokens[0];
        let cards = tokens[1].split(", ");
        if (!playersCards.has(name)) {
            playersCards.set(name, []);
        }
        
        for (let y = 0; y < cards.length; y++) {
            let currentCard = cards[y];
            let currentPlayerCards = playersCards.get(name);
            if (!currentPlayerCards.includes(currentCard)) {
                currentPlayerCards.push(currentCard)
            }
        }
    }
    
    for (let [key, value] of playersCards) {
        let name = key;
        let cards = value;
        let totalPoints = 0;
       
        for (let index = 0; index < cards.length; index++) {
            let currentCard = cards[index];
            let firstIndex;
            let secondIndex;
            if (currentCard.includes(10)) {
                firstIndex = 10;
                secondIndex = currentCard[2];
            } else {
                firstIndex = currentCard[0];
                secondIndex = currentCard[1];
            }
            let firstIndexValue = Number(firstIndex);
            let secondIndexValue = 0;
            if (!firstIndexValue) {
                if (firstIndex == "J") {
                    firstIndexValue = 11;
                } else if (firstIndex == "Q") {
                    firstIndexValue = 12;
                } else if (firstIndex == "K") {
                    firstIndexValue = 13;
                } else if (firstIndex == "A") {
                    firstIndexValue = 14;
                }
            }
            if (secondIndex == "S") {
                secondIndexValue = 4;
            } else if (secondIndex == "H") {
                secondIndexValue = 3;
            } else if (secondIndex == "D") {
                secondIndexValue = 2;
            } else if (secondIndex == "C") {
                secondIndexValue = 1;
            }
            let totalPointsCurrentCard = firstIndexValue * secondIndexValue;
            totalPoints += totalPointsCurrentCard;
        }
        console.log(`${name}: ${totalPoints}`)
    }
}
solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']
)