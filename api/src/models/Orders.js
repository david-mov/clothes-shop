const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orders', {
   total: {
       type: DataTypes.STRING,
       allowNull: true
   },   
   state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
   }
  });
};