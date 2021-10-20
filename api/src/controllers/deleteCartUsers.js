const { CartUsers, Product, Image, Size} = require('../db.js')

const deleteCartUsers = async(req,res,next) => {
const {CartU_product,Cart_Users} = req.body   

try{
    const busco = await CartUsers.destroy({
        where: {
            CartU_product,Cart_Users
    }
    })
    if(busco){
        const traigoCarrito = await CartUsers.findAll({
            where: { Cart_Users: Cart_Users },
            include: [
                {model: Product, include: [Image, Size] }
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
module.exports = deleteCartUsers;