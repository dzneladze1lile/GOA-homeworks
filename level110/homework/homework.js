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

const alertRandomMovie = () => {
    if(movies.length) {
        const index = Math.floor(Math.random() * movies.length);
        alert(`Movie Title: ${movies[index].name}\nimageURl: ${movies[index].image}`);
    } else {
        alert("Movie list is empty");
    }
}

const deleteMovie = (bt) => {
    const delMovieName = bt.value;
    movies = movies.filter(cur => cur.name !== delMovieName);
    renderMovies();
}