import "../Styles/infosLogement.css"
import ConteneurImgLogement from "../components/ConteneurImgLogement.jsx"
import ConteneurInfoLogement from "../components/ConteneurInfoLogement.jsx"

const InfosLogement = ({logement}) => {

    return (
        <div className="conteneurLogement">
            <ConteneurImgLogement />
            <ConteneurInfoLogement logement={logement}/>
        </div>
    )
}
export default InfosLogement;