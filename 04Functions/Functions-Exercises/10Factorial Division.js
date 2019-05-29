function solve(firstNum, secondNum) {

    let factorielFirstNum = findFactoriel(firstNum);
    let factorielSecondNum = findFactoriel(secondNum);
    let divisionResult = (a, b) => a / b;
    let result = divisionResult(factorielFirstNum, factorielSecondNum);
    console.log(result.toFixed(2));
    
    function findFactoriel(number) {
        let factoriel = 1;
        for (let index = 1; index <= number; index++) {
            factoriel *= index;
        }
        return factoriel;
    }
}
solve(6, 2)