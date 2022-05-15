module.exports = (sequelize, Sequelize) => {
    const Tracks = sequelize.define("tracks", {
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
    return Tracks;
}