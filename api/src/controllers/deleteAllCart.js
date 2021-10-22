const { CartUsers } = require('../db.js')

const deleteAllCart = async(req,res,next) => {
const {id} = req.params  

try{
    await CartUsers.destroy({
        where: {
            Cart_Users: id,
            state: state < 3
    }
    })
        res.json("se borro")
}catch(err){
    next(err)
}
}
module.exports = deleteAllCart;