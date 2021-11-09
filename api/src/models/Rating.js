const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('rating', {   
    amount: {
     type: DataTypes.INTEGER,
     defaultValue: 1
 },
    comment: {
      type: DataTypes.STRING
    }
  });
};