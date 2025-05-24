
let x = undefined;

if(Number.isNaN(x)){
    console.log("Nan");
}
else if(x == null){
    console.log("Null or undefined")
}
else if(x % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd")
}