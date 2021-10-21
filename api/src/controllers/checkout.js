const { CartUsers, Product, Size } = require('../db');
const mercadopago = require('mercadopago');


mercadopago.configure({
  access_token: 'TEST-3235386753856736-101613-6fb4a99a89bf5523f6f66fcd8aa1f5fb-39593671'
});

//esto se debe incrementar automaticamente si el usuario ya tiene compras (deskmont)
var id_orden = 1

const checkout = async (req, res, next) => {

  const { idFinal } = req.params;

  const DataCarritoUser = await CartUsers.findAll({
    where: { Cart_Users: idFinal },
    include: [{
      model: Product,
      attributes: ['name', 'price']

    }
    ]
  });
  
  const items_ml = DataCarritoUser.map((e) => {
    return {
      title: e.dataValues.product.dataValues.name,
      unit_price: e.dataValues.product.dataValues.price,
      quantity: e.dataValues.quantity,
      subtotal: e.dataValues.subtotal
    }
  })

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference: `${id_orden}`, //`${new Date().valueOf()}`,
    back_urls: {
      success: 'http://localhost:3000/profile',
      failure: 'http://localhost:3000/CheckoutPage',
      pending: 'http://localhost:3000/profile',
    }
  };
  
  mercadopago.preferences.create(preference)
    .then(function (response) {
      // Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;
      console.log("datatta", response);
      res.json({ id: global.id, init_point: response.body.init_point });
    }).catch(function (error) {
      console.log(error);
    })
}

module.exports = checkout;