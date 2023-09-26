import Collapse from "../components/Collapse.jsx"
import "../Styles/conteneurInfoLogementPage2.css"


const ConteneurInfoLogement = () => {

    return (
        <div className="conteneurLogement">
            <div className="conteneurInformationsLogement">
                <div className="descriptionLogement">
                    <p className="descriptionImg">Cosy loft on the nanana</p>
                    <p className="localisationImg">localisationImg</p>
                </div>
                <div className="conteneurDernierLoueur">
                    <p className="nomDernierLoueur">Alexandre Dumas</p>
                    <div className="photoDernierLoueur"></div>
                </div>
            </div>
            <div className="conteneurQualitésEtoiles">
                <div className="conteneurQualites">
                    <div className="qualite">qualité</div>
                    <div className="qualite">qualité</div>
                    <div className="qualite">qualité</div>
                </div>
                <div className="conteneurEtoiles">
                    <div className="etoile">etoile</div>
                </div>
            </div>
            <div className="boxCollapses">
                <Collapse nom="Description" texte="texte1" />
                <Collapse nom="Equipements" texte="texte2" />
            </div>
        </div>
    )
}
export default ConteneurInfoLogement;