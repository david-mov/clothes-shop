const {Product} = require("../db")

const getProductsBySearch = async(req, res, next) => {
const {name} = req.query
    const myProducts = await Product.findAll()
        var filtered = await myProducts.filter((e) => 
        e.name.toLowerCase().includes(name.toLowerCase())
        )
        return res.json(filtered)
}

module.exports = getProductsBySearch;