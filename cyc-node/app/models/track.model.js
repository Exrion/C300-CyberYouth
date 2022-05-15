module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
        trackId: {
            type: Sequelize.INTEGER
        },
        trackName: {
            type: Sequelize.STRING
        },
        trackDescription: {
            type: Sequelize.STRING
        },
        trackProvider: {
            type: Sequelize.STRING
        },
        trackLink: {
            type: Sequelize.STRING
        }, 
        trackTags: {
            type: Sequelize.STRING
        },
        trackLemons: {
            type: Sequelize.INTEGER
        }
    });
    return Track;
}