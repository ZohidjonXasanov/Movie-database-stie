const mainUrl = "https://api.themoviedb.org/3";
const treding_ip = "treding/all/day";
const treding_week = "treding/movie/week";
const movie_like_ip = "movie/popular";
const movie_img_ip = "https://image.tmdb.org/t/p/w200";
const ip_key = "api_key=1e2134de7f7ebdd603b80aa615235a96";
var cards = document.getElementsByClassName("cards")[0];

const main_url = `https://api.themoviedb.org/3/trending/all/day?` + ip_key;

function ip(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      ipData(data.results);
    });
}

function ipData(data) {
  console.log(data);
  cards.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const { title, vote_average, poster_path, release_date } = data[i];
    cards.innerHTML += `
        <div class="card">
        <div class="card_img">
          <img src="${movie_img_ip + poster_path}" alt="">
        </div>
        <div class="setting">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="prosent">
          <div class="pro_number"></div>
        </div>
        <div class="movie_title">
          <h4 class="card_title">${title}</h4>
        </div>
        <div class="movie_data">
          <h5 class="card_data">${release_date}</h5>
        </div>
      </div>
    </div>`;
  }
}

ip(main_url);
