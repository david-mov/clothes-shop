const {Product} = require("../db.js")

const createProduct = async(req, res, next) => {
  const {name, description, price, stock} = req.body;
  try {
      
      const createdProduct = await Product.create({name, description, price, stock});
      res.json(createdProduct);

  } catch (error) {
      next(error);
      
  }
}
module.exports = createProduct;
