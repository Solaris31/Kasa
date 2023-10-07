import "../styles/etoiles.css"

const Etoiles = (props) => {

    const tableauEtoiles = [];

    //  On boucle suivante la valeurs de la props pour afficher autant de detoiles
    for (let i=0; i < props.etoiles; i++ ) {
        tableauEtoiles.push(<i key={i} className="fa-solid fa-star fa-lg rose"></i>)
    }
    
    // et on complete par le nombre detoiles grises pour arriver a un total de 5 etoiles
    for (let i=props.etoiles; i<5 ; i++) {
        tableauEtoiles.push(<i key={i} className="fa-solid fa-star fa-lg gris"></i>)
    }

    return (
        <div className="conteneurEtoiles">
            {tableauEtoiles}
        </div>
    )
}
export default Etoiles;