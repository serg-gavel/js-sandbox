let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}
// Переписываем функцию таким образом чтобы она возвращала обещания
function getData(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200){
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            }else{
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });

}

let search = 'Harry Potter';

getData(`http://www.omdbapi.com?s=${search}`)
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));

function go(num) {
    return new Promise(function (resolve, reject) {
       let delay = Math.ceil(Math.random() * 3000);
       console.log(num, delay);
       setTimeout(() => {
           if(delay > 2000)
               reject(num);
           else
               resolve(num);
       },delay);
    });

}

// три обещания

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.all([p1,p2,p3])
    .then(value => console.log(value))
    .catch(error => console.error(error));