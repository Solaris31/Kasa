import { useState } from "react";
import "../Styles/collapse.css"

const Collapse = ({nom, texte}) => {

    const [ouvert, setOuvert] = useState(false)
    const ouvertFerme = () => {
        setOuvert(!ouvert);
    }

    let listeEquipements
    if (nom==="Equipements") {
        listeEquipements = texte.map((equipement, index) => (
            <ul key={index} className="conteneurEquipement">
                <li>{equipement}</li>
                <br />
            </ul>
        ))
    }

    return (
        <div>
            <div className="collapse">
                <p className="devise">{nom}</p>
                <i className={`fa-solid fa-chevron-up fa-xl ${ouvert && "tourne"}`} onClick={ouvertFerme}></i>
            </div>
            <div className={`${ouvert && "active"}`}>
                <div className="devise__texte">{nom==="Equipements" ? listeEquipements : texte}</div>
            </div>
        </div>
    )
}
export default Collapse;