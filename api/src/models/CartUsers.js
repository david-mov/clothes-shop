const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cartUsers', {
   subtotal: {
       type: DataTypes.STRING,
       allowNull: true
   },
   quantity: {
    type: DataTypes.INTEGER
   },
   sizesUser: {
    type: DataTypes.STRING
   }
  });
};