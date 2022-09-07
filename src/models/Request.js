
module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("Request", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        total_value: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        purchase_date: {
            type: DataTypes.DATE,
            allowNull: false

        },

        user_id: {
            type: DataTypes.INTEGER(10),
            references: {
              model: { tableName: 'user' },
              key: 'id'
            },
            allowNull: false
          }

    }, {
        tableName:"requests",
        timestamps: false
    });

    return Request;
}