const {Product} = require("../db.js")

const products = [{
    name: "PlayStation 5",
    description:
      "PlayStation 5 (PS5) is a home video game .",
    price: 499,
    stock: 15,
  },
  {
    name: "Iphone 12",
    description:
      "Welcome to a new era of iPhone.",
    price: 1099,
    stock: 10,
  },
  {
    name: "Cannon EOS-1D",
    description:
      "The EOS-1D X combines speed with image quality.",
    price: 1300,
    stock: 5,
  },
  {
    name: "Amazon Alexa",
    description:
      "It is capable of voice interaction.",
    price: 50,
    stock: 25,
  },
  {
    name: "Audio Technica Headphones",
    description:
      "Outfitted with 45mm large-aperture .",
    price: 233,
    stock: 4,
  },
  {
    name: "JBL FLIP 4",
    description:
      "JBL Flip 4 is the next.",
    price: 140,
    stock: 10,
  }
  ]

const getAllProducts = async(req, res, next) => {
    try{
        productsMap = products.map(e => {
            return {
              name: e.name,
              description: e.description,
              price: e.price,
              stock: e.stock
            }
          })
          await Product.bulkCreate(productsMap)
          const traigo = await Product.findAll()
          res.json(traigo).status(200)
    }catch(err){
        console.log(err)
    }
    res.send("err")
}

module.exports = getAllProducts;