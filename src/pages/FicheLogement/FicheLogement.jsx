import Logo from "../../components/Logo.jsx"
import NavBar from "../../components/NavBar.jsx"
import Footer from "../../components/Footer"
import BandeauLogement from "../../components/BandeauLogement.jsx"
import InfosLogement from "../../components/InfosLogement.jsx"
import { useParams } from "react-router-dom"

const FicheLogement = () => {

    const {id} = useParams();
    console.log(id);

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