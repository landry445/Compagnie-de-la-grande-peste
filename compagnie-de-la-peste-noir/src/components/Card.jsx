import paysanCard from '../assets/paysanCard.png'
import '../styles/Card.css';

function Card() {
  return (
    <div className="coupon">
      <div className='coupon-container'>
      <img src={paysanCard} alt="Avatar" />
      <div className="container" >
        <h2><b>Offre de Mutuelle de Santé pour les Paysans</b></h2>
        <p>Évitez de finir en engrais avec notre mutuelle pour paysans ! Plus de peur de la peste noire ou des coups de pioche mal placés. Soins express pour les membres arrachés et les éruptions cutanées suspectes. Tranquillité d’esprit garantie, même au milieu des champs de bataille agricoles !</p>
      </div>
      </div>
      <div className="container">
        <p>PROMOTION  EXCEPTIONNEL <span className="promo"> Pour 3 cochons au lieu de 5</span></p>
        <p className="expire">Expires avant le : Jan 03, 1280</p>
      </div>
      <div className='container-button'>
      <button className='medieval-button'>Je demande mon devis</button>
      </div>
    </div>
  );
}

export default Card;

