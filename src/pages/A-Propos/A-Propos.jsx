import Logo from "../../components/Logo"
import NavBar from "../../components/NavBar"
import BandeauImage from "../../components/BandeauImage"
import "../../styles/index.css"
import Footer from "../../components/Footer"
import BoxCollapses from "../../components/BoxCollapses"

const APropos = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose" />
                <NavBar />
            </header>
            <main>
                <article><BandeauImage image="montagne"/></article>
                <section><BoxCollapses /></section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default APropos;