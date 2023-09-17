import Logo from "../../components/Logo"
import NavBar from "../../components/NavBar"
import BandeauImage from "../../components/BandeauImage"
import "../../Styles/index.css"
import Footer from "../../components/Footer"

const APropos = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose" />
                <NavBar />
            </header>
            <main>
                <article><BandeauImage image="montagne"/></article>
                {/* <section> XXXX </section> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default APropos;