import "../styles/conteneurInfoLogementPage2.css"

const Qualites = ({id, tags}) => {

    return (
        tags.map((tag) => (
            <p className="qualite" key={id+tag}>{tag}</p>
        ))

    )
}
export default Qualites;