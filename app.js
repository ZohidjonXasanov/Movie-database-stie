const mainUrl = "https://api.themoviedb.org/3";
const treding_ip = "treding/all/day";
const treding_week = "/trending/all/week?";
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
    <a href="./movie_index/movie.html" style="color: gray;">
      <img src="${movie_img_ip + poster_path}" alt="">
      </a>
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
function tredingData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      ipData(data.results);
    });
}
function week() {
  var this_week = document.getElementById("this_week");
  var a_week = document.getElementById("a_week");

  var today = document.getElementById("today");
  var today_a = document.getElementById("today_a");

  this_week.style.backgroundColor = "#031d33"
  a_week.style.color = "#2bd8ac"

  today.style.backgroundColor = "white"
  today_a.style.color = "black"
  console.log(data);
  cards.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const { title, vote_average, poster_path, release_date } = data[i];
    cards.innerHTML += `
    <div class="card">
    <div class="card_img">
    <a href="./movie_index/movie.html" style="color: gray;">
      <img src="${movie_img_ip + poster_path}" alt="">
      </a>
    </div>
    <div class="setting">
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="prosent">
      <div class="pro_number">${Math.floor(vote_average) * 10}</div>
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
tredingData(treding_week)
function Today() {
  var today = document.getElementById("today");
  var today_a = document.getElementById("today_a");

  var this_week = document.getElementById("this_week");
  var a_week = document.getElementById("a_week");

  today.style.backgroundColor = "#031d33"
  today_a.style.color = "#2bd8ac"

  this_week.style.backgroundColor = "white"
  a_week.style.color = "black"
}