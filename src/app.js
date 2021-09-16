const command = process.argv[2];
const {addFilm, listFilms, updateFilm, deleteFilm} = require("./film/film.methods");
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
            await updateFilm();
            break;
        case "delete" :
            await deleteFilm();
            break;

            };

};

app();