const Actor = require("./actor.model");

exports.addActor = async (actorObj) => {
    try {
        await Actor.sync();
        await Actor.create(actorObj);
        console.log("running, please wait...")
    } catch (error) {
        console.log(error);
    }
};

exports.listActors = async () => {
    try {
        const list = await Actor.findAll();
        console.log(list.map((data) => data.dataValues));
        console.log('running, please wait...')
    } catch (error) {
        console.log(error);
    }
};

exports.updateActor = async (films, updateValues) => {
    console.log("updateActor method")
    try {
        await Actor.update(updateValues, {where: films})
        console.log(`updating living value of ${films.name}`)
        console.log("running, please wait...")
    } catch (error) {
        
    }
}

exports.deleteActor = async (actor) => {
    try {
        console.log("running deleteFilm method...")
        await Film.destroy({where: actor})
        console.log(`${actor.name} removed from DataBase...`)
    } catch (error) {
        console.log(error)
    }
}