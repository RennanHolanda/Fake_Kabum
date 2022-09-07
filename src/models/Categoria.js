module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        category: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

    }, {
        tableName: "category",
        timestamps: false
    });

    return Category;
}