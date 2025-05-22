
// Immediately Invoke Function Expression(IIIE)

//ised to directly invoke function and to prevent from global pollution
// can be invoked and used only once 

(function bobby(){
    //named iife
    console.log("Hello World")
})();

(() =>{
    console.log("Db connected")
})();
((num1,num2)=>{
    console.log(num1+num2)

})(1,2)