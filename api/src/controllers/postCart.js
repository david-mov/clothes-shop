const {Cart, Product} = require('../db');

const postCart = async (req, res, next) => {
    //const {quantity, subtotal, Cart_product} = req.body;
    console.log("PROPSSSS",req.body)
    try {      
        const createdCart = await Cart.create(req.body, {include: [Product]});
        res.json(createdCart);
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;