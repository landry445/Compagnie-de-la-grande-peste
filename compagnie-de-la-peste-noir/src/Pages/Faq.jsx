import { useState } from 'react';
import pigeonVoyageur from '../images/pigeon_lost.png';
import saignee from '../images/docteur_headache.png';
import pesteNoire from '../images/peste_noire.png';
import potionMagique from '../images/potion_magique.png';
import remedeDragon from '../images/remede_dragon.png';
import remedeDemon from '../images/remede_demon.png';
import potionAmour from '../images/potion_amour.png';
import potionCheval from '../images/potion_cheval.png';
import sang from '../images/doctor_blood.png';
import bed from '../images/doctor_bed.png';
import imageFaq from '../images/image_faq.png';
import '../styles/Faq.css';

const Faq = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [imageRotated, setImageRotated] = useState(false);

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const handleCloseOverlay = () => {
    setFullscreenImage(null);
  };

  const handleFaqImageMouseOver = () => {
    setImageRotated(true);
  };

  return (
    <div>
      <h1>FAQ</h1>
      <img
        src={imageFaq}
        alt="FAQ Image"
        className={`faq-image faq-main-image ${imageRotated ? 'rotated' : ''}`}
        onMouseOver={handleFaqImageMouseOver}
      />
      <div className="faq-grid">
        <div className="faq-item">
          <h2>Que faire en cas de peste noire confirmée ?</h2>
          <img src={pesteNoire} alt="Peste Noire" className="faq-image peste-noire" onClick={() => handleImageClick(pesteNoire)} />
          <ul>
            <li>-Évitez les rats et les puces, et restez à l’écart des foules.</li>
            <li>-Prenez une potion magique et espérez le meilleur !</li>
            <li>-Faites une retraite spirituelle dans une forêt lointaine.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>la saignée peut-elle guérir le mal de tête ?</h2>
          <img src={saignee} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(saignee)} />
          <ul>
            <li>-Absolument, mais seulement si vous avez trop de sang !</li>
            <li>-Oui, mais préparez-vous à vous sentir un peu léger.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Les potions magiques ont des effets secondaires ?</h2>
          <img src={potionMagique} alt="Potion Magique" className="faq-image potion-magique" onClick={() => handleImageClick(potionMagique)} />
          <ul>
            <li>-Non, les effets secondaires incluent des hallucinations et une envie de danser.</li>
            <li>-Oui, mais seulement si préparées par un sorcier certifié.</li>
            <li>-Peut-être, mais ne buvez pas plus de trois potions par jour.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Puis-je combiner une saignée avec une purge ?</h2>
          <img src={bed} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(bed)} />
          <ul>
            <li>-Oui, mais assurez-vous d’avoir un matelas bien confortable.</li>
            <li>-Non, cela pourrait vous transformer en fantôme !</li>
            <li>-Seulement si vous êtes suivi par un médecin médiéval expérimenté.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>le meilleur remède pour les piqûres de dragon ?</h2>
          <img src={remedeDragon} alt="Remède Dragon" className="faq-image remede-dragon" onClick={() => handleImageClick(remedeDragon)} />
          <ul>
            <li>-Appliquez un cataplasme de miel et de cendre de phénix.</li>
            <li>-Buvez une potion de courage avant d’affronter le dragon.</li>
            <li>-Évitez les dragons autant que possible !</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Comment savoir si je suis possédé par un démon ?</h2>
          <img src={remedeDemon} alt="Remède Démon" className="faq-image remede-demon" onClick={() => handleImageClick(remedeDemon)} />
          <ul>
            <li>-Consultez un exorciste et faites-vous purifier.</li>
            <li>-Vérifiez si vous avez une aversion pour l’ail.</li>
            <li>-Si vous commencez à parler des langues anciennes, c’est un signe.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Combien de sang est-il sûr de donner lors d’une saignée ?</h2>
          <img src={sang} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(sang)} />
          <ul>
            <li>-Tant que vous pouvez encore vous tenir debout, tout va bien !</li>
            <li>-Ne dépassez jamais une pinte par séance.</li>
            <li>-Consultez votre médecin pour une quantité personnalisée.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Les potions d’amour fonctionnent-elles vraiment ?</h2>
          <img src={potionAmour} alt="Potion d'Amour" className="faq-image potion-amour" onClick={() => handleImageClick(potionAmour)} />
          <ul>
            <li>-Seulement si préparées par une sorcière amoureuse.</li>
            <li>-Oui, mais les effets peuvent être imprévisibles.</li>
            <li>-Essayez plutôt d’écrire un poème d’amour.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Que faire si mon pigeon voyageur se perd ?</h2>
          <img src={pigeonVoyageur} alt="Pigeon Voyageur" className="faq-image pigeon-voyageur" onClick={() => handleImageClick(pigeonVoyageur)} />
          <ul>
            <li>-Entraînez un autre pigeon avec une meilleure orientation.</li>
            <li>-Envoyez un messager à pied avec une carte.</li>
            <li>-Attendez quelques jours, il pourrait retrouver son chemin.</li>
          </ul>
        </div>
        <div className="faq-item">
          <h2>Puis-je utiliser une potion de guérison sur mon cheval ?</h2>
          <img src={potionCheval} alt="Potion pour Cheval" className="faq-image potion-cheval" onClick={() => handleImageClick(potionCheval)} />
          <ul>
            <li>-Non, les potions pour humains peuvent être toxiques pour les chevaux.</li>
            <li>-Consultez un vétérinaire médiéval avant toute administration.</li>
          </ul>
        </div>
      </div>
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseOverlay}>
          <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default Faq;
