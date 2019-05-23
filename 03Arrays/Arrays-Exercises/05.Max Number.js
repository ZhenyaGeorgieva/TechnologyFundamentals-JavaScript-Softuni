function solve(arr) {
    let resultArr = [];
    let isSmaller = false;
    for (let i = 0; i < arr.length-1; i++) {
        let firstNum=arr[i];
        for (let y = i+1; y < arr.length; y++) {
            let secondNum=arr[y];
            if (firstNum<= secondNum) {
                isSmaller = true;
                break;
            }
        }
        if (!isSmaller) {
            resultArr.push(arr[i]);
        }
            isSmaller = false;
    }
    resultArr.push(arr[arr.length-1]);
    console.log(resultArr.join(" "));
}
solve([27, 19, 42, 2, 13, 45, 48])