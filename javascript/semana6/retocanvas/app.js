import peliculas from "./data.json" assert { type: "json" };

const container = document.querySelector(".container");
const inputBuscar = document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

btnBuscar.onclick = () => {
  const texto = inputBuscar.value;

  const moviesFiltradas = peliculas.Search.filter(
    (movie) => movie.Title.toLowerCase() === texto.toLowerCase()
  );

  readMovies(moviesFiltradas);
};

function readMovies(listPeliculas = peliculas.Search) {
  container.innerHTML = "";
  listPeliculas.forEach((movie) => {
    container.innerHTML += `<div class ="movie">
        <img src="${movie.Poster}" alt="" />
        <h4>${movie.Title}</h4>
        <p>
          ${movie.Year}
        </p>
      </div>
    `;
  });
}

readMovies();