import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zip0iee",
        "template_1v8ru8w",
        form.current,
        "OZb1xNzrJVNxrvq-q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-us">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <h1>Contactez-nous:</h1>
          </div>
          <label>Nom :</label>
          <input type="text" name="user_name" maxLength={40} />
          <label>Email :</label>
          <input type="email" name="user_email" maxLength={40} />
          <label>Message :</label>
          <textarea name="message" maxLength={500} />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="form-container-img"></div>
      </div>
    </div>
  );
}

export default ContactUs;
