const movies = [{
    title:"yamudu",
    hero:"surya",
    rating: 7.0},
    {
        title:"singam",
        hero:"surya",
        rating:8.5},
    {
        title:"Mallana",
        hero:"vikram",
        rating:6.5},
    {
        title:"Happy Days",
        hero:"Varun Sandesh",
        rating:7.8},
    {
        title:"Kalank",
        hero:"varun Dawan",
        rating:6.2},
]


const titles = movies.map(movie => movie.title);
const suryaMovies = movies.filter(movie => movie.hero==="surya").map(movie => movie.title);
const ratingsum = movies.map(movie => movie.rating).reduce((acc,value) => acc+value,0);
const averagerating = ratingsum/movies.length;

const suryamovieRate = movies.filter(movie => movie.hero==="surya").map(movie => movie.rating)
    .reduce((acc,value)=> acc+value ,0);

const avgSuryaRating = suryamovieRate/suryaMovies.length;


console.log("titles:" + titles);
console.log("Rating sum:" + ratingsum);
console.log("AverageRating:" + averagerating);
console.log("List of Surya Movies:" + suryaMovies);
console.log ("Surya Movies Average Rating:" + avgSuryaRating);




