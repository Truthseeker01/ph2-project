
function Calculate({cartItems}){

    const price = (cartItems == "") ? 
    0
    :
    cartItems.map(item => item.price).reduce((acc, sum) => acc + sum);
    const tax = (price * 0.08).toFixed(2)
    const deliveryFee = (tax != 0.00) ? 16.99 : 0
    const total = parseFloat(price) + parseFloat(tax) + deliveryFee

    return (
        <div id="calculate">
            <p>SubTotal: </p>
            <span>{price.toFixed(2)}$</span>
            <p>Estimated Tax:</p>
            <span>{tax}$</span>
            <p>Delivery Fee:</p>
            <span>{deliveryFee}$</span>
            <p id="line"></p><p></p>
            <p>Total:</p>
            <span>{total.toFixed(2)}$</span>
        </div>
    )
}

export default Calculate