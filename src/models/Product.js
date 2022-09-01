module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          title: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          description: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          value: {
            type: DataTypes.DECIMAL,
            allowNull: false
          },
          image: {
            type: DataTypes.STRING(250),
            allowNull: false
          },
          category_id: {
            type: DataTypes.INTEGER(10),
            references: {
              model: { tableName: 'category' },
              key: 'id'
            },
            allowNull: false
          }
        
    },{
      timestamps: false
    }
    );

    return Product;
}