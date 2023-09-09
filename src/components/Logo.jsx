import "../Styles/Logo.css";
import IconeKasa from "../assets/kasa.png";

const LogoSite = () => {
    return (
        <div className="logo">
            <span className="styleLettres styleLogo">K</span>
            <img src={IconeKasa} alt="Icone du site" className="iconeLogo" />
            <span className="styleLettres styleLogo2">sa</span>
        </div>
    )
}

export default LogoSite;