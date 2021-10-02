const {Type} = require('../db');


const getAllTypes = async (req, res, next) => {
    try {
        const dataBD = await Type.findAll();  
        res.json(dataBD)
    } catch (error) {
        next({
            status: 500,
            message: "Algo salio mal :( " + error
        });
        
    }

}

module.exports = getAllTypes;