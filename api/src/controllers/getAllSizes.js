const {Size} = require('../db');

const getAllSizes = async (req, res, next) => {
    try {
        const dataBD = await Size.findAll();
        res.json(dataBD)
    } catch (error) {
        next({
            status: 500,
            message: "Algo salio mal :( " + error
        });    
    }
}

module.exports = getAllSizes;