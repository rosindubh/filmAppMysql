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

// exports.updateFilm = async (updateObj) => {
//     try {
//         await Film.sync
//         await Film.update(updateValues, where: 
//         console.log(`${updateObj.name} like updated to ${updateObj.like}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

exports.updateFilm = async () => {
    console.log("updateFilm method")
}

exports.deleteFilm = async (film) => {
    try {
        console.log("running deleteFilm method...")
        await Film.destroy({where: film})
        console.log(`${film.name} removed from DataBase...`)
    } catch (error) {
        console.log(error)
    }
}



