const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movies_Container = document.querySelector("#movies_Container");
const myinput = document.querySelector("#myinput")


async function getMovies(api) {
    const responce = await fetch(api);
    const data = await responce.json()
    showMovies(data.results)
}

getMovies(APIURL)


function showMovies(movies) {
    movies_Container.innerHTML=""
    movies.forEach((movie, index) => {
        const poster_path = IMGPATH + movie.poster_path;
        const divElem = document.createElement("div");
        divElem.classList.add("col-3");
        divElem.innerHTML = `<div>
                   
                        <img src=${poster_path} alt="">
                        <p> ${movie.title}</p>
                    
                 
                </div>`
        movies_Container.appendChild(divElem)

    });
}

myinput.addEventListener("keyup",
    (event) => {
        if (event.target.value == "") {
            getMovies(APIURL)
        } else {
            getMovies(SEARCHAPI + event.target.value)
        }
    })


