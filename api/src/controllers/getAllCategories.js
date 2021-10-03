const {Category} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await Category.findAll({ 
            where: { enabled: true }, 
        });        
        res.json(allCategories)
    } catch (error) {
        next(error);     
    }
}


module.exports = getAllCategories;