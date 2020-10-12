import React from "react";
require('./_about.scss');
function About() {
  return (
    <div className="about-container">
      <div className="photo">PHOTO</div>
      <div className="card">
        <div className="container">
          <div>
            <h1>À PROPOS DE NOUS...</h1> <h3>
 
 Marion est journaliste et caméraman. Elle réalise des documentaires et des reportages pour les grandes chaînes de télé. Marion mettra son expertise des médias et de la communication visuelle à votre service. Elle réalisera des vidéos (“mini reportages”, images au drone...), des photos et du contenu texte pour mettre en valeur votre entreprise et vos équipes. 
 
 Patrick est développeur web : il imagine et conçoit les sites internet. Certains sont bilingues en japonais ou en créole, Patrick lui parle la langue du code informatique avec une agilité déconcertante. En suivant vos recommandations et vos envies, il réalisera une vitrine digitale pour votre entreprise, et si vous le souhaitez une plateforme de commerce en ligne. 
 </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
