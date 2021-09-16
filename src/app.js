const command = process.argv[2];
const {addFilm, listFilm} = require("./film/film.methods");

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
            await listFilm();
            break;
            //find all films from mysql db 

    }
};

app();