function solve(input){

    let result=input.sort(softF);
    function softF(a,b){
        if(a.length<b.length||a.length>b.length){
            return a.length-b.length;
        }else if(a.length===b.length){
            return a>b;
        }
    }
  result.forEach(x=>console.log(x));
}
solve(["alpha", "beta", "gamma"])