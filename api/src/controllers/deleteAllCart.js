const { CartUsers } = require('../db.js')
const { Op } = require("sequelize");


const deleteAllCart = async(req,res,next) => {
const {id} = req.params  

try{
    await CartUsers.destroy({
        where: {
            Cart_Users: id,
            state: {
                [Op.or]: [1, 2]
              }
    }
    })
        res.json("se borro")
}catch(err){
    next(err)
}
}
module.exports = deleteAllCart;