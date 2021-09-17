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