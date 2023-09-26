import "../Styles/boxCollapses.css"
import Collapse from "./Collapse";

const BoxCollapses = () => {
    return (
        <div className="boxCollapsesPage2">
            <Collapse nom="Fiabilité" texte="Les annonces postées sur Kasa garantissentune fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
            <Collapse nom="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
            <Collapse nom="Service" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
            <Collapse nom="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes"/>
        </div>
    )
}
export default BoxCollapses;