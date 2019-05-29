function solve(input) {
    let dividersArray = findDividers(input);
    let sumOfDividers = findSumOfDividers(dividersArray);
    printIfNumberIsPerfect(input, sumOfDividers);
    
    function findDividers(num) {
        let dividers = [];
        for (let index = 1; index < num; index++) {
            let divider = index;
            if (num % divider == 0) {
                dividers.push(divider);
            }
        }
        return dividers;
    }
    
    function findSumOfDividers(dividersArray) {
        let sumDividers = 0;
        for (let index = 0; index < dividersArray.length; index++) {
            let currentDivider = dividersArray[index];
            sumDividers += currentDivider;
        }
        return sumDividers;
    }
    
    function printIfNumberIsPerfect(num, sum) {
        if (num == sum) {
            console.log("We have a perfect number!")

        } else {
            console.log("It’s not so perfect.");
        }
    }
}
solve(1236498)