const { sequelize} = require("../db/connection");
const {DataTypes} = require("sequelize");

const Actor = sequelize.define("Film", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    born: {
        type: DataTypes.STRING,
        defaultValue: "Not specifield",
    },
    films: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
});

module.exports = Actor;