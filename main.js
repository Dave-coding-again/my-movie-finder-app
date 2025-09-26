import { requestApi } from "./api.js";
import { showTheMovie } from "./ui.js";

const input = document.getElementById("input");
const btnSearch = document.getElementById("btn-search");
const mainPage = document.getElementById("main-card");

btnSearch.addEventListener("click", async () => {
  const movie = await requestApi(input.value);
  if (movie && movie.Search) {
      showTheMovie(movie.Search);
  }else{
    mainPage.innerHTML = '<p>No movies found</p>'
  }
  input.value = ''
});
