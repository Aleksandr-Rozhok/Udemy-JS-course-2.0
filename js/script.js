"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[lastMovie] = prompt("На сколько оцените его?");

console.log(personalMovieDB);