const nodemailer = require("nodemailer")


const EmailConfirm = async(req, res) => {
   // const {userEmail, userName} = req.body
var userName = "francisco"
var userEmail = "ftorres767@gmail.com"

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
    from: '"Clothesshop"clothesshophenry@outlook.com', 
    to: userEmail, 
    subject: `${userName} Your purchase was successful ✔`, 
    html: `<h1>Good news ${userName},We have received your order, now we will working on it.</h1>
    <b>We will notify you when the order is ready to be sent to your address.</b>
    <b>Thanks for shopping with us,The Clothesshop team</b>`
  }
  
 await transporter.sendMail(options, (err, info) => {
      if(err){
          return res.status(500).send(err.message);
      }
      console.log("eso tilin")
     return res.status(200).json(info.message)
  })

}

module.exports = EmailConfirm;