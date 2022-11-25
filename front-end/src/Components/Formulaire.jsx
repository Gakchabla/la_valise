import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulaire({ setVoyageInfos, voyageInfos, setTravelTime }) {
  const [userPrenom, setUserPrenom] = useState("");
  const [userNom, setUserNom] = useState("");
  const [selectedDepart, setSelectedDepart] = useState("");
  const [selectedRetour, setSelectedRetour] = useState("");
  const [selectedClimat, setSelectedClimat] = useState("");
  const [selectedMeteo, setSelectedMeteo] = useState("");
  const [selectedVoyage, setSelectedVoyage] = useState("");
  const [selectedLieu, setSelectedLieu] = useState("");
  const [selectedSaison, setSelectedSaison] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const navigate = useNavigate();

  const formData = {
    climat: [
      { value: "", name: "----" },
      { value: "both", name: "Tempéré" },
      { value: "cold", name: "Chaud" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
      { value: "hot", name: "Froid" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
    ],
    meteo: [
      { value: "", name: "----" },
      { value: "zzzz", name: "Inconnue" }, // la valeur ne correspond a rien car l'appel a l'api se fait en !=
      { value: "soleil", name: "Pluvieux" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
      { value: "pluie", name: "Ensoleillé" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
      { value: "zzzz", name: "Les deux" }, // la valeur ne correspond a rien car l'appel a l'api se fait en !=
    ],
    typeVoyage: [
      { value: "", name: "----" },
      { value: "backpack", name: "Détente" }, // la valeur ne correspond a rien car l'appel a l'api se fait en !=
      { value: "chill", name: "Backpacker" }, // la valeur ne correspond a rien car l'appel a l'api se fait en !=
    ],
    typeLieu: [
      { value: "", name: "----" },
      { value: "urbain", name: "Campagne" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
      { value: "desert", name: "Désert" },
      { value: "montagne", name: "Montagne" },
      { value: "plage", name: "Plage" },
      { value: "rural", name: "Ville" }, // la valeur est l'inverse car l'appel a l'api se fait en !=
    ],
    saison: ["Automne/Hiver", "Printemps/Eté"],
  };

  const depart = new Date(selectedDepart);
  const retour = new Date(selectedRetour);

  const duration = () => {
    if (selectedDepart && selectedRetour) {
      setTravelTime(parseInt(depart.getDate() - retour.getDate()) * -1);
    }
  };
  const handleSubmit = () => {
    setVoyageInfos({
      climat: selectedClimat,
      meteo: selectedMeteo,
      typeVoyage: selectedVoyage,
      typeLieu: selectedLieu,
      genre: selectedGenre,
      voyageur: userPrenom,
    });
    navigate("/mavalise");
  };
  useEffect(() => duration(), [selectedDepart, selectedRetour]);
  return (
    <div className="flex h-full flex-col bg-primary">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        action=""
        method="post"
        className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="Name">
            Prénom:
          </label>
          <input
            className="self-center w-3/5 rounded-md shadow-sm h-full border "
            type="text"
            value={userPrenom}
            onChange={(e) => setUserPrenom(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="dateDepart">
            Date de départ :
          </label>
          <input
            value={selectedDepart}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedDepart(selected);
            }}
            className="border rounded-md h-10"
            type="date"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="dateRetour">
            Date de de retour :
          </label>
          <input
            value={selectedRetour}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedRetour(selected);
            }}
            className="border rounded-md h-10"
            type="date"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="Name">
            Genre :
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedGenre(selected);
            }}
            className="border rounded-md h-10"
            name="destination">
            <option value="">----</option>
            <option value="man">Homme</option>
            <option value="woman">Femme</option>
            <option value="both">Non-binaire</option>
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white font-leagueSpartan">
            Type de climat :
          </label>
          <select
            value={selectedClimat}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedClimat(selected);
            }}
            className="border  rounded-md h-10"
            name="destination">
            {formData.climat.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="climat">
            Météo prévue :
          </label>
          <select
            value={selectedMeteo}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedMeteo(selected);
            }}
            className="border rounded-md h-10"
            name="destination">
            {formData.meteo.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <a
          className="text-white underline font-leagueSpartan"
          href="https://www.accuweather.com/fr/world-weather"
          target="_blank"
          rel="noopener noreferrer">
          Consulter les données Météo
        </a>
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="climat">
            Type de voyage :
          </label>
          <select
            value={selectedVoyage}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedVoyage(selected);
            }}
            className="border  rounded-md h-10"
            name="destination">
            {formData.typeVoyage.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white font-leagueSpartan">
            Type de Lieu :
          </label>
          <select
            value={selectedLieu}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedLieu(selected);
            }}
            className="border  rounded-md h-10"
            name="destination">
            {formData.typeLieu.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-between">
          {formData.saison.map((el) => {
            return (
              <div className="ml-4">
                <label
                  htmlFor="climat"
                  className="text-white font-leagueSpartan">
                  {el}
                </label>
                <input value={el} type="radio" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 font-leagueSpartan rounded-3xl text-slate-100 text-6xl bg-button"
            type="submit">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
