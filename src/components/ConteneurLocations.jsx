import Location from "../components/Location.jsx"
import "../Styles/conteneurLocations.css"
import Tableau from "../assets/kasa"


const ConteneurLocations = () => {

    return (
        
        <div className="conteneurLocations">
            { Tableau.map((tab) => 
                <Location key={tab.id} id={tab.id} cover={tab.cover} title={tab.title} />
            )}
        </div>
    )
}
export default ConteneurLocations;