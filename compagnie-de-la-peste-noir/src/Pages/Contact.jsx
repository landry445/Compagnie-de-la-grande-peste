import { useState } from "react";
import "../styles/Contact.css";

import pigeonVoyageur from "../images/pigeon_voyageur.png";
import teleportationMedievale from "../images/teleportation_medievale.png";
import messageRoyal from "../images/message_royal.png";
import messageBouteille from "../images/message_bouteille.png";
import corBrume from "../images/cor_brume.png";
import parcheminEnchante from "../images/parchemin_enchante.png";
import helicoptereBois from "../images/helicoptere_bois.png";
import serviteurFantome from "../images/serviteur_fantome.png";
import murmureFees from "../images/murmure_fees.png";
import enveloppeImperiale from "../images/enveloppe_imperiale.png";

const Contact = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <div className="contact-container">
        <div className="title-container">
          <h1>Contactez-nous !</h1>
          <img
            src={enveloppeImperiale}
            alt="Enveloppe Impériale"
            className="title-image"
          />
        </div>

        <div className="contact-method">
          <h2>1. Envoyez-nous un pigeon voyageur</h2>
          <img
            src={pigeonVoyageur}
            alt="Pigeon Voyageur"
            className="contact-image pigeon-voyageur"
            onClick={() => handleImageClick(pigeonVoyageur)}
          />
          <ul>
            <li>
              Utilisez un pigeon bien entraîné et fiable, de préférence avec une
              petite armure pour le protéger des faucons.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>2. Téléportation Médiévale</h2>
          <img
            src={teleportationMedievale}
            alt="Téléportation Médiévale"
            className="contact-image teleportation-medievale"
            onClick={() => handleImageClick(teleportationMedievale)}
          />
          <ul>
            <li>
              Rendez-vous à votre cercle de pierres le plus proche et récitez
              l&apos;incantation magique pour nous téléporter votre message.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>3. Message Royal</h2>
          <img
            src={messageRoyal}
            alt="Message Royal"
            className="contact-image message-royal"
            onClick={() => handleImageClick(messageRoyal)}
          />
          <ul>
            <li>
              Engagez un messager royal portant un uniforme médiéval pour livrer
              votre message avec une révérence.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>4. Message dans une Bouteille</h2>
          <img
            src={messageBouteille}
            alt="Message dans une Bouteille"
            className="contact-image message-bouteille"
            onClick={() => handleImageClick(messageBouteille)}
          />
          <ul>
            <li>
              Lancez une bouteille contenant votre message dans la rivière la
              plus proche et espérez qu&apos;elle atteigne notre château.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>5. Cor de Brume</h2>
          <img
            src={corBrume}
            alt="Cor de Brume"
            className="contact-image cor-brume"
            onClick={() => handleImageClick(corBrume)}
          />
          <ul>
            <li>
              Soufflez dans un cor de brume magique trois fois depuis le sommet
              de la colline la plus haute, et votre message sera entendu.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>6. Parchemin Enchanté</h2>
          <img
            src={parcheminEnchante}
            alt="Parchemin Enchanté"
            className="contact-image parchemin-enchante"
            onClick={() => handleImageClick(parcheminEnchante)}
          />
          <ul>
            <li>
              Écrivez votre message sur un parchemin enchanté et brûlez-le dans
              un feu sacré pour qu&apos;il apparaisse dans notre cheminée.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>7. Hélicoptère en Bois</h2>
          <img
            src={helicoptereBois}
            alt="Hélicoptère en Bois"
            className="contact-image helicoptere-bois"
            onClick={() => handleImageClick(helicoptereBois)}
          />
          <ul>
            <li>
              Envoyez un hélicoptère en bois miniaturisé fabriqué par un artisan
              gnome pour livrer votre message directement à notre fenêtre.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>8. Serviteur Fantôme</h2>
          <img
            src={serviteurFantome}
            alt="Serviteur Fantôme"
            className="contact-image serviteur-fantome"
            onClick={() => handleImageClick(serviteurFantome)}
          />
          <ul>
            <li>
              Convoquez un serviteur fantôme pour porter votre message
              jusqu&apos;à notre manoir spectral.
            </li>
          </ul>
        </div>

        <div className="contact-method">
          <h2>9. Murmure aux Fées</h2>
          <img
            src={murmureFees}
            alt="Murmure aux Fées"
            className="contact-image murmure-fees"
            onClick={() => handleImageClick(murmureFees)}
          />
          <ul>
            <li>
              Trouvez un cercle de fées dans une forêt enchantée et
              murmurez-leur votre message, elles nous le transmettront.
            </li>
          </ul>
        </div>

        {modalImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">
              <img src={modalImage} alt="Modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
