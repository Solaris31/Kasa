import { useState } from "react"
import "../styles/conteneurImgLogement.css"
import chevronDroit from "../assets/chevronVersLaDroite.png"
import chevronGauche from "../assets/chevronVersLaGauche.png"


const ConteneurImgLogement = (props) => {

    const [imgActive, setImgActive] = useState(1)

    // Au click, Maj du compteur d'image mais lempeche de descendre en dessous de 1
    const imgPrecedente= () => {
        if(imgActive === 1) {}
        else setImgActive(imgActive-1)
    }

    // Au click, on verifie que props.logement.picture != "undefined" et on verifie que la valeur de limage en cours est < a la taille du tableau 
    const imgSuivante= () => {
        if((props.logement.pictures) && imgActive < props.logement.pictures.length) {setImgActive(imgActive+1)}
    }


    return (
        <div className="conteneurPhotoLogement">
            {/* Affiche limage en cours (imgActive), par default elle est definie a 1 */}
            <img className="imgLogement" src={props.logement.pictures[imgActive-1]} alt="Appartement actuellement affichée" />
            <div className={props.logement.pictures.length === 1 ? "cacheConteneur" : "afficheConteneur" }>
                {/* Au click sur les fleches, on charge la fonction imgPrecedente ou imgSuivante qui affiche la nouvelle image */}
                <img className="chevronLeft fa-beat" src={chevronGauche} alt="Chevron d'access au cliché precedent" onClick ={imgPrecedente} />
                <img className="chevronRight fa-beat" src={chevronDroit} alt="Chevron d'access au cliché suivant" onClick={imgSuivante} />
                <p className="nbPhotos">{imgActive}/{props.logement.pictures.length}</p>
            </div>
        </div>
    )
}
export default ConteneurImgLogement;