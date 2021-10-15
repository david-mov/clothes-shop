const { Cart, Product, Image } = require('../db.js')

const deleteCart = async(req,res,next) => {
const {productId} = req.params   
try{
    const busco = await Cart.destroy({
        where: {
        Cart_product: productId
    }
    })
    if(busco){
        const traigoCarrito = await Cart.findAll({
            include: [
                {model: Product, include: [Image] }
              ]
        })
        res.json(traigoCarrito)
    }else{
        res.json(false)
    }
}catch(err){
    next(err)
}
}
module.exports = deleteCart;