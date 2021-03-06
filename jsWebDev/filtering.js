// map and filter 

const movies = [
  {
    title: "Alien",
    year: 1980
  },
  {
    title: "1970 Something",
    year: 1970
  },
  {
    title: "1990 Something",
    year: 1990
  }
]

const moviesAfter1980 = movies
  .filter(m => m.year >= 1980)
  .map(m => m.title)
  
console.log(moviesAfter1980)

document.getElementById