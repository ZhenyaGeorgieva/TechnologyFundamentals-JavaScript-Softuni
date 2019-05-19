function solve(start,end){
    let finalString="";
    let sum=0;
    for (let index = start; index <=end; index++) {
finalString+=index+" ";
sum+=index   
    }
    console.log(finalString);
    console.log(`Sum: ${sum}`)
}