const {Cart} = require('../db');
const mercadopago = require ('mercadopago');


mercadopago.configure({
    access_token: 'TEST-3235386753856736-101613-6fb4a99a89bf5523f6f66fcd8aa1f5fb-39593671'
  });

const checkout = async(req,res,next) => {
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
}

module.exports = checkout;