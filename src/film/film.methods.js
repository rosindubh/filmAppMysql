const Film = require("./film.model");

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilm = async () => {
    try {
        const list = await Film.findAll();
        console.log(list);
    } catch (error) {
        console.log(error)
        
    }
}