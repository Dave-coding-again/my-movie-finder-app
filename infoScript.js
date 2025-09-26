const btnReturn = document.getElementById("return");
const mainInfo = document.getElementById("main-info");
const params = new URLSearchParams(window.location.search);
const title = params.get("title");

btnReturn.addEventListener("click", () => {
  window.location.href = "/mainPage.html";
});
async function searchInfo() {
try {
      const res = await fetch(
    `https://www.omdbapi.com/?apikey=c23bd4c3&t=${encodeURIComponent(title)}`
  );
  const data = await res.json();

  if (data.Response === 'False') {
    mainInfo.innerHTML = `<p>Filme not found: ${data.Error}</p>`;
    return;
  }
    showInfo(data);
} catch (error) {
    mainInfo.innerHTML = `<p>Erro ao buscar informações.</p>`;
    console.log('ERROR', error);
    
}

}

function showInfo(info) {
  mainInfo.innerHTML = `   <div id="box-card">
        <img
          src='${info.Poster}' alt="Poster"
        />
        <h3>${info.Title}</h3>
      </div>
      <div class="texto">
        <h3>SINOPSE</h3>
        ${info.Plot}
      </div>
      <div id="info-movie">
        <div class="info red">${info.Runtime}</div>
        <div class="info">${info.Rated}</div>
        <div class="info white">${info.Genre}</div>
        <div class="info green">${info.Year}</div>
        <div class="info pink">${info.Type}</div>
      </div>`;
}

searchInfo();
