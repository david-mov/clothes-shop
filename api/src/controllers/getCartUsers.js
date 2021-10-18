const {CartUsers, Product, Image, Size} = require('../db');
//
const getCartUsers = async(req,res,next) => {
    const {Cart_Users} = req.params
    try{
        const traigoCarrito = await CartUsers.findAll({
            where: { Cart_Users: Cart_Users },
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