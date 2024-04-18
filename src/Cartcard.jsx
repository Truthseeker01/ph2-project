

function Cartcard({ id, image, description, price, onDelete, count}) {

    return (
        <div id="cartcard">
        <img alt="product" src={image}/>
        <p>{description}</p>
        <p>Price: {price}</p>
        <br></br>
        <button onClick={() => onDelete(id)}>Remove from Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {count}</button>
        </div>
    )
}

export default Cartcard