let movieTitle: string = "Amadeus";
movieTitle = "The Matrix";
// movieTitle = 6;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives++;
// numCatLives = "zero";

let gameOver: boolean = true;
gameOver = false;
// gameOver = "true";

// Type Inference

let tvShow = "The Take";
tvShow = "Friends";
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = "true";

// the any type
// let thing: any  = "hello";
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase();

let thing = "hello";

const movies = ["Fight Club", "Amadeus", "Titanic"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

// foundMovie();
// foundMovie = 1;
// foundMovie.adawdaw()
