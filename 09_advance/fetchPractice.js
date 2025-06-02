// 1️⃣ Simple GET Request:

// Fetch data from https://jsonplaceholder.typicode.com/posts/1 and log the JSON result.
// fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(response){
//     return response.json()
// }).then(response=>console.log(response))

// 2️⃣ Fetch with Headers:

// Fetch data from the above URL, but add a custom header: "X-Custom-Header": "TestHeader".

// fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"GET",
//     header:{"X-Custom-Header": "TestHeader"}}).then(function(response){
//    return response.json()
// }).then(response=>console.log(response))

// POST Request with JSON Body:

// Send a POST request to https://jsonplaceholder.typicode.com/posts with a JSON body:

// json
// Copy
// Edit
// {
//   "title": "My Post",
//   "body": "This is my post content",
//   "userId": 1
// }
// Log the response JSON.

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         "title": "My Post",
//         "body": "This is my post content",
//         "userId": 1
//     })
// }).then(response=>response.json()).then(response=>console.log(response))

// Handling Fetch Errors:

// Try to fetch data from an invalid URL (like https://jsonplaceholder.typicode.com/invalid-endpoint).

// Catch and log the error.
fetch("https://jsonplaceholder.typicode.com/invalid-endpoint").then((response)=>
    {
        if(!response.ok){
           throw new Error(`Error.\nStatus:${response.status}`)
        }
        return response.json()

})
.then(response=>console.log(response)).catch(err =>console.log(err.message))


//  Fetch and Chain:

// Fetch data from https://jsonplaceholder.typicode.com/users.

// For each user, fetch their posts from https://jsonplaceholder.typicode.com/posts?userId={id}.

// Log the posts for each user.
fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(data=>{
    data.forEach(user => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(response => response.json())
        .then(data => console.log(data))
    });
})

