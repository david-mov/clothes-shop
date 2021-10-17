const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('userDetail', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type:ENUM("female", "male", "other"),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documentType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberDocument: {
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }    
  },{
    timestamps: false
  });
};
