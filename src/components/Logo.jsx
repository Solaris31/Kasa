import "../Styles/Logo.css";
import MaisonRose from "../assets/kasaRose.png";
import MaisonBlanche from "../assets/kasaBlanc.png"

const LogoSite = (props) => {
    const couleurMaison = props.couleur === "rose" ? MaisonRose : MaisonBlanche;
    const couleurTexte = props.couleur === "rose" ? "texteRose" : "texteBlanc";
    
    return (
        <div className="logo">
            <span className={couleurTexte + " styleLogo"}>K</span>
            <img src={couleurMaison} alt="Icone du site" className="iconeLogo" />
            <span className={couleurTexte + " styleLogo2"}>s</span>
            <span className={couleurTexte + " styleLogo2"}>a</span>
        </div>
    )
}
export default LogoSite;