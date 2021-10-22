const { CartUsers } = require('../db.js')

const deleteAllCart = async(req,res,next) => {
const {id} = req.params  
console.log("aca")
try{
    await CartUsers.destroy({
        where: {
            Cart_Users: id
    }
    })
        res.json("se borro")
}catch(err){
    next(err)
}
}
module.exports = deleteAllCart;