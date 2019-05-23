function solve(lostBattles, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreakCount = 0;
    for (let index = 1; index <= lostBattles; index++) {
        if (index % 2 == 0) {
            expenses += helmetPrice;
        }
        if (index % 3 == 0) {
            expenses += swordPrice;
        }
        if (index % 6 == 0) {
            expenses += shieldPrice;
            shieldBreakCount++;
            if (shieldBreakCount % 2 == 0) {
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
solve(7,
    2,
    3,
    4,
    5)