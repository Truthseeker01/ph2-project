import { useState } from "react"
import CartItems from "./CartItems"
import { useOutletContext } from "react-router-dom"

function ProductCard({ id, image, description, price, products }) {
    const {handleClick} = useOutletContext()


    return (
        <div className="card">
            <img alt="product" src={image}/>
            <p>{description}</p>
            <span>{price}$</span>
            <button onClick={() => handleClick(id)}>Add to Cart</button>
          
        </div>
    )
}

export default ProductCard
