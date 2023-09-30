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
            <div key={index} className="conteneurEquipement">
                <div>{equipement}</div>
                <br />
            </div>
        ))
    }

    return (
        <div>
            <div className="collapse">
                <p className="devise">{nom}</p>
                <i className={`fa-solid fa-chevron-up fa-xl ${ouvert && "tourne"}`} onClick={ouvertFerme}></i>
            </div>
            <div className={`${ouvert && "active"}`}>
                <p className="devise__texte">{nom==="Equipements" ? listeEquipements : texte}</p>
            </div>
        </div>

    )
}
export default Collapse;