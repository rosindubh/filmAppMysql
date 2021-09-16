const command = process.argv[2];
const {addFilm, listFilms, updateFilmRating, deleteFilm, searchFilm} = require("./film/film.methods");
const Film = require("./film/film.model");
const { update } = require("./film/film.model");

const app = async() => {
    switch(command) {
        case "add":
            const filmObj = {
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5],
            };
            addFilm(filmObj);
            break;
        case "list" :
            await listFilms();
            break;
        case "update" :
            const filter = {
                name: process.argv[3],
            };
            updateFilmRating();
            break;
        case "delete" :
            const film = {
                name: process.argv[3],
            }
            await deleteFilm(film);
            break;
        case 'search' : 
            const findFilm = {
                name: process.argv[3],
            }
            await searchFilm(findFilm)
            break;
            };

};

app();
