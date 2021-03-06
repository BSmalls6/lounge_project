module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        // Giving the Author model a name of type STRING
        // user is one of 3 main tables that stores data
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    });

    User.associate = (models) => {
        // Associating Author with Posts
        User.hasMany(models.song);
        //   User.hasOne(session);
        User.belongsToMany(models.lounge, { through: models.session });

    };

    return User;
};