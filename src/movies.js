// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// All directors - getAllDirectors
// Defines getAllDirectors
// Should return an array
// Should return a new array, not update the original one
// Should return a new array with the same length as the original one

function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'; 
  }).length;
}
// OR:
// function howManyMovies(movies) {
//   return movies.filter(function(movie) {
//     return movie.director === "Steven Spielberg";
//   }).filter(function(movie) {
//     return movie.genre.includes("Drama");
//   }).length
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const ratesArray = movies.map(movie => movie.rate).filter(item => typeof item === 'number').reduce((acc, cv) => acc + cv);
    return parseFloat((ratesArray / movies.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
  const dramaMovies = moviesArr.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies)
}

// console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
