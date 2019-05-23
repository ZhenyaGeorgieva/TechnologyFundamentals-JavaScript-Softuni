function solve(input) {
    let totalMoney = 0;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;
    let length = input.length;

    for (let index = 0; index < length; index++) {
        let currentDay = index + 1;
        let currentGold = Number(input[index]);
        if ((index + 1) % 3 == 0) {
            currentGold *= 0.7;
        }
        let currentMoney = currentGold * 67.51;
        totalMoney += currentMoney;
        if (totalMoney >= 11949.16) {
            let currentbitcoinsBought = parseInt(totalMoney / 11949.16);
            if (bitcoinsBought == 0) {
                dayOfFirstBitcoin = currentDay;
            }
            bitcoinsBought += currentbitcoinsBought;
            totalMoney -= currentbitcoinsBought * 11949.16;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
solve([50, 100])