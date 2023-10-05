import Logo from "../../components/Logo.jsx"
import Navbar from "../../components/NavBar.jsx"
import Footer from "../../components/Footer.jsx"
import "../../styles/pageIntrouvable.css"
import { NavLink } from "react-router-dom"

const PageIntrouvable = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose"/>
                <Navbar />
            </header>
            <main>
                <p className="erreur404">404</p>
                <p className="erreurTexte">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="erreurRetour">Retourner sur la page d'accueil</NavLink>
            </main>
        <Footer />
        </div>
    )
}
export default PageIntrouvable;