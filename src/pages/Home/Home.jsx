import Logo from "../../components/Logo.jsx"
import BandeauImage from "../../components/BandeauImage.jsx"
import Footer from "../../components/Footer.jsx";
import ConteneurLocations from "../../components/ConteneurLocations.jsx"


const Home = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose"/>
                <ul className="conteneurNav__menuNav">
                    <li className="conteneurNav__menuNav--styleNav"><a href="#">Accueil</a></li>
                    <li className="conteneurNav__menuNav--styleNav"><a href="#">A Propos</a></li>
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

