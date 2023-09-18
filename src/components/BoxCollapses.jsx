import "../Styles/boxCollapses.css"
import Collapse from "./Collapse";

const BoxCollapses = () => {
    return (
        <div className="boxCollapses">
            <Collapse nom="Fiabilité"/>
            <Collapse nom="Respect"/>
            <Collapse nom="Service"/>
            <Collapse nom="Sécurité"/>
        </div>
    )
}
export default BoxCollapses;