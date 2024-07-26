import bourgeoisieCard from '../assets/bourgeoisieCard.png'
import '../styles/Card.css';

function Card2() {
  return (
    <div className="coupon">
      <div className='coupon-container'>
      <img src={bourgeoisieCard} alt="Avatar" />
      <div className="container" >
        <h2><b>Offre de Mutuelle de Santé pour les Bourgeois</b></h2>
        <p>Bourgeois, protégez vos douces mains des brûlures de bougie et des chutes d’escaliers en colimaçon ! Notre mutuelle vous couvre contre les indigestions de festin et les attaques de voleurs. Parce que même en soie, un bandage reste un bandage !</p>
      </div>
      </div>
      <div className="container">
        <p>PROMOTION  EXCEPTIONNEL <span className="promo"> Pour 100 pièces d`or au lieu de 300 pieces d`or</span></p>
        <p className="expire">Expires avant le : Jan 03, 1280</p>
      </div>
      <div className='container-button'>
      <button className='medieval-button'>Je demande mon devis</button>
      </div>
    </div>
  );
}

export default Card2;
