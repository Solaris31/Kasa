import { NavLink } from "react-router-dom"
import "../Styles/location.css"


const Location = ({id, cover, title}) => {

    return (
        <div className="card">
            <NavLink to={`/FicheLogement/${id}`}>
                <figure className="conteneurLocation">
                    <img 
                        src={cover}
                        alt={`Couverture principale de l'appartement ${title}`}
                        title={title}
                        id={id}
                        className="conteneurLocation__imageLocation"
                        />
                </figure>
                <p className="titreLocation">{title}</p>
            </NavLink>

        </div>
    )
}
export default Location;