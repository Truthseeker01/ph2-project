import Cartcard from "./Cartcard"
import Calculate from "./Calculate"
import { useOutletContext } from "react-router-dom"

function CartItems () {
    const {cartItems, setCartItems} = useOutletContext()

    function onDelete(id) {
        let itemRemoved = false; 
        const updatedCartItems = cartItems.filter(item => {
       
            if (item.id === id && !itemRemoved) {
                itemRemoved = true; 
                return false; 
            }
            return true; 
        });
        setCartItems(updatedCartItems); 
    }
    //New array for items
    const updatedItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find(accItem => accItem.id === item.id);
    if (existingItem) {
    // If the item is already in acc, update its price and count
        existingItem.price += item.price;
        existingItem.count++;
    } else {
    // If the item is not in acc, add it
        acc.push({ ...item});
    }
    return acc;
    }, []);
    
    if (cartItems == "") {
        return (<h1>Your cart is empty!</h1>)
    }
    return (
        <div className="cart">
            {
            // Render Cartcard for each updated item
            updatedItems.map(item => (
            <Cartcard
            key={item.id}
            image={item.image}
            description={item.description}
            price={item.price}
            count={item.count}
            id={item.id}
            onDelete={onDelete}
            />
            ))
            }
            <Calculate cartItems={cartItems}/>
        </div>
    )
}

export default CartItems
  