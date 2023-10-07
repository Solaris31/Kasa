import { useState } from "react";
import "../styles/collapse.css"

const Collapse = ({nom, texte}) => {

    const [ouvert, setOuvert] = useState(false)
    const ouvertFerme = () => {
        setOuvert(!ouvert);
    }

    let listeEquipements
    if (nom==="Equipements") {
        // On cree une variable "listeEquipement" qui liste tous les equipements sous forme de liste verticale
        listeEquipements = texte.map((equipement, index) => (
            <ul key={index} className="conteneurEquipement">
                <li>{equipement}</li>
                <br />
            </ul>
        ))
    }

    return (
        <div className="conteneur1Collapse">
            <div className="collapse">
                <p className="devise">{nom}</p>
                {/* Selon la valeur de ouvert (vrai ou faux) on active la class Tourne */}
                {/* Activation de la fonction ouvreFerme qui change la valeur de "ouvert" */}
                <i className={`fa-solid fa-chevron-up fa-xl ${ouvert && "tourne"}`} onClick={ouvertFerme}></i>
            </div>

            <div className={`${ouvert && "active"}`}>
                {/* On detecte si les noms ceux de la page "A propos", si cest la cas, on change la typographie, qui suit les regles de texteAPropos */}
                {/* Sinon on applique les regles de "devises_texte" */}
                <div className={`${nom==="Fiabilité" || nom==="Respect" || nom==="Service" || nom==="Sécurité" ? "texteAPropos" : "devise__texte"}`}>
                    {nom==="Equipements" ? listeEquipements : texte}</div>
            </div>
        </div>
    )
}
export default Collapse;