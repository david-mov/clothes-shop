const {CartUsers, Product, Image, Size, User} = require('../db');

const postCartUsers = async (req, res, next) => {
    
    const {CartU_product, Cart_Users} = req.body;
    try {      
    if(req.query){
       
        const existe = await CartUsers.findOne({where:{CartU_product, Cart_Users}})
        if(existe){
            const traigoCarrito = await CartUsers.findAll({
                where: { Cart_Users: Cart_Users },
                include: [
                    {model: Product, include: [Image, Size] }
                  ],
                  order: [
                    ['id', 'ASC']
                ]
            })
            res.json(traigoCarrito)
        }else{ 
            await CartUsers.create(req.body, {include: [Product, User]});
            const traigoCarrito = await CartUsers.findAll({
                where: { Cart_Users: Cart_Users },
                include: [
                    {model: Product, include: [Image, Size] }
                  ],
                  order: [
                    ['id', 'ASC']
                ]
            })
            res.json(traigoCarrito)
        }
    }else{
    }
        const traigoCarrito = await CartUsers.findAll({
            where: { Cart_Users: Cart_Users },
            include: [
                {model: Product, include: [Image, Size] }
              ],
              order: [
                ['id', 'ASC']
            ]
        })
        res.json(traigoCarrito)
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCartUsers;