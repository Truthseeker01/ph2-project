import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { useOutletContext } from "react-router-dom"


function ProductsList(){

    const [ search, setSearch ] = useState("")
    
    function handleChange(e) {
        setSearch(e.target.value)
    }
    const {products} = useOutletContext()
    
    const updatedProducts = products.filter(product => product.description.toLowerCase().includes(search.toLowerCase()))
    const mappedProducts = updatedProducts.map(product => <ProductCard key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} products={products}/>)
    return (
        <>
        <label>Search Product:
            <input type="search" name="search" placeholder="search ..." onChange={handleChange}/>
        </label>
        
        <div className="product-container">
            {mappedProducts}
        </div>
        {/* <footer>FOOTER</footer> */}
        </>
    )
}

export default ProductsList