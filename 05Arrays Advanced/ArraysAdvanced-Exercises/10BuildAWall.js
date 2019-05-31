function solve(input) {

    let concreteTotal = [];
    let numberArr = [];
    for (let i of input) {
        let num = Number(i);
        numberArr.push(num);
    }
    while (numberArr.length > 0) {
        let concretePerDay = 0;
        for (let i = 0; i < numberArr.length; i++) {
            if (numberArr[i] >= 30) {
                numberArr.splice(i, 1);
                i -= 1;
                continue;
            }

            let currentBlockHeight = Number(numberArr[i]) + 1;
            let index = i;
            numberArr.splice(i, 1, currentBlockHeight);
            concretePerDay += 195;
            if (numberArr[i] >= 30) {
                numberArr.splice(i, 1);
                i -= 1;
                continue;
            }
        }
        concreteTotal.push(concretePerDay);
    }
    console.log(concreteTotal.join(", "));
    let sumConcrete = concreteTotal.reduce((a, b) => a + b);
    let totalSumPesos = sumConcrete * 1900;
    console.log(`${totalSumPesos} pesos`)
}
solve([17, 22, 17, 19, 17])