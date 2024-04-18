import { Link } from "react-router-dom"

function NavBar({isClicked}) {

    const className = (isClicked) ? "L-link" : "D-link";
    console.log(className)

    return (
        <nav>
            <Link className={`${className} link`} to="/">ProductsList</Link>
            <Link className={`${className} link`} to="cartitems">Cart</Link>
            <Link className={`${className} link`} to="checkout">Checkout</Link>
        </nav>
    )
}

export default NavBar