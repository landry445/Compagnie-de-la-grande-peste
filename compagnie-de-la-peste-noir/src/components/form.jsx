import { useState } from 'react';
import ProgressBar from './ProgressBar';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    gender: '',
    occupation: '',
    address: '',
    messenger: '',
    messengerFrequency: '',
    healthStatus: '',
    knownAfflictions: '',
    herbalist: '',
    allergies: '',
    annualIncome: '',
    landPossessions: '',
    lordContributions: '',
    coverageType: '',
    subscriptionDuration: '',
    beneficiaries: '',
    beneficiaryRelation: '',
    paymentMethod: '',
    paymentFrequency: '',
    consent: false,
    signature: '',
    references: '',
    medicalHistory: ''
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const stepPercentage = (step / 5) * 100;

  return (
    <div className="form_container_1">
      <ProgressBar percentage={stepPercentage} />
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Informations Personnelles</h2>
            <label>
              Nom complet:
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </label>
            <label>
              Date de naissance:
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            </label>
            <label>
              Sexe:
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </label>
            <label>
              Occupation:
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
            </label>
            <button type="button" onClick={nextStep}>Suivant</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Informations de Contact</h2>
            <label>
              Adresse:
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <label>
              Messager préféré:
              <select name="messenger" value={formData.messenger} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Corbeau">Corbeau</option>
                <option value="Pigeon voyageur">Pigeon voyageur</option>
                <option value="Héraut">Héraut</option>
              </select>
            </label>
            <label>
              Fréquence des messagers:
              <select name="messengerFrequency" value={formData.messengerFrequency} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Quotidienne">Quotidienne</option>
                <option value="Hebdomadaire">Hebdomadaire</option>
                <option value="Mensuelle">Mensuelle</option>
              </select>
            </label>
            <button type="button" onClick={prevStep}>Précédent</button>
            <button type="button" onClick={nextStep}>Suivant</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Informations Médicales</h2>
            <label>
              État de santé général:
              <select name="healthStatus" value={formData.healthStatus} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Bonne">Bonne</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Mauvaise">Mauvaise</option>
              </select>
            </label>
            <label>
              Afflictions connues:
              <input type="text" name="knownAfflictions" value={formData.knownAfflictions} onChange={handleChange} />
            </label>
            <label>
              Herboriste attitré:
              <input type="text" name="herbalist" value={formData.herbalist} onChange={handleChange} />
            </label>
            <label>
              Allergies:
              <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} />
            </label>
            <button type="button" onClick={prevStep}>Précédent</button>
            <button type="button" onClick={nextStep}>Suivant</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Informations Financières</h2>
            <label>
              Revenu annuel:
              <input type="text" name="annualIncome" value={formData.annualIncome} onChange={handleChange} />
            </label>
            <label>
              Possessions foncières:
              <input type="text" name="landPossessions" value={formData.landPossessions} onChange={handleChange} />
            </label>
            <label>
              Contributions à la seigneurie:
              <input type="text" name="lordContributions" value={formData.lordContributions} onChange={handleChange} />
            </label>
            <button type="button" onClick={prevStep}>Précédent</button>
            <button type="button" onClick={nextStep}>Suivant</button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2>Choix de la Couverture et Soumission</h2>
            <label>
              Type de couverture souhaitée:
              <select name="coverageType" value={formData.coverageType} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Base">Base</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Premium">Premium</option>
              </select>
            </label>
            <label>
              Durée de la souscription:
              <select name="subscriptionDuration" value={formData.subscriptionDuration} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="1 an">1 an</option>
                <option value="5 ans">5 ans</option>
                <option value="À vie">À vie</option>
              </select>
            </label>
            <label>
              Noms des bénéficiaires:
              <input type="text" name="beneficiaries" value={formData.beneficiaries} onChange={handleChange} />
            </label>
            <label>
              Lien de parenté:
              <input type="text" name="beneficiaryRelation" value={formData.beneficiaryRelation} onChange={handleChange} />
            </label>
            <label>
              Mode de paiement:
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Espèces">Espèces</option>
                <option value="Nature">Nature</option>
                <option value="Services rendus">Services rendus</option>
              </select>
            </label>
            <label>
              Fréquence de paiement:
              <select name="paymentFrequency" value={formData.paymentFrequency} onChange={handleChange}>
                <option value="">Sélectionnez</option>
                <option value="Mensuelle">Mensuelle</option>
                <option value="Trimestrielle">Trimestrielle</option>
                <option value="Annuelle">Annuelle</option>
              </select>
            </label>
            <label>
              Consentement à la collecte et à l’utilisation des informations:
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            </label>
            <label>
              Signature ou marque:
              <input type="text" name="signature" value={formData.signature} onChange={handleChange} />
            </label>
            <label>
              Références:
              <input type="text" name="references" value={formData.references} onChange={handleChange} />
            </label>
            <label>
              Historique des soins:
              <input type="text" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
            </label>
            <button type="button" onClick={prevStep}>Précédent</button>
            <button type="submit">Soumettre</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
