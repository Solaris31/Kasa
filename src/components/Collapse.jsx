import { useState } from "react";
import "../Styles/collapse.css"


const Collapse = (props) => {

    const [ouvert, setOuvert] = useState(false)

    const ouvertFerme = () => {
        setOuvert(!ouvert);
    }


    let texte="";
    if (props.nom === "Fiabilité" ) texte="Les annonces postées sur Kasa garantissentune fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes";
    else if (props.nom === "Respect") texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme";
    else if (props.nom === "Sécurité") texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes";
    else if (props.nom === "Service") texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme";
    
    return (
        <div>
            <div className="collapse ">
                <p className="devise">{props.nom}</p>
                <i className="fa-solid fa-chevron-up fa-xl" onClick={ouvertFerme}></i>
            </div>
            <div className={`${ouvert && "active"}`}>
                <p className="devise__texte">{texte}</p>
            </div>
        </div>

    )
}
export default Collapse;