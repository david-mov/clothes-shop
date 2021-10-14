const { Cart } = require('../db.js')

const deleteCart = async(req,res,next) => {
const {productId} = req.body
try{
    const busco = await Cart.destroy({
        where: {
        Cart_product: productId
    }
    })
    if(busco){
        res.json(productId)
    }else{
        res.json(false)
    }
}catch(err){
    next(err)
}
}
module.exports = deleteCart;