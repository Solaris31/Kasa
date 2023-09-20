import { useState } from "react";
import "../Styles/collapse.css"

const Collapse = (props) => {

    const [ouvert, setOuvert] = useState(false)

    const ouvertFerme = () => {
        setOuvert(!ouvert);
    }
    
    return (
        <div>
            <div className="collapse">
                <p className="devise">{props.nom}</p>
                <i className={`fa-solid fa-chevron-up fa-xl ${ouvert && "tourne"}`} onClick={ouvertFerme}></i>
            </div>
            <div className={`${ouvert && "active"}`}>
                <p className="devise__texte">{props.texte}</p>
            </div>
        </div>

    )
}
export default Collapse;