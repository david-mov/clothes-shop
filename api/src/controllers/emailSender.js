const nodemailer = require("nodemailer")


const Email = async() => {
    console.log("ACA")
    var transporter = nodemailer.createTransport(({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user:'clothesshophenry@outlook.com',
            pass:'111111'
        }
    }));

  const options = {
    from: '"Clothesshop" <clothesshophenry@outlook.com>', 
    to: "pachi97torres@hotmail.com", 
    subject: `Your purchase was successful ✔`, 
    text: "jorge",
    html: `<b>"jorge"</b>`,
  }
  
  transporter.sendMail(options, function(err, info){
      if(err){
          console.log(err)
      }
      console.log("buena")
  })

}

module.exports = Email;