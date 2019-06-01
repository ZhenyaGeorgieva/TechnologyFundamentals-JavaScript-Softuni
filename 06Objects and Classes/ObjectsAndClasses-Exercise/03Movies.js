function solve(input) {
    let movies = [];
    for (let index = 0; index < input.length; index++) {
        let currentCommand = input[index];
        if (currentCommand.includes('add movie')) {
            let tokens = currentCommand.split('add movie ');
            let movieName = tokens[1];
            addMovie(movieName);
        } else if (currentCommand.includes('directed by')) {
            let [movieName, directorName] = currentCommand.split(' directed by ');
            addDirector(movieName, directorName);
        } else {
            let [movieName, movieDate] = currentCommand.split(' on date ');
            addDate(movieName, movieDate);
        }
    }
    for (let movie of movies) {
        if (movie.hasOwnProperty('name')
            && movie.hasOwnProperty('director')
            && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }
    
    function addDirector(movieName, directorName) {
        let foundMovie = movies
            .find(x => x.name === movieName);

        if (foundMovie) {
            foundMovie.director = directorName;
        }
    }
   
    function addDate(movieName, movieDate) {
        let foundMovie = movies
            .find(x => x.name === movieName);
        if (foundMovie) {
            foundMovie.date = movieDate;
        }
    }
}
solve(['add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen']
)