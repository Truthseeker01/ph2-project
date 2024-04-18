import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { useState, useEffect } from "react"
import ToggleMode from "./ToggleMode"

function App() {
  
  const [ products, setProducts ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(products => setProducts(products))
    }, [])

  const [ cartItems, setCartItems ] = useState([])

  function handleClick(id){
    const newItem = products.find(product => product.id === id) //using find because it returns an element while filter returns an array that contains that element.
    setCartItems(cartItems => [...cartItems, newItem])
  }

  const [ isClicked, setIsClicked ] = useState(true)

  function toggleMode(){
    setIsClicked(!isClicked)
    document.body.style.backgroundColor = (!isClicked) ? "#fff" : "#222";
    document.body.style.color = (!isClicked) ? "#656B6F" : "#fff";
    document.querySelector("h1").style.backgroundColor =  (!isClicked) ? "rgb(77, 81, 84)" : "#111";
    document.querySelector("h1").style.color = (!isClicked) ? "#fff" : "#fff";
    document.querySelector("nav").style.backgroundColor = (!isClicked) ? "#fff" : "#222";
    }

  return (
    <div id="main">
      <h1>LEGION</h1>
      <NavBar isClicked={isClicked}/>
      <ToggleMode toggleMode={toggleMode} /> 
      <Outlet  context={{products: products, handleClick: handleClick, cartItems: cartItems, setCartItems: setCartItems}}/>
    </div>
  )
}

export default App
