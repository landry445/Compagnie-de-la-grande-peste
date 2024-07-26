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

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const handleCloseOverlay = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <h1>FAQ</h1>
      <img src={imageFaq} alt="FAQ Image" className="faq-image faq-main-image" />
      <div>
        <h2>Que faire en cas de peste noire ?</h2>
        <img src={pesteNoire} alt="Peste Noire" className="faq-image peste-noire" onClick={() => handleImageClick(pesteNoire)} />
        <p>- Évitez les rats et les puces, et restez à l’écart des foules.</p>
        <p>- Prenez une potion magique et espérez le meilleur !</p>
        <p>- Faites une retraite spirituelle dans une forêt lointaine.</p>
      </div>
      <div>
        <h2>Est-ce que la saignée peut guérir le mal de tête ?</h2>
        <img src={saignee} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(saignee)} />
        <p>- Absolument, mais seulement si vous avez trop de sang !</p>
        <p>- Oui, mais préparez-vous à vous sentir un peu léger.</p>
      </div>
      <div>
        <h2>Les potions magiques sont-elles garanties sans effets secondaires ?</h2>
        <img src={potionMagique} alt="Potion Magique" className="faq-image potion-magique" onClick={() => handleImageClick(potionMagique)} />
        <p>- Non, les effets secondaires incluent des hallucinations et une envie de danser.</p>
        <p>- Oui, mais seulement si préparées par un sorcier certifié.</p>
        <p>- Peut-être, mais ne buvez pas plus de trois potions par jour.</p>
      </div>
      <div>
        <h2>Puis-je combiner une saignée avec une purge ?</h2>
        <img src={bed} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(bed)} />
        <p>- Oui, mais assurez-vous d’avoir un matelas bien confortable.</p>
        <p>- Non, cela pourrait vous transformer en fantôme !</p>
        <p>- Seulement si vous êtes suivi par un médecin médiéval expérimenté.</p>
      </div>
      <div>
        <h2>Quel est le meilleur remède pour les piqûres de dragon ?</h2>
        <img src={remedeDragon} alt="Remède Dragon" className="faq-image remede-dragon" onClick={() => handleImageClick(remedeDragon)} />
        <p>- Appliquez un cataplasme de miel et de cendre de phénix.</p>
        <p>- Buvez une potion de courage avant d’affronter le dragon.</p>
        <p>- Évitez les dragons autant que possible !</p>
      </div>
      <div>
        <h2>Comment puis-je savoir si je suis possédé par un démon ?</h2>
        <img src={remedeDemon} alt="Remède Démon" className="faq-image remede-demon" onClick={() => handleImageClick(remedeDemon)} />
        <p>- Consultez un exorciste et faites-vous purifier.</p>
        <p>- Vérifiez si vous avez une aversion pour l’ail.</p>
        <p>- Si vous commencez à parler des langues anciennes, c’est un signe.</p>
      </div>
      <div>
        <h2>Combien de sang est-il sûr de donner lors d’une saignée ?</h2>
        <img src={sang} alt="Saignée" className="faq-image saignee" onClick={() => handleImageClick(sang)} />
        <p>- Tant que vous pouvez encore vous tenir debout, tout va bien !</p>
        <p>- Ne dépassez jamais une pinte par séance.</p>
        <p>- Consultez votre médecin pour une quantité personnalisée.</p>
      </div>
      <div>
        <h2>Les potions d’amour fonctionnent-elles vraiment ?</h2>
        <img src={potionAmour} alt="Potion d'Amour" className="faq-image potion-amour" onClick={() => handleImageClick(potionAmour)} />
        <p>- Seulement si préparées par une sorcière amoureuse.</p>
        <p>- Oui, mais les effets peuvent être imprévisibles.</p>
        <p>- Essayez plutôt d’écrire un poème d’amour.</p>
      </div>
      <div>
        <h2>Que faire si mon pigeon voyageur se perd ?</h2>
        <img src={pigeonVoyageur} alt="Pigeon Voyageur" className="faq-image pigeon-voyageur" onClick={() => handleImageClick(pigeonVoyageur)} />
        <p>- Entraînez un autre pigeon avec une meilleure orientation.</p>
        <p>- Envoyez un messager à pied avec une carte.</p>
        <p>- Attendez quelques jours, il pourrait retrouver son chemin.</p>
      </div>
      <div>
        <h2>Puis-je utiliser une potion de guérison sur mon cheval ?</h2>
        <img src={potionCheval} alt="Potion pour Cheval" className="faq-image potion-cheval" onClick={() => handleImageClick(potionCheval)} />
        <p>- Non, les potions pour humains peuvent être toxiques pour les chevaux.</p>
        <p>- Consultez un vétérinaire médiéval avant toute administration.</p>
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
