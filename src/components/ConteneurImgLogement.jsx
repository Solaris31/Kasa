import { useState } from "react"
import "../Styles/conteneurImgLogement.css"
import chevronDroit from "../assets/chevronVersLaDroite.png"
import chevronGauche from "../assets/chevronVersLaGauche.png"


const ConteneurImgLogement = (props) => {

    const [imgActive, setImgActive] = useState(1)

    // Au click, Maj du compteur d'image mais lempeche de descendre en dessous de 1
    const imgPrecedente= () => {
        if(imgActive === 1) {}
        else setImgActive(imgActive-1)
    }

    // Au click, Maj du compteur d'image mais lempeche de depasser la quantité max de photos
    const imgSuivante= () => {
        if(imgActive === props.logement.pictures.length) {}
        else setImgActive(imgActive+1)
    }

    return (
        <div className="conteneurPhotoLogement">
            {/* Affiche limage en cours (imgActive), par default elle est definie a 1 */}
            <img className="imgLogement" src={props.logement.pictures[imgActive-1]} alt="Appartement actuellement affichée" />
            <div className={props.logement.pictures.length === 1 ? "cacheConteneur" : "afficheConteneur" }>
                <img className="chevronLeft fa-beat" src={chevronGauche} alt="Chevron d'access au cliché precedent" onClick ={imgPrecedente} />
                <img className="chevronRight fa-beat" src={chevronDroit} alt="Chevron d'access au cliché suivant" onClick={imgSuivante} />
                <p className="nbPhotos">{imgActive}/{props.logement.pictures.length}</p>
            </div>
        </div>
    )
}
export default ConteneurImgLogement;