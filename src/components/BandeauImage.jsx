import "../Styles/bandeauImage.css"
import rivageMontagneux from "../assets/Rivage.jpg"

const BandeauImage = () => {
    return (
        <figure className="conteneurImage">
            <img src={rivageMontagneux} alt="Rivage escarpé surmonté d'arbres" className="conteneurImage__image" />
            <p className="conteneurImage__textSurImage">Chez vous, partout et ailleurs</p>
        </figure>
    )
}
export default BandeauImage;