import { useState, useRef } from 'react';
import '../styles/Contact.css';

import pigeonVoyageur from '../images/pigeon_voyageur.png';
import teleportationMedievale from '../images/teleportation_medievale.png';
import messageRoyal from '../images/message_royal.png';
import messageBouteille from '../images/message_bouteille.png';
import corBrume from '../images/cor_brume.png';
import parcheminEnchante from '../images/parchemin_enchante.png';
import helicoptereBois from '../images/helicoptere_bois.png';
import serviteurFantome from '../images/serviteur_fantome.png';
import murmureFees from '../images/murmure_fees.png';
import enveloppeImperiale from '../images/enveloppe_imperiale.png';

import pigeonVoyageurAudio from '../sons/pigeon-82804.mp3';
import teleportationMedievaleAudio from '../sons/transition-futuristic-teleport-121420.mp3';
import messageRoyalAudio from '../sons/royal-marines-drums-37061.mp3';
import messageBouteilleAudio from '../sons/pop-sound-effect-197846.mp3';
import corBrumeAudio from '../sons/battle_horn_1-6931.mp3';
import parcheminEnchanteAudio from '../sons/newspaper-foley-4-196721.mp3';
import helicoptereBoisAudio from '../sons/helicopter-sound-41975.mp3';
import serviteurFantomeAudio from '../sons/poltergeist-horror-sound-9-vol-001-149858.mp3';
import murmureFeesAudio from '../sons/the-sound-of-nature-123109.mp3';
import enveloppeImperialeAudio from '../sons/papercrackle3-36110.mp3';

const Contact = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRefs = {
    pigeonVoyageur: useRef(null),
    teleportationMedievale: useRef(null),
    messageRoyal: useRef(null),
    messageBouteille: useRef(null),
    corBrume: useRef(null),
    parcheminEnchante: useRef(null),
    helicoptereBois: useRef(null),
    serviteurFantome: useRef(null),
    murmureFees: useRef(null),
    enveloppeImperiale: useRef(null),
  };

  const handleImageClick = (imageSrc, audioRef) => {
    setModalImage(imageSrc);
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.play();
      setCurrentAudio(audioRef.current);
    }
  };

  const handleMouseEnter = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleCloseModal = () => {
    setModalImage(null);
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  return (
    <div>
      <div className="title-container">
        <h1>Contactez-nous !</h1>
        <img 
          src={enveloppeImperiale} 
          alt="Enveloppe Impériale" 
          className="title-image enveloppe-imperiale" 
          onMouseEnter={() => handleMouseEnter(audioRefs.enveloppeImperiale)} 
          onMouseLeave={() => handleMouseLeave(audioRefs.enveloppeImperiale)} 
        />
        <audio ref={audioRefs.enveloppeImperiale} src={enveloppeImperialeAudio}></audio>
      </div>
      
      <div className="contact-grid">
        <div className="contact-method">
          <h2>Pigeon voyageur</h2>
          <img 
            src={pigeonVoyageur} 
            alt="Pigeon Voyageur" 
            className="contact-image pigeon-voyageur" 
            onClick={() => handleImageClick(pigeonVoyageur, audioRefs.pigeonVoyageur)} 
          />
          <audio ref={audioRefs.pigeonVoyageur} src={pigeonVoyageurAudio}></audio>
          <ul>
            <li>Utilisez un pigeon bien entraîné et fiable, de préférence avec une petite armure pour le protéger des faucons.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Cercle de pierre</h2>
          <img 
            src={teleportationMedievale} 
            alt="Téléportation Médiévale" 
            className="contact-image teleportation-medievale" 
            onClick={() => handleImageClick(teleportationMedievale, audioRefs.teleportationMedievale)} 
          />
          <audio ref={audioRefs.teleportationMedievale} src={teleportationMedievaleAudio}></audio>
          <ul>
            <li>Rendez-vous à votre cercle de pierres le plus proche et récitez l&apos;incantation magique pour nous téléporter votre message.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Message Royal</h2>
          <img 
            src={messageRoyal} 
            alt="Message Royal" 
            className="contact-image message-royal" 
            onClick={() => handleImageClick(messageRoyal, audioRefs.messageRoyal)} 
          />
          <audio ref={audioRefs.messageRoyal} src={messageRoyalAudio}></audio>
          <ul>
            <li>Engagez un messager royal portant un uniforme médiéval pour livrer votre message avec une révérence.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Message dans une Bouteille</h2>
          <img 
            src={messageBouteille} 
            alt="Message dans une Bouteille" 
            className="contact-image message-bouteille" 
            onClick={() => handleImageClick(messageBouteille, audioRefs.messageBouteille)} 
          />
          <audio ref={audioRefs.messageBouteille} src={messageBouteilleAudio}></audio>
          <ul>
            <li>Lancez une bouteille contenant votre message dans la rivière la plus proche et espérez qu&apos;elle atteigne notre château.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Cor de Brume enchantée</h2>
          <img 
            src={corBrume} 
            alt="Cor de Brume" 
            className="contact-image cor-brume" 
            onClick={() => handleImageClick(corBrume, audioRefs.corBrume)} 
          />
          <audio ref={audioRefs.corBrume} src={corBrumeAudio}></audio>
          <ul>
            <li>Soufflez dans un cor de brume magique trois fois depuis le sommet de la colline la plus haute, et votre message sera entendu.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Vieux parchemin Enchanté</h2>
          <img 
            src={parcheminEnchante} 
            alt="Parchemin Enchanté" 
            className="contact-image parchemin-enchante" 
            onClick={() => handleImageClick(parcheminEnchante, audioRefs.parcheminEnchante)} 
          />
          <audio ref={audioRefs.parcheminEnchante} src={parcheminEnchanteAudio}></audio>
          <ul>
            <li>Écrivez votre message sur un parchemin enchanté et brûlez-le dans un feu sacré pour qu&apos;il apparaisse dans notre cheminée.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Hélicoptère en Bois</h2>
          <img 
            src={helicoptereBois} 
            alt="Hélicoptère en Bois" 
            className="contact-image helicoptere-bois" 
            onClick={() => handleImageClick(helicoptereBois, audioRefs.helicoptereBois)} 
          />
          <audio ref={audioRefs.helicoptereBois} src={helicoptereBoisAudio}></audio>
          <ul>
            <li>Envoyez un hélicoptère en bois miniaturisé fabriqué par un artisan gnome pour livrer votre message directement à notre fenêtre.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Serviteur Fantôme</h2>
          <img 
            src={serviteurFantome} 
            alt="Serviteur Fantôme" 
            className="contact-image serviteur-fantome" 
            onClick={() => handleImageClick(serviteurFantome, audioRefs.serviteurFantome)} 
          />
          <audio ref={audioRefs.serviteurFantome} src={serviteurFantomeAudio}></audio>
          <ul>
            <li>Convoquez un serviteur fantôme pour porter votre message jusqu&apos;à notre manoir spectral.</li>
          </ul>
        </div>
        <div className="contact-method">
          <h2>Murmure aux Fées</h2>
          <img 
            src={murmureFees} 
            alt="Murmure aux Fées" 
            className="contact-image murmure-fees" 
            onClick={() => handleImageClick(murmureFees, audioRefs.murmureFees)} 
          />
          <audio ref={audioRefs.murmureFees} src={murmureFeesAudio}></audio>
          <ul>
            <li>Trouvez un cercle de fées dans une forêt enchantée et murmurez-leur votre message, elles nous le transmettront.</li>
          </ul>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

