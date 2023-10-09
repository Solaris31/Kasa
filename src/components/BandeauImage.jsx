import "../styles/bandeauImage.css";
import rivage from "../assets/Rivage.jpg";
import montagne from "../assets/ForetEtMontagne.jpg";


const BandeauImage = (props) => {

    //Maj de limage selon la props passee en commentaire
    const imageBandeau = props.image === "rivage" ? rivage : montagne;

    //Maj de la commentaire selon la props passee en commentaire
    const commentaire = props.image === "rivage" ? "Rivage escarpé surmonté d'arbres" : "Vallée entre foret et montagnes enneigés";

    return (
        <figure className="conteneurImage">
            <img src={imageBandeau} alt={commentaire} className="conteneurImage__image" />
            <p className={imageBandeau === rivage ? "conteneurImage__textSurImage" : "conteneurImage__cacherTexte"}>Chez vous, partout et ailleurs</p>
        </figure>
    )
}
export default BandeauImage;