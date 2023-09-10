import "../Styles/bandeauImage.css"
import rivageMontagneux from "../assets/Rivage.jpg"

const BandeauImage = () => {
    return (
        <figure className="conteneurImage">
            <img src={rivageMontagneux} alt="Rivage escarpé surmonté d'arbres" className="image" />
            <p className="textSurImage">Chez vous, partout et ailleurs</p>
        </figure>
    )
}
export default BandeauImage;