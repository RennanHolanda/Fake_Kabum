
module.exports = (sequelize, DataTypes) => {
    const OrderHasProduct = sequelize.define("OrderHasProduct", {
      
        request_id: {
            type: DataTypes.INTEGER(10),
            references: {
              model: { tableName: 'requests' },
              key: 'id'
            },
            allowNull: false
          },
          product_id: {
            type: DataTypes.INTEGER(10),
            references: {
              model: { tableName: 'products' },
              key: 'id'
            },
            allowNull: false
          }


        }, {
            tableName:"orders_has_products",
            timestamps: false
        });
        
    OrderHasProduct.removeAttribute('id')
    return OrderHasProduct;
}