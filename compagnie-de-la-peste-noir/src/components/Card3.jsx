import nobleCard from '../assets/nobleCard.png'
import '../styles/Card.css';

function Card3() {
  return (
    <div className="coupon">
      <div className='coupon-container'>
      <img src={nobleCard} alt="Avatar" />
      <div className="container" >
        <h2><b>Offre de Mutuelle de Santé pour les Paysans</b></h2>
        <p>Nobles, échappez à la guillotine médicale avec notre mutuelle de prestige ! Soins VIP pour les empoisonnements à l’hydromel et les blessures de duel. Des potions magiques aux guérisseurs secrets, restez en vie pour profiter de vos festins et complots !</p>
      </div>
      </div>
      <div className="container">
        <p>PROMOTION  EXCEPTIONNEL <span className="promo"> Pour 300 pièces d`or au lieu de 700 pieces d`or</span></p>
        <p className="expire">Expires avant le : Jan 03, 1280</p>
      </div>
      <div className='container-button'>
      <button className='medieval-button'>Je demande mon devis</button>
      </div>
    </div>
  );
}

export default Card3;
