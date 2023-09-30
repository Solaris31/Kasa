import "../Styles/etoiles.css"

const Etoiles = (props) => {

    const tableauEtoiles = [];

    for (let i=0; i < props.etoiles; i++ ) {
        tableauEtoiles.push(<i key={i} class="fa-solid fa-star fa-lg rose"></i>)
    }
    for (let i=props.etoiles; i<5 ; i++) {
        tableauEtoiles.push(<i key={i} class="fa-solid fa-star fa-lg gris"></i>)
    }

    return (
        <div className="conteneurEtoiles">
            {tableauEtoiles}
        </div>
    )
}
export default Etoiles;