module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
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
        tableName: "admin",
        timestamps: true
    });

    return Admin;
}