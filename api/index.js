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

require("dotenv").config();
const server = require("./src/app.js");

const { conn, Category, Size, Type, Rol, User } = require("./src/db.js");
const { PORT } = process.env;
const bcrypt = require("bcryptjs");

async function preload() {
  const categoriesData = [
    "Elegant",
    "Casual",
    "Vintage",
    "Punk",
    "Sport",
    "Futbol",
  ];
  const sizesData = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const typesData = [
    "Dress",
    "Sweater",
    "Hoodie",
    "Shirt",
    "Short",
    "Jean",
    "Shoes",
    "Hats",
  ];
  const rolesData = ["superAdmin", "admin", "user", "banned", "inactive"];

 /* const superAdmin = {
    name: "Juan",
    email: "juan123@gmail.com",
    password: "12345",
<<<<<<< HEAD
    rol: rolesData[0],
  };
=======
    rol: rolesData[0]    
  } 

  */
 
    
>>>>>>> efdf821952b88b9df1b8d54fccf29e1d109a6d56

  for (categoryData of categoriesData) {
    await Category.findOrCreate({
      where: {
        name: categoryData,
      },
    });
  }
  for (sizeData of sizesData) {
    await Size.findOrCreate({
      where: {
        name: sizeData,
      },
    });
  }
  for (typeData of typesData) {
    await Type.findOrCreate({
      where: {
        name: typeData,
      },
    });
  }
  for (rolData of rolesData) {
    await Rol.findOrCreate({
      where: {
        name: rolData,
      },
    });
  }

<<<<<<< HEAD
  // const hashedPassword = await bcrypt.hash(superAdmin.password, 10)

  // const newUser = await User.create({

  //     email: superAdmin.email,
  //     name: superAdmin.name,
  //     password: hashedPassword

  // });

  // const nuevoUsuario = await newUser.setRol(1);
=======
 /* const hashedPassword = await bcrypt.hash(superAdmin.password, 10)

  // const newUser = await User.create({
   
  //     email: superAdmin.email,
  //     name: superAdmin.name,
  //     password: hashedPassword
    
  // });
      
  const nuevoUsuario =  await newUser.setRol(1)
  */
>>>>>>> efdf821952b88b9df1b8d54fccf29e1d109a6d56
} // temporal function

// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    preload();
    console.log(`%the best henry final project listening at ${PORT}`); // eslint-disable-line no-console
  });
});
