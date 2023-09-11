import "../Styles/footer.css"
import Logo from "../components/Logo.jsx"

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <Logo couleur="blanc"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </section>
    )    
}
export default Footer;