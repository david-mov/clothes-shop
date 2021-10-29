const nodemailer = require("nodemailer")
const bcryptjs = require("bcryptjs")
const { User } = require("../db.js");

const Email = async(req, res) => {
    const {userEmail, userName, id} = req.body

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
    subject: `your password has been changed ✔`, 
    html: `<b>${userName} your password has been changed</b>
    <b>The new password is clothesshopG12345</b>
    <b>For any questions you can answer this message</b>
    <b>The Clothesshop team</b>
    `
  }
  var contra = "clothesshopG12345"
  const hashedPassword = await bcryptjs.hash(contra, 10);
  const respuesta = await User.update(
    { password: hashedPassword },
    { where: {id} })

  if(respuesta){
      await transporter.sendMail(options, (err, info) => {
           if(err){
               return res.status(500).send(err.message);
           }
          return res.status(200).json(info.message)
       })
  }
}

module.exports = Email;