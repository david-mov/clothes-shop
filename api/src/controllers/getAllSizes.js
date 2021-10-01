const {Size} = require('../db');

const dataInfoOrd =["big","medium","tall","small","num-1","num-2"].map(e => {
    return { name: e }
    });

const getAllSizes = async (req, res, next) => {

    const dataBD = await Size.findAll();

    

    if(dataBD.length === 0){
        await Size.bulkCreate(dataInfoOrd);
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

module.exports = getAllSizes;