function solve(input){
let arr=input[0].split(" ");
let sum=Number(input[1]);
for (let i = 0; i< arr.length; i++) {
    let first=Number(arr[i]);
    for (let y = i+1; y < arr.length; y++) {
       let second=Number(arr[y]);
       let currentSum=first+second;
       if(currentSum==sum){
           console.log(`${first} ${second}`)
       }     
    }
}
}
solve(['14 20 60 13 7 19 8', '27'])