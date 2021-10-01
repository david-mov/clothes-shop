
const {Category} = require('../db');

const dataInfoOrd =["ropa","inplementos de futbol","inplementos de cosina","ropa sport","ropa elegante"].map(e => {
    return { name: e }
    });

const getAllCategories = async (req, res, next) => {

    const dataBD = await Category.findAll();

    if(dataBD.length === 0){
        await Category.bulkCreate(dataInfoOrd);
    }

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