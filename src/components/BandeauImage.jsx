import "../Styles/bandeauImage.css";
import rivage from "../assets/Rivage.jpg";
import montagne from "../assets/ForetEtMontagne.jpg";


const BandeauImage = (props) => {

    const imageBandeau = props.image === "rivage" ? rivage : montagne;
    const commentaire = props.image === "rivage" ? "Rivage escarpé surmonté d'arbres" : "Vallée entre foret et montagnes enneigés";

    return (
        <figure className="conteneurImage">
            <img src={imageBandeau} alt={commentaire} className="conteneurImage__image" />
            <p className="conteneurImage__textSurImage">Chez vous, partout et ailleurs</p>
        </figure>
    )
}
export default BandeauImage;