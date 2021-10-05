//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

require('dotenv').config();
const server = require('./src/app.js');
const { conn, Category, Size, Type, Rol } = require('./src/db.js');
const { DB_PORT } = process.env;

async function preload() {
  const categoriesData = ["vintage", "futbol", "casual", "sport", "elegant", "punk"];
  const sizesData = ["big", "medium", "tall", "small", "num-1", "num-2"];
  const typesData = ["sweater", "dress", "hoodie", "shirt", "short", "jean", "shoes"];
  const rolesData = ["superAdmin", "admin", "user"];

  for (categoryData of categoriesData) {
    await Category.findOrCreate({
      where: {
        name: categoryData
      }
    })
  }
  for (sizeData of sizesData) {
    await Size.findOrCreate({
      where: {
        name: sizeData
      }
    })
  }
  for (typeData of typesData) {
    await Type.findOrCreate({
      where: {
        name: typeData
      }
    })
  }
  for (rolData of rolesData) {
    await Rol.findOrCreate({
      where: {
        name: rolData
      }
    })
  }
} // temporal function

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(DB_PORT, () => {
    preload();
    console.log(`%Best final project of soyHenry listening at ${DB_PORT}`); // eslint-disable-line no-console
  });
});
