const mainUrl = "https://api.themoviedb.org";
const treding_ip = "treding/all/day";
const treding_week = "treding/movie/week";
const movie_like_ip = "movie/popular"
const movie_img_ip = "https://image.tmdb.org/t/p/w200"
const ip_key = "1e2134de7f7ebdd603b80aa615235a96"
var cards = document.getElementsByTagName("cards");

const main_url = mainUrl + 'treding/all/day' + ip_key;

function ip(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            ipData(data.results)
        })
}

function ipData(data) {
    console.log(data);
    cards.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const {title, vote_average,poster_path,release_date} = data[i]
        cards.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${movie_img_ip + poster_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    }
}

ip(main_url)