function solve(yield) {
    let days = 0;
    let total = 0;
    while (yield >= 100) {
        days++;
        total += yield;
        if (total >= 26) {
            total -= 26;
        }
        yield -= 10;
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}
solve(111)