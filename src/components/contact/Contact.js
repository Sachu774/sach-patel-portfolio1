import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";

import React, { useRef,useState } from 'react'

const Contact=()=> {

    const formRef= useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
      .sendForm(
        "service_6kvrgya",
        "template_b7uofea",
        formRef.current,
        "qNxajiXb9omQoL450"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> Lets connect to each other.</h1>
                <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 6391440470
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              sachupatel774@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              692/W2 Basant Vihar, Naubasta, Kanpur, Uttar Pradesh
            </div>
          </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>Want to contact me?</b> Get in touch. Always available for
            opportunities, mail me below.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
            </div>
        </div>
    </div>
  )
}
export default Contact