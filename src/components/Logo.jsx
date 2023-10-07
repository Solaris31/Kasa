import "../styles/logo.css";
import MaisonRose from "../assets/kasaRose.png";
import MaisonBlanche from "../assets/kasaBlanc.png"

const LogoSite = (props) => {
    // selon la props, on accorde une couleur a la maison du logo et son texte
    const couleurMaison = props.couleur === "rose" ? MaisonRose : MaisonBlanche;
    const couleurTexte = props.couleur === "rose" ? "logo--texteRose" : "logo--texteBlanc";

    return (
        <div className="logo">
            <span className={couleurTexte + " logo--styleLogo"}>K</span>
            <img src={couleurMaison} alt="Icone du site" className="logo__iconeLogo" />
            <span className={couleurTexte + " logo--styleLogo2"}>s</span>
            <span className={couleurTexte + " logo--styleLogo2"}>a</span>
        </div>
    )
}
export default LogoSite;