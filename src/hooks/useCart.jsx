import { useEffect, useState } from "react"
import{ db} from "../data/db"
const useCart = () => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []

    }

    const data = db
    const [card, setCard] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(card))
    }, [card])
    function addToCart(item) {
        const itemExist = card.findIndex(automovil => automovil.id === item.id)
        if (itemExist >= 0) {
            const updateCart = [...card]
            updateCart[itemExist].quantity++
            setCard(updateCart)
        } else {
            item.quantity = 1
            setCard([...card, item])
        }
    }
    function removeFromCart(idEliminar) {
        setCard(preCart => preCart.filter(automovil => automovil.id !== idEliminar))
    }
    function decreaseQuantity(id) {
        const updatedCart = card.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCard(updatedCart)
    }
    function increaseQuantity(id) {
        const updatedCart = card.map(item => {
            if (item.id === id && item.quantity < 10) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCard(updatedCart)
    }
    function clearCart() {
        setCard([])
    }

    const cartTotal = card.reduce((total, { quantity, price }) => { return total + (quantity * price) }, 0)

    return{
        data,
        card,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        cartTotal
    }
}
export { useCart }