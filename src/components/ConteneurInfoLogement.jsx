import Collapse from "../components/Collapse.jsx"
import Qualites from "../components/Qualites.jsx"
import Etoiles from "../components/Etoiles.jsx"
import "../Styles/conteneurInfoLogementPage2.css"

const ConteneurInfoLogement = ({logement}) => {

    return (
        <div className="conteneurLogement">
            <div className="conteneurInformationsLogement">
                <div className="descriptionLogement">
                    <p className="descriptionImg">{logement.title}</p>
                    <p className="localisationImg">{logement.location}</p>
                    <div className="conteneurQualites">
                        <Qualites id={logement.id} tags={logement.tags}/>
                    </div>
                </div>
                <div className="conteneurLoueuretEtoiles">
                    <div className="conteneurDernierLoueur">
                        <p className="nomDernierLoueur">{logement.host.name}</p>
                        <img className="photoDernierLoueur" src={logement.host.picture} alt="Loueur de l'appartement" />
                    </div>
                    <div className="conteneurEtoiles">
                        <Etoiles etoiles={logement.rating}/>
                    </div>
                </div>
            </div>

            <div className="boxCollapses">
                <Collapse nom="Description" texte={logement.description} />
                <Collapse nom="Equipements" texte={logement.equipments} />
            </div>
        </div>
    )
}
export default ConteneurInfoLogement;