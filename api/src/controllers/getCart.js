const {Cart, Product, Image} = require('../db');

const getCart = async(req,res,next) => {
    try{
        const traigoCarrito = await Cart.findAll({
            include: [
                {model: Product, include: [Image] }
              ]
        })
        console.log("ER CARRO",traigoCarrito)
        res.json(traigoCarrito)
    }catch(err){
        next(err)
    }
}

module.exports = getCart;