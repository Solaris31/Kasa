import Logo from "../../components/Logo.jsx"

const Home = () => {
    return (
        <div>
            <header className="conteneurNav">
                <Logo />
                <ul className="menuNav">
                    <li className="styleLettres format1">Accueil</li>
                    <li className="styleLettres format1">A propos</li>
                </ul>
            </header>
        </div>
    )
}

export default Home;
