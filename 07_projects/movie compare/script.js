const searchbtn = document.getElementById("searchBtn")

searchbtn.addEventListener('click',()=>{
    console.log(1)
    const movie1 = document.getElementById("movieInput1").value
    const movie2 = document.getElementById("movieInput2").value
    movieFetch(movie1)
    
})

function movieFetch(movieName){
    fetch(`http://www.omdbapi.com/?apikey=12345678&t=${movieName}`).then(
        response=> response.json()
    ).then(data=>console.log(data)).catch(err=>console.log(err.message))
}