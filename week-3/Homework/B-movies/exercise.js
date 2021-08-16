/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function

/*function showMovies(movies){
  const AllMovies = document.querySelector("#all-movies"); 
  const MoviesNumber = document.querySelector("#movies-number"); 

  movies.forEach(movie => { 
    const elementsP = document.createElement("p"); 
   
    elementsP.textContent = ` Title: ${movie.title} - Director: ${movie.director}`; 

    AllMovies.appendChild(elementsP);
  });
  
  MoviesNumber.innerText= movies.length;
};

showMovies(movies);*/

// create a new movie object for your favorite movie

var myMovies = {
    title: "The Chronicles of Riddick",
    director: "David Twohy",
    type: "Action",
    haveWatched: true,
  };

function showMovies(movies){
  const AllMovies = document.querySelector("#all-movies"); 
  const MoviesNumber = document.querySelector("#movies-number"); 

  document.querySelectorAll(`#all-movies p:not(.alert)`).forEach(paragraph => paragraph.remove());

  movies.forEach((movie,index) => {
    const elementsP = document.createElement("p"); 
   
    elementsP.textContent = ` Title: ${movie.title} - Director: ${movie.director}`; 

    setTimeout(() => { AllMovies.appendChild(elementsP)}, 1000*index);
  });

  MoviesNumber.innerText= movies.length;
};

showMovies(movies);

// create addMovies function

function addMovies(movie){
  setTimeout(() => {
    movies.push(movie);
    showMovies(movies);
  }, 4000);
};

addMovies(myMovies);


let submitButtons = document.getElementById('submit');

submitButtons.addEventListener('click', (event) => {

  event.preventDefault();

  const title = document.getElementById('title');
  const director = document.getElementById('director');
  const type = document.getElementById('type');
  const haveWatched = document.getElementById('haveWatched');

  myMovies = {
    title: title.value,
    director: director.value,
    type: type.value,
    haveWatched: haveWatched.checked
  };

  addMovies(myMovies);
});


