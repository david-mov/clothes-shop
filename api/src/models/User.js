const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
  }
  },{
    timestamps: false
  });
};
