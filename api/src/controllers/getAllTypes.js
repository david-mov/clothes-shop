const {Type} = require('../db');

const dataInfoOrd =["camisa","pantalon","balones","pantalonetas","blusas","zapatos"].map(e => {
    return { name: e }
    });

const getAllTypes = async (req, res, next) => {

    const dataBD = await Type.findAll();    

    if(dataBD.length === 0){
        await Type.bulkCreate(dataInfoOrd);
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

module.exports = getAllTypes;