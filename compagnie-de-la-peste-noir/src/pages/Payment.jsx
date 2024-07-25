import '../styles/Payment.css';
import logoPest from "../assets/logoPeste.png";

function Payment() {
  return (
    <>
      <div className='logo'>
        <img src={logoPest} alt="logoPeste" />
      </div>
      <div className='redevance'>
          <h1>Calcul des redevances :</h1>
          <div>
            <p>Droit dEntrée</p>
            <p>Cens Annuel</p>
          </div>
          <div>
            <p>Devise de redevances</p>
            <p>En écus dor</p>
            <div></div>
            <p>En écus dor</p>
            <div></div>
          </div>
      </div>
      <div className='retribution'>
          <h1>Mode de rétribution :</h1>
          <div>
            <p>Total du en ecus dor</p>
            <div></div>
          </div>
          <div>
            <div>
              <p>Reglement de la dettes :</p>
              <p>En écus dor | En cochon de bonne santé</p> 
            </div>
            <p>Montant restant :</p>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
      <div className='footer'>
        <div></div>
        <div>
          <p>Je prête serment, 
            de payer mon dut en or ou en cochon, 
            sous une septaine, 
            et m’oblige à accepter mon chatiment 
            si je n’y parvin point
          </p>
        </div>
        <div>
          <p>Je me fais consigner</p>
        </div>
      </div>
    </>
  );
}

export default Payment;
