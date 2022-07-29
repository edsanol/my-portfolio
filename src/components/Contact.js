import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setStatus({ succes: true, message: "Message sent successfully" });
      setButtonText("Send");
    } catch (error) {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    } finally {
      e.target.reset();
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="item-social__container">
              <div className="item-social__header">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="item-social__info">
                <p>LinkedIn</p>
              </div>
              <div className="item-social__info">
                <a
                  href="https://www.linkedin.com/in/edinael-sanguino/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a message
                </a>
              </div>
            </div>

            <div className="item-social__container">
              <div className="item-social__header">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="item-social__info">
                <p>GitHub</p>
              </div>
              <div className="item-social__info">
                <a
                  href="https://github.com/edsanol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my code
                </a>
              </div>
            </div>

            <div className="item-social__container">
              <div className="item-social__header">
                <i className="fa-solid fa-square-envelope"></i>
              </div>
              <div className="item-social__info">
                <p>Mail</p>
              </div>
              <div className="item-social__info">
                <a
                  href="mailto:edinael.sanguino07@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send a message
                </a>
              </div>
            </div>
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  {status.message ? (
                    <div>
                      <span>{buttonText}</span>
                    </div>
                  ) : (
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  )}
                </Col>
                {status.message && (
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
