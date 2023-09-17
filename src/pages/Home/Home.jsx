import Logo from "../../components/Logo.jsx"
import NavBar from "../../components/NavBar.jsx"
import BandeauImage from "../../components/BandeauImage.jsx"
import ConteneurLocations from "../../components/ConteneurLocations.jsx"
import Footer from "../../components/Footer.jsx"


const Home = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose"/>
                <NavBar />
            </header>
            <main>
                <article><BandeauImage image="rivage" /></article>
                <section><ConteneurLocations /></section>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}
export default Home;

