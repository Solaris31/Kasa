import "../Styles/location.css"

const Location = ({id, cover, title}) => {
    return (
        <div className="card">
            <figure className="conteneurLocation">
                <img 
                    src={cover}
                    alt={`Imageprincipale de l'appartement ${title}`}
                    title={title}
                    id={id}
                    className="conteneurLocation__imageLocation"/>
            </figure>
            <p className="titreLocation">{title}</p>
        </div>
    )
}
export default Location;