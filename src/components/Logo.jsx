import "../Styles/Logo.css";
import IconeMaison from "../assets/kasa.png";

const LogoSite = () => {
    return (
        <div className="logo">
            <span className="styleLettres styleLogo">K</span>
            <img src={IconeMaison} alt="Icone du site" className="iconeLogo" />
            <span className="styleLettres styleLogo2">s</span>
            <span className="styleLettres styleLogo2">a</span>
        </div>
    )
}

export default LogoSite;