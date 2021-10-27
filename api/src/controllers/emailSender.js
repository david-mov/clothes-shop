const nodemailer = require("nodemailer")


const Email = async(req, res) => {
    const {userEmail, userName} = req.body

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
    to: userEmail, 
    subject: `Your order is on the way ✔`, 
    html: `<b>${userName} your order has been shipped</b>
    <b>For any questions you can answer this message</b>
    <b>Thanks for shopping with us,The Clothesshop team</b>
    `
  }
  
 await transporter.sendMail(options, (err, info) => {
      if(err){
          return res.status(500).send(err.message);
      }
     return res.status(200).json(info.message)
  })

}

module.exports = Email;