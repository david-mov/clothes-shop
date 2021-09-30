const router = require('express').Router();
const { Product } = require('../db')


//ruta para devolver todos los productos
router.get('/', async (req,res,next) =>{ 
    try{
        const allProduct = await Product.findAll({
            include:[
                {
                model: Product,
                attributes:['name','price','description','stock']
            
              }
                
            ]
        })
    }catch(err){
      next(err)
    }
})