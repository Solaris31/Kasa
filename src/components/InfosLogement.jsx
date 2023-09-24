import "../Styles/infosLogement.css"
import ConteneurImgLogement from "../components/ConteneurImgLogement.jsx"
import ConteneurInfoLogement from "../components/ConteneurInfoLogement.jsx"

const InfosLogement = () => {
    return (
        <div className="conteneurLogement">
            <ConteneurImgLogement />
            <ConteneurInfoLogement />
        </div>
    )
}
export default InfosLogement;