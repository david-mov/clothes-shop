import emailjs from "emailjs-com";
import React from 'react';


export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('clothesshophenry', 'template_xlmmu47', e.target, 'user_xytYRDY7Q7WSaaATQ23Gm')

        .then((result) => {
            alert("The message was sent successfully 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div>
            <div className="container">
            <h2>Contact</h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Name</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Name" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Email" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Message</label>
                            <textarea className="form-control" id="" cols="30" rows="8"  name="Message">Thank you for your purchase!</textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}