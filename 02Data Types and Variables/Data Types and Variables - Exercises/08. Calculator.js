function solve(a,operator,b){
    let result;
    if(operator=="+"){
        result=a+b;
    }else if(operator=="-"){
        result=a-b;
    }else if(operator=="/"){
         result=a/b;
    }else if(operator=="*"){
        result=a*b;
    }
    console.log(`${result.toFixed(2)}`);
}