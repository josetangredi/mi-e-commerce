import React from "react";

function ContactContainer() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">
          Nombre:
        </label>
        <input type="text" id="name" name="name" className="contact-input" />

        <label htmlFor="email" className="contact-label">
          Email:
        </label>
        <input type="email" id="email" name="email" className="contact-input" />

        <label htmlFor="message" className="contact-label">
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-textarea"
        ></textarea>

        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactContainer;
