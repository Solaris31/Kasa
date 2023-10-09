import "../styles/boxCollapses.css"
import Collapse from "./Collapse";
import texteAPropos from "../assets/texteAPropos.json"

const BoxCollapses = () => {

    return (
        <div className="boxCollapsesPage2">
            {texteAPropos.map((collapse, index) => (
                <Collapse key={index} nom={collapse.qualite} texte={collapse.texte}/>
            ))}
        </div>
    )
}
export default BoxCollapses;