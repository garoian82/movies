var movies = [
							'big hero 6',
							'desipicable me',
							'jurassic world',
							'jurassic park',
							'taxi driver',
							'transformers',
							'the shawshank redemption',
							'the game',
							'mr bean',	
							];

function capitalize(str) {
    if (!str || typeof str !== "string") {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    movies[i] = capitalize(movie);
}

console.log(movies);

