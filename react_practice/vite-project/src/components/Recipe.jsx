function Recipe(props) {
    return (
        <>
            <div id="recipe">
                <h1 id="title">{props.title}</h1>

                <p id="type">{props.type}</p>
                <p id="duration">{props.duration}</p>
            </div>
        </>
    )}


export default Recipe