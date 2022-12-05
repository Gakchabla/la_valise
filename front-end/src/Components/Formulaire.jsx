import React, { useEffect, useState } from "react";

function Formulaire({ setVoyageInfos, setIsOpen, setTravelTime }) {
  const [userPrenom, setUserPrenom] = useState("");
  const [selectedDepart, setSelectedDepart] = useState("");
  const [selectedRetour, setSelectedRetour] = useState("");
  const [selectedClimat, setSelectedClimat] = useState("");
  const [selectedMeteo, setSelectedMeteo] = useState("");
  const [selectedVoyage, setSelectedVoyage] = useState("");
  const [selectedLieu, setSelectedLieu] = useState("");
  const [selectedSaison, setSelectedSaison] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const formData = {
    climat: [
      { value: "", name: "----" },
      { value: "temp", name: "Tempéré" },
      { value: "hot=1", name: "Chaud" },
      { value: "cold=1", name: "Froid" },
    ],
    meteo: [
      { value: "", name: "----" },
      { value: "inc", name: "Inconnue" },
      { value: "soleil=1", name: "Ensoleillé" },
      { value: "mauvais_temps=1", name: "Pluvieux" },
      { value: "deux", name: "Les deux" },
    ],
    typeVoyage: [
      { value: "backpack=0", name: "----" },
      { value: "detente=1", name: "Détente" },
      { value: "backpack=1", name: "Backpacker" },
    ],
    typeLieu: [
      { value: "", name: "----" },
      { value: "rural=1", name: "Campagne" },
      { value: "desert=1", name: "Désert" },
      { value: "montagne=1", name: "Montagne" },
      { value: "plage=1", name: "Plage" },
      { value: "urbain=1", name: "Ville" },
    ],
    saison: [
      { value: "automne_hiver=1", name: "Automne/Hiver" },
      { value: "printemps_ete=1", name: "Printemps/Eté" },
    ],
  };

  const depart = new Date(selectedDepart);
  const retour = new Date(selectedRetour);

  const duration = () => {
    if (selectedDepart && selectedRetour) {
      let timeDiff = retour.getTime() - depart.getTime();
      let dayDiff = timeDiff / (1000 * 24 * 3600);
      setTravelTime(dayDiff);
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
    setIsOpen("valise");
  };
  useEffect(() => duration(), [selectedDepart, selectedRetour]);
  return (
    <div className="flex h-full flex-col lg:w-[30vw]  ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        action=""
        method="post"
        className="flex flex-col justify-between h-full"
      >
        <div className="flex justify-between">
          <label className="text-white font-leagueSpartan" htmlFor="Name">
            Prénom:
          </label>
          <input
            className="self-center w-3/5 lg:w-2/5 rounded-md shadow-sm h-10 border "
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
            name="destination"
          >
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
            name="destination"
          >
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
            name="destination"
          >
            {formData.meteo.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <a
          className="text-white underline font-leagueSpartan"
          href="https://www.accuweather.com/fr/world-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            name="destination"
          >
            {formData.typeVoyage.map((el) => {
              return <option value={el.value}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white font-leagueSpartan">
            Type de Destination :
          </label>
          <select
            value={selectedLieu}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedLieu(selected);
            }}
            className="border  rounded-md h-10"
            name="destination"
          >
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
                  className="text-white font-leagueSpartan"
                >
                  {el.name}
                </label>
                <input value={el.value} type="radio" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 pt-2 pt-2 h-20 font-leagueSpartan rounded-3xl text-slate-100 text-4xl font-semibold bg-button"
            type="submit"
          >
            Ma Valise!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
