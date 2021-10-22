const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('size', {
   name: {
       type: DataTypes.STRING,
       allowNull: false
   },
   enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
}
  },{
    timestamps: false
  });
};