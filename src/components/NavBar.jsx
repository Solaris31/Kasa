import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <ul className="conteneurNav__menuNav">
                <li className="conteneurNav__menuNav--styleNav"><NavLink to="/">Accueil</NavLink></li>
                <li className="conteneurNav__menuNav--styleNav"><NavLink to="/A-Propos">A propos</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;