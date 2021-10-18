const {Cart, Product, Image, Size} = require('../db');

const postCart = async (req, res, next) => {
    
    const {Cart_product} = req.body;
    try {      
    if(req.query){
        const existe = await Cart.findOne({where:{Cart_product}})
        if(existe){
            const traigoCarrito = await Cart.findAll({
                include: [
                    {model: Product, include: [Image, Size] }
                  ],
                  order: [
                    ['id', 'ASC']
                ]
            })
           return res.json(traigoCarrito)
        }else{ 
            await Cart.create(req.body, {include: [Product]});
            const traigoCarrito = await Cart.findAll({
                include: [
                    {model: Product, include: [Image, Size] }
                  ],
                  order: [
                    ['id', 'ASC']
                ]
            })
             return res.json(traigoCarrito)
        }
    }else{
    }
        const traigoCarrito = await Cart.findAll({
            include: [
                {model: Product, include: [Image, Size] }
              ],
              order: [
                ['id', 'ASC']
            ]
        })
        return res.json(traigoCarrito)
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;