export function showTheMovie(movies) {
  const container = document.getElementById("container-card");
  const mainPage = document.getElementById("main-card");
  mainPage.innerHTML = "";

  movies.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <img
            src='${data.Poster}'
            alt="Poster"
          />
          <span> ${data.Title} </span>
          <button class="btn">See more</button>
        `;
    div.classList.add('card')
    const btn = div.querySelector(".btn");
    
    btn.addEventListener('click', (infos)=>{
     window.location.href = `/infoPage.html?title=${encodeURIComponent(data.Title)}`

    })

    container.appendChild(div);

    /* Lembrete colocar um  event no btn mais tarde */
  });
}
