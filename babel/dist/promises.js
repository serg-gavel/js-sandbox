'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}
// Переписываем функцию таким образом чтобы она возвращала обещания
function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

var search = 'Harry Potter';

getData('http://www.omdbapi.com?s=' + search).then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.error(error);
});

function go(num) {
    return new Promise(function (resolve, reject) {
        var delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(function () {
            if (delay > 2000) reject(num);else resolve(num);
        }, delay);
    });
}

// три обещания

var p1 = go(1);
var p2 = go(2);
var p3 = go(3);

Promise.all([p1, p2, p3]).then(function (value) {
    return console.log(value);
}).catch(function (error) {
    return console.error(error);
});