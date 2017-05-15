let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200){
            let json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        }else{
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
      console.error(error);
    };

    xhr.send();

}

let search = 'Harry Potter';

getData(`http://www.omdbapi.com?s=${search}`, function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie);

   });
});