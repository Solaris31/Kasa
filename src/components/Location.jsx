import { NavLink } from "react-router-dom"
import "../Styles/location.css"



const Location = ({id, cover, title}) => {

    return (
        <div className="card">
            <NavLink to={`/Fiche-Logement`}>
                <figure className="conteneurLocation">
                    <img 
                        src={cover}
                        alt={`Couverture principale de l'appartement ${title}`}
                        title={title}
                        id={id}
                        className="conteneurLocation__imageLocation"/>
                </figure>
            </NavLink>
            <p className="titreLocation">{title}</p>
        </div>
    )
}
export default Location;