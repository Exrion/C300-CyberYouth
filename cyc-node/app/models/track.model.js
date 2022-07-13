module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
      
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