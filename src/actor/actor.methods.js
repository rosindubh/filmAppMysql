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
