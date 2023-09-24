import { NavLink } from "react-router-dom"
import "../Styles/location.css"
import { useState } from "react"


const Location = ({id, cover, title}) => {

    const [idLocation, setIdLocation] = useState ("");

    const MajIdLocation = (e) => {
        setIdLocation (e.target.id);
    }

    return (
        <div className="card">
            <NavLink to={`/Fiche-Logement/${idLocation}`}>
                <figure className="conteneurLocation">
                    <img 
                        src={cover}
                        alt={`Couverture principale de l'appartement ${title}`}
                        title={title}
                        id={id}
                        className="conteneurLocation__imageLocation"
                        onClick={MajIdLocation}
                        />
                </figure>
            </NavLink>
            <p className="titreLocation">{title}</p>
        </div>
    )
}
export default Location;