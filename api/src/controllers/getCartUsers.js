const {CartUsers, Product, Image, Size} = require('../db');
//
const getCartUsers = async(req,res,next) => {
    try{
        const traigoCarrito = await CartUsers.findAll({
            include: [
                {model: Product, include: [Image,Size] }
              ]
        })
        res.json(traigoCarrito)
    }catch(err){
        next(err)
    }
}

module.exports = getCartUsers;