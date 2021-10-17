const {CartUsers, Product, Image, Size, User} = require('../db');

const postCartUsers = async (req, res, next) => {
    
    const {CartU_product, Cart_Users} = req.body;
    try {      
    if(req.query){
       
        const existe = await CartUsers.findOne({where:{CartU_product, Cart_Users}})
        if(existe){
            console.log("si lo encuentra")
            // const traigoCarrito = await CartUsers.findAll({
            //     include: [
            //         {model: Product, include: [Image, Size] }
            //       ],
            //       order: [
            //         ['id', 'ASC']
            //     ]
            // })
            // res.json(traigoCarrito)
        }else{ 
            console.log("no lo encuentra")
            await CartUsers.create(req.body, {include: [Product, User]});
            // const traigoCarrito = await CartUsers.findAll({
            //     include: [
            //         {model: Product, include: [Image, Size] }
            //       ],
            //       order: [
            //         ['id', 'ASC']
            //     ]
            // })
            // res.json(traigoCarrito)
        }
    }else{
    }
        console.log("entra en el esle")
        // const traigoCarrito = await CartUsers.findAll({
        //     include: [
        //         {model: Product, include: [Image, Size] }
        //       ],
        //       order: [
        //         ['id', 'ASC']
        //     ]
        // })
        // res.json(traigoCarrito)
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCartUsers;