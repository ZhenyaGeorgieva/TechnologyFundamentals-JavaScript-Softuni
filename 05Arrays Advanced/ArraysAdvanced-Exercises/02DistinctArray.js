function solve(arr) {
    let resultArr=[];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        if(!resultArr.includes(currentElement)){
resultArr.push(currentElement);
        }
    }
    console.log(resultArr.join(" "));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])