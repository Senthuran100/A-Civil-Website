import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const subInput = useRef(null);
  const messageInput = useRef(null);

  const callOnSubmit = (event) => {
    event.preventDefault();

    console.log(
      "event",
      nameInput?.current?.value,
      emailInput?.current?.value,
      subInput?.current?.value,
      messageInput?.current?.value
    );

    emailjs
      .sendForm("sen", "template_3035q67", event.target, "BUm4ddtKNjJbkRkT7")
      .then(
        (result) => {
          console.log(result.text);
          alert("Contact information sent successfully.");
        },
        (error) => {
          console.log(error.text);
          alert("Failure to send contact information.");
        }
      );
    event.target.reset();
  };
  return (
    <div className="container contact">
      <form onSubmit={callOnSubmit}>
        <h2 className="main-title text-center">CONTACT</h2>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                ref={nameInput}
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
              />
            </div>

            <div className="col-md-4 mb-1">
              <input
                name="email"
                type="email"
                ref={emailInput}
                placeholder="Email"
                className="contact-input"
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                ref={subInput}
                type="text"
                name="subject"
                placeholder="Subject"
                className="contact-input"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <textarea
            ref={messageInput}
            name="message"
            placeholder="Message"
            className="contact-textarea"
          />
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;
