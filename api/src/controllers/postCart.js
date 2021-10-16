const {Cart, Product, Image} = require('../db');

const postCart = async (req, res, next) => {
    const {quantity, subtotal, Cart_product} = req.body;
    // const {userId} = req.user;
    console.log("EL USER", req.User)
    console.log("PROPSSSS",req.body)
    try {      
    if(req.query){
        const existe = await Cart.findOne({where:{Cart_product}})
        if(existe){
            const traigoCarrito = await Cart.findAll({
                include: [
                    {model: Product, include: [Image] }
                  ],
                  order: [
                    ['id', 'ASC']
                ],
            })
            res.json(traigoCarrito)
        }else{ 
            await Cart.create(req.body, {include: [Product]});
            const traigoCarrito = await Cart.findAll({
                include: [
                    {model: Product, include: [Image] }
                  ],
                  order: [
                    ['id', 'ASC']
                ],
            })
            res.json(traigoCarrito)
        }
    }else{
    }
        const traigoCarrito = await Cart.findAll({
            include: [
                {model: Product, include: [Image] }
              ],
              order: [
                ['id', 'ASC']
            ],
        })
        res.json(traigoCarrito)
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;