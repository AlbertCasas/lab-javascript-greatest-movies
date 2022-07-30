const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => {
  const rawList = moviesArray.map((movie) => {
    movie.director;
  });
  const cleanList = rawList.filter((director, index) => {
    rawList.indexOf(director) === index;
  });
  return cleanList;
};
//console.log(`1. Clean List of All Directors: ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
  const steven = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const stevenDrama = steven.filter((movie) => movie.genre.includes("Drama"));
  return stevenDrama;
};
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  return parseFloat(
    (moviesArray.reduce((sum, movie) => {
        if (!movie.score) {
        return sum;
        }

        return sum + movie.score;
    }, 0) / moviesArray.length
    ).toFixed(2)
);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaScores = 0;
  let numDramaMovies = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    for (let j = 0; j < moviesArray[i].genre.length; j++) {
      if (moviesArray[i].genre[j] === "Drama") {
        numDramaMovies++, (dramaScores += moviesArray[i].score);
      }
    }
  }
  return (dramaScores / numDramaMovies).toFixed(2);
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray];
    return sortedMovies
    .sort((a, b) => {
        if (!a.title || !b.title) {
        return 0;
        }
        return a.title.localeCompare(b.title);
    })
    .sort((a, b) => a.year - b.year);
  }
  //console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const get20Movies = moviesArray.map((data)=>data.title).sort()
    get20Movies.length = 20
    return get20Movies
  } 

  //console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
