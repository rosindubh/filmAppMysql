const Actor = require("./actor.model");

exports.Actor = async (actorObj) => {
    try {
        await Film.sync();
        await Film.create(actorObj);
        console.log("running, please wait...")
    } catch (error) {
        console.log(error);
    }
};