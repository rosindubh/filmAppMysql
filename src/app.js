const command = process.argv[2];
const {addFilm, listFilms, updateFilmRating, deleteFilm, searchFilm, deleteById} = require("./film/film.methods");
const Film = require("./film/film.model");
const { update } = require("./film/film.model");

const app = async() => {
    switch(command) {
        case "addfilm":
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
            const changeLike= {
                name: process.argv[3],
            };
            updateFilmRating(
                {name: process.argv[3]},
                {like: process.argv[4]},
            );
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
        case 'deletebyid' :
            const id = {
                id: process.argv[3],
            }
            await deleteById(id)
            break;
        default:
            console.clear()
            console.log("request not recognised...")
            console.log("options are:\naddfilm\nlist\nupdate\ndelete\nsearch")
            };

};

app();
