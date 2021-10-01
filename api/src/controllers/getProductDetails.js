const { Product } = require('../db');

const getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);

        res.json(product);
    } catch (error) {
        next(error);
    }

}

module.exports = getProductDetails;