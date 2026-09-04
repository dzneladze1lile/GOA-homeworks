const moviesDiv = document.getElementById("moviesDiv");

let movies = [];

const renderMovies = () => {
    moviesDiv.innerHTML = "";

    movies.forEach((cur, index) => {
        moviesDiv.innerHTML += `
            <div class="movie">
                <h3>#${index + 1}</h3>
                <img src=${cur.image} alt=${cur.name} width="200">
                <p>Title: <b>${cur.name}</b></p>
                <button value=${cur.name} onclick="deleteMovie(this)">Delete movie</button>
            </div>
        `
    })
}

const addMovie = () => {
    const name = prompt("Enter the movie name: ");
    const image = prompt("Enter the movie image URL: ");

    if(movies.some(cur => cur.name === name)) {
        alert("Movie is already added");
        return
    }

    movies.push({ name, image });

    console.log(movies);
    renderMovies()
}

const deleteAllMovies = () => {
    movies.length = 0;
    moviesDiv.innerHTML = "";
}
