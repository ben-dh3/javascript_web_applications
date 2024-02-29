function Product(props) {
    return (
        <>
            <div id="product">
                <h1 id="name">{props.name}</h1>

                <p id="description">{props.description}</p>
                <p id="price">{props.price}</p>
            </div>
        </>
    )}


export default Product