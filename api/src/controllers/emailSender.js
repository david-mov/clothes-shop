const nodemailer = require("nodemailer")


const Email = async(req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user:'clothesshopG3@gmail.com',
            pass:'Henry123456'
        },
        tls: {
            rejectUnauthorized: false
        }
      });

  const options = {
    from: 'clothesshophenry@outlook.com', 
    to: "ftorres767@gmail.com", 
    subject: `Your purchase was successful ✔`, 
    text: "gracias por su compra vuelva prontos",
    html: `<b>"gracias por su compra vuelva prontos"</b>`,
  }
  
 await transporter.sendMail(options, (err, info) => {
      if(err){
          return res.status(500).send(err.message);
      }
      console.log("eso tilin")
     return res.status(200).json(info.message)
  })

}

module.exports = Email;