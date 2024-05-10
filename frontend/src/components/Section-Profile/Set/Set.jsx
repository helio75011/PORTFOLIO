// SupportSection.js
import React from 'react';
import './Set.css'; // Import the CSS file for styling
import Me from './uploads/me.png'

const Set = () => {
  return (
    <section className="support-section">
      <div className="support-content">
        <h2>Hélio de Breyne</h2>
        <p className="support-title">Je suis <b>Développeur Web</b> et Concepteur <b>d'Application Mobile</b></p>
        <p className="support-text">
          Passionné par les technologies, je suis <b>développeur web</b> et concepteur <b>d'applications mobiles</b> en Bachelor. 
          Fort de mes compétences en <b>React</b>, <b>React Native</b>, <b>Next</b> et <b>NodeJs</b>, je transforme vos idées en solutions innovantes. 
          Confiez-moi vos projets pour un résultat professionnel et impactant.
        </p>
        <button className="start-button">Commencer</button>
      </div>
      <div className="support-image">
        {/* Replace 'path-to-your-image.jpg' with the actual path to your image */}
        <img src={Me} alt="Support" className='image-set' />
      </div>
    </section>
  );
};

export default Set;