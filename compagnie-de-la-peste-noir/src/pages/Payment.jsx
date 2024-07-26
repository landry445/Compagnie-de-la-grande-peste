import "../styles/Payment.css";
import logoPest from "../assets/logoPeste.png";
import { useState } from "react";

function Payment() {
  const [reste, setReste] = useState(300);

  return (
    <div className="pagePayment">
      <header>
        <div className="logo">
          <img src={logoPest} alt="logoPeste" />
        </div>
      </header>
      <div className="calcRed">
        <h1>Calcul des redevances :</h1>
      </div>
      <div className="boiteRedevance">
        <div className="boiteRedevance1">
          <div className="presta1">
            <p>Droit dEntrée</p>
          </div>
          <div className="presta2">
            <p>Cens Annuel</p>
          </div>
        </div>
        <div className="boiteRedevance2">
          <div className="annonceDevise">
            <p>Devise de redevances</p>
          </div>
          <div className="devise">
            <div className="coutDroitEntre">
              <p>En écus dor</p>
            </div>
            <div className="coutConsAnnu">
              <p>En écus dor</p>
            </div>
          </div>
          <div className="montantDevise">
            <div className="montantDevise1">
              <p>25</p>
            </div>
            <div className="montantDevise2">
              <p>275</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modeRetrib">
        <h1>Mode de rétribution :</h1>
      </div>
      <div className="boiteRetrib">
        <div className="boiteRetribu1">
          <p>
            Total dut&nbsp;
            <br />
            en ecus dor
          </p>
          <div className="total">300</div>
        </div>
        <div className="boiteRetribu2">
          <div className="test">
            <div className="reglDet">
              <p>Reglement de la dettes :</p>
            </div>
            <div className="reglDevise">
              <p>En écus dor</p>
              <div>
                <input
                  type="number"
                  placeholder="montant"
                  onBlur={(event) => {
                    console.log(event.target.value);
                    if (event.target.value === "") {
                      setReste(300);
                    }
                    setReste((prevState) => prevState - event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="reglCochon">
              <p>En cochon de bonne santé</p>
              <div>
                <input
                  type="number"
                  placeholder="montant"
                  onBlur={(event) => {
                    console.log(event.target.value);
                    if (event.target.value === "") {
                      setReste(300);
                    }
                    setReste(
                      (prevState) => prevState - event.target.value * 50
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <p>Montant restant :</p>
          <div className="reste">{reste}</div>
        </div>
      </div>
      <div className="footer">
        <div></div>
        <div>
          <p>
            Je prête serment, de payer mon dut en or ou en cochon, sous une
            septaine, et m’oblige à accepter mon chatiment si je n’y parvin
            point
          </p>
        </div>
        <div className="consigner">
          <input type="button">Je me fais consigner</input>
        </div>
      </div>
    </div>
  );
}

export default Payment;
