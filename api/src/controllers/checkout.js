const {Cart} = require('../db');
const mercadopago = require ('mercadopago');


mercadopago.configure({
    access_token: 'TEST-3235386753856736-101613-6fb4a99a89bf5523f6f66fcd8aa1f5fb-39593671'
  });
  var id_orden=1
  
  const checkout = async(req,res,next) => {
    let carrito = await Cart.findAll()
  
    const items_ml = [{
      title: "holaaa",
      unit_price: 5,
      quantity: 5,
    }]
    console.info('carrito', items_ml)
    // Crea un objeto de preferencia
    let preference = {
      items: items_ml,
      external_reference : `${id_orden}`, //`${new Date().valueOf()}`,
      back_urls: {
        success: 'http://localhost:3001/mercadopago/pagos',
        failure: 'http://localhost:3001/mercadopago/pagos',
        pending: 'http://localhost:3001/mercadopago/pagos',
      }
    };
    console.info('preference:', preference)
    mercadopago.preferences.create(preference)
    .then(function(response){
        console.info('respondio')
      // Este valor reemplazará el string"<%= global.id %>" en tu HTML
        global.id = response.body.id;
        console.log(response.body)
        res.json({id: global.id, init_point: response.body.init_point});
      }).catch(function(error){
        console.log(error);
      })
}

module.exports = checkout;