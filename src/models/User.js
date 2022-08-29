module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        lastname: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },

    }, {
        tableName: "users",
        timestamps: true
    });

    return User;
}