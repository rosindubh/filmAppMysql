const Film = require("./film.model");

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync();
        await Film.create(filmObj);
        console.log("running, please wait...")
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async () => {
    try {
        const list = await Film.findAll();
        console.log(list.map((data) => data.dataValues));
        console.log('running, please wait...')
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

exports.updateFilmRating = async (changeLike, updateValues) => {
    try {
        console.log("updateFilmRating method")
        await Film.update(updateValues, {where: changeLike})
        console.log("running, please wait...")
    } catch (error) {
        
    }
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

// method to search for duplicate enteries
exports.searchFilm = async (findFilm) => {
const list = await Film.findAll({
    where: {
      name: findFilm.name
    }
  })
  console.log(list.map((data) => data.dataValues));
  console.log("running, please wait...")


};

//method to delete film by ID
exports.deleteById = async (findFilm) => {
    try {
        console.log(findFilm.id)
        await Film.destroy({where: findFilm})
        console.log(`Deleting film with id ${findFilm.id}`)
        console.log("running, please wait...")
        } catch (error) {
        console.log(error)
    }
}