
const {Category} = require('../db');


const getAllCategories = async (req, res, next) => {

    const dataBD = await Category.findAll();

    try {
        res.json(dataBD)
    } catch (error) {
        next({
            status: 500,
            message: "Algo salio mal :( " + error
        });
        
    }
    

}




module.exports = getAllCategories;