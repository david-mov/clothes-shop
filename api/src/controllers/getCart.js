const {Cart, Product, Image, Size} = require('../db');

const getCart = async(req,res,next) => {
    try{
        const traigoCarrito = await Cart.findAll({
            include: [
                {model: Product, include: [Image,Size] }
              ]
        })
        res.json(traigoCarrito)
    }catch(err){
        next(err)
    }
}

module.exports = getCart;