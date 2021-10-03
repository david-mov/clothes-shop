const {Category} = require('../db');

const createCategory = async (req, res, next) => {
    const {name} = req.body;
    try {      
        const createdCategory = await Category.create({name});
        res.json(createdCategory);
    } catch (error) {
        next(error);     
    }
}

module.exports = createCategory;