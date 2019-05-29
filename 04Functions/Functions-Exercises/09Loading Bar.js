function solve(input) {
    if (input < 100) {
        loadingBarIfBelow100Percent(input);
    } else {
        loadingBarIfCompleted();
    }

    function loadingBarIfBelow100Percent(input) {
        let loadString = "";
        loadString += "["
        for (let index = 1; index <= 10; index++) {
            let currentLoad = input / 10;
            if (index <= currentLoad) {
                loadString += "%";
            } else {
                loadString += "."
            }
        }
        loadString += "]";
        console.log(`${input}% ${loadString}`);
        console.log("Still loading...");
    }
    function loadingBarIfCompleted() {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}
solve(40)