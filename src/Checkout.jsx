import { useState } from "react"
import { useOutletContext } from "react-router-dom"

function Checkout() {

    const [ address_1, setAddress_1 ] = useState("")
    const [ address_2, setAddress_2 ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState ] = useState("")
    const [ card, setCard ] = useState(0)
    const [ date, setDate ] = useState("")
    const [ cvv, setCvv ] = useState(0)
    const [ name, setName ] = useState("")
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    const {cartItems} = useOutletContext()

    function onSubmit(e) {
        e.preventDefault()
        setIsSubmitted(!isSubmitted)
        fetch("http://localhost:3000/paymentData", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                "Accept": "application/JSON"
            },
            body: JSON.stringify({
                address_1: address_1,
                address_2: address_2,
                city: city,
                state: state,
                card_number: card,
                expiration_date: date,
                cvv: cvv,
                name: name
            })
        })
        setAddress_1("")
        setAddress_2("")
        setCard(0)
        setCity("")
        setCvv(0)
        setDate("")
        setName("")
        setState("")
    }

    if (cartItems == "") {
        return <h1>Oops! Looks like your cart is empty.</h1>
    } else if (isSubmitted) {
        return <div id="track">
            <h2>~PAYMENT CONFIRMED~</h2>
            <h3>Your tracking number is 123456789</h3>
            <p>Your package is expected to be delivered in 3 days</p>
            <p>If you have any questions, contact us at <a href="mailto:leigion@gmail.com">leigion@gmail.com</a></p>
        </div>
    }
    return (
        <div className="checkout">
            <form className="address" onSubmit={onSubmit}>
                <h2>Shipping Address:</h2>
                <label><p>Line 1</p>
                    <input type="text" name="address_1" onChange={(e) => setAddress_1(e.target.value)} value={address_1} required />
                </label>
                <label><p>Line 2</p>
                    <input type="text" name="address_2" onChange={(e) => setAddress_2(e.target.value)} value={address_2} />
                </label>
                <label><p>City</p>
                    <input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} required />
                </label>
                <label><p>State</p>
                    <input type="text" name="state" onChange={(e) => setState(e.target.value)} value={state} required />
                </label>
                    <h2>Payment Info:</h2>
                <label><p>Card No.</p>
                    <input type="number" name="card_number" onChange={(e) => setCard(e.target.value)} value={card} minlength="16" maxlength="16" pattern="[0-9]{16}" required />
                </label>
                <label><p>Expiration Date</p>
                    <input type="date" name="expiration_date" onChange={(e) => setDate(e.target.value)} value={date} required />
                </label>
                <label><p>CVV</p>
                    <input type="number" name="cvv" onChange={(e) => setCvv(e.target.value)} value={cvv} minlength="3" maxlength="3" pattern="[0-9]{3}" required />
                </label>
                <label><p>Name on Card</p>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                </label>
                <label>
                    <input style={{
                        background: "white",
                        color: "#111"
                    }} type="submit" name="submit" value="CONFIRM" />
                </label>
            </form>
                
        </div>
    )
}

export default Checkout