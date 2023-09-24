import Logo from "../../components/Logo.jsx"
import NavBar from "../../components/NavBar.jsx"
import Footer from "../../components/Footer"
import BandeauLogement from "../../components/BandeauLogement.jsx"
import InfosLogement from "../../components/InfosLogement.jsx"

const FicheLogement = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo couleur="rose" />
                <NavBar />
            </header>
            <main>
                <figure>
                    <BandeauLogement />
                    <figcaption>
                    </figcaption>
                </figure>
                <section>
                    <InfosLogement />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default FicheLogement;