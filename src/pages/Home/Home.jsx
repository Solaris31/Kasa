import Logo from "../../components/Logo.jsx"
import BandeauImage from "../../components/BandeauImage.jsx"
import Footer from "../../components/Footer.jsx";
import ConteneurLocations from "../../components/ConteneurLocations.jsx"
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose"/>
                <ul className="conteneurNav__menuNav">
                    <li className="conteneurNav__menuNav--styleNav"><NavLink to="/">Accueil</NavLink></li>
                    <li className="conteneurNav__menuNav--styleNav"><NavLink to="/A-Propos">A propos</NavLink></li>
                </ul>
            </header>
            <main>
                <article><BandeauImage /></article>
                <section><ConteneurLocations /></section>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}
export default Home;

