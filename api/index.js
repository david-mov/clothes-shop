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
  const categoriesData = ["vintage","futbol","casual","sport","elegant","punk"].map(e => {
    return { name: e }
  });
  const sizeData = ["big","medium","tall","small","num-1","num-2"].map(e => {
    return { name: e }
  });
  const typesData = ["sweater","dress","hoodie","shirt","short","jean","shoes"].map(e => {
    return { name: e }
  });
  const rolesData = ["superAdmin","admin","user"].map(e => { return { name: e } });

  await Category.bulkCreate(categoriesData);
  await Size.bulkCreate(sizeData);
  await Type.bulkCreate(typesData);
  await Rol.bulkCreate(rolesData);
} // temporal function

// Syncing all the models at once. 
conn.sync({ force: false }).then(() => {
  server.listen(DB_PORT, () => {
    preload();
    console.log(`%Best final project of soyHenry listening at ${DB_PORT}`); // eslint-disable-line no-console
  });
});
