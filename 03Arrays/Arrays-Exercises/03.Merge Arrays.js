function solve(arr1,arr2){
    let length=arr1.length;
    let resultArr=[];
    for (let index = 0; index < length; index++) {
        if(index%2==0){
            let firstNum=Number(arr1[index]);
            let secondNum=Number(arr2[index]);
            resultArr.push(firstNum+secondNum)
        }else{
            let firstText=arr1[index].toString();
            let secondText=arr2[index].toString();
            resultArr.push(firstText+secondText)
        }        
    }
    console.log(resultArr.join(" - "));
}
solve(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"]
)