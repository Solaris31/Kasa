import "../styles/boxCollapses.css"
import Collapse from "./Collapse";
import aPropos from "../assets/aPropos.json"

const BoxCollapses = () => {

    return (
        <div className="boxCollapsesPage2">
            {aPropos.map((collapse, index) => (
                <Collapse key={index} nom={collapse.qualite} texte={collapse.texte}/>
            ))}
        </div>
    )
}
export default BoxCollapses;