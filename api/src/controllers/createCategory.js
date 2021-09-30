
const {Category} = require('../db');


const createCategory = async (req, res, next) => {

    const {name} = req.body;
    try {
        
        const createdCategory = await Category.create({name});
        res.json(createdCategory);

    } catch (error) {
        next(error);
        // next({
        //     status: 500,
        //     message: "Algo salio mal :( " + error
        // });
        // // console.log(e);
        // res.status(500).send("Algo salio mal :( ");
    }
    

}




module.exports = createCategory;