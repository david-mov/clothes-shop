
const {Category} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        const dataBD = await Category.findAll();        
        res.json(dataBD)
    } catch (error) {
        next({
            status: 500,
            message: "Algo salio mal :( " + error
        });     
    }
}


module.exports = getAllCategories;