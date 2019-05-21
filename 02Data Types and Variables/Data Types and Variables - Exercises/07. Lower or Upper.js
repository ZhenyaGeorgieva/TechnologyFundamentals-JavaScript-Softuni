function solve(char){
    let asciiCode=char.charCodeAt();
    if(asciiCode>=65&&asciiCode<=90){
        console.log("upper-case")
    }else{
        console.log("lower-case")
    }
}