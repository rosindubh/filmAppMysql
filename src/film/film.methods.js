const Film = require("./film.model");

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async () => {
    try {
        const list = await Film.findAll();
        console.log(list.map((data) => data.dataValues));
    } catch (error) {
        console.log(error);
    }
};

exports.updateFilm = async (searchTerm, updateValues) => {
    const list = await Film.findAll();
    const films = list.map((data) => data.dataValues);
    
    console.log(films);
};

exports.deleteFilm = async () => {
    console.log("deleteFilm method")
    console.log(film);
}

