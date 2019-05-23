function solve(groupSize, groupType, day) {
    let price = 0;
    if (groupType == "Students") {
        if (day == "Saturday") {
            price = groupSize * 9.80;
        } else if (day == "Sunday") {
            price = groupSize * 10.46;
        } else if (day == "Friday") {
            price = groupSize * 8.45;
        }
        if (groupSize >= 30) {
            price *= 0.85;
        }
    } else if (groupType == "Business") {
        if (day == "Saturday") {
            price = groupSize * 15.60;
        } else if (day == "Sunday") {
            price = groupSize * 16;
        } else if (day == "Friday") {
            price = groupSize * 10.90;
        }
        if (groupSize >= 100) {
            price = price - (10 * (price / groupSize));
        }
    } else if (groupType = "Regular") {
        if (day == "Saturday") {
            price = groupSize * 20;
        } else if (day == "Sunday") {
            price = groupSize * 22.50;
        } else if (day == "Friday") {
            price = groupSize * 15;
        }
        if (groupSize >= 10 && groupSize <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday")