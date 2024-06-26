import React from 'react';
import './Contact.css';
import Talk from './uploads/talk.png'

const Contact = () => {
  return (
    <div className='contactContainer-parent'>
      <div className="contactContainer">
        <div className="contactInfo">
          <img src={Talk} />
          <p className="contactDescription">
            Vous avez des questions, des suggestions ou simplement envie de me faire part d'une éventuelle collaboration ? N'hésitez pas à me contacter !
          </p>
        </div>
        <div className="contactFormWrapper">
          <div className="contactForm">
            <h2>Formulaire de contact</h2>
            <p className='NFAQ'>Une Question ?</p>
            <form>
              <label htmlFor="firstName">Prenom *</label>
              <input type="text" id="firstName" name="firstName" required />
              
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
              
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>       
      </div>
      <p className="contactWarning">
        Si vous êtes en crise ou si une autre personne est en danger, n'utilisez pas ce site.
        Ces ressources peuvent vous fournir une aide immédiate.
      </p>
    </div>
  );
};

export default Contact;
