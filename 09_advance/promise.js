const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello world")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Completed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello World Again")
        resolve()
    },1000)
})  .then(function(){
    console.log("Promise Two Completed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello World Third Time")
        resolve({username:"Bobby",email:"bobby@email.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true;
         if (!err){

        resolve({username:"Bobby",pass: 123})
    }
    else{
        reject("Error:Somethings wrong i can feel it.")
    }
    },1000)
   
})

promiseFour
.then(function(user){
     console.log(user)
    return user.username;
}).then(function(username){
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(() => console.log("Either the promise is resolve or rejected"));
const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let err = true;
         if (!err){

        resolve({username:"JavaScript",pass: 123})
    }
    else{
        reject("Error:Js wrong i can feel it.")
    }
    },1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }

    
}
consumePromiseFive()


async function getAllUsers(){
    const response = await fetch("https://api.github.com/users/nor1318")
    try {
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(response){
    return response.json() 
})
.then(function(data){
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})