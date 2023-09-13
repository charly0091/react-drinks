import { createContext, useReducer } from "react"
import Proptypes from "prop-types"
import { actionTypes } from "../actions/cart.actions";
import { cartInitialState, cartReducer } from "../reducers/cart.reducer";
const CartContext = createContext();



function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    function removeOneFromCart(idDrink) {
        dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: { idDrink } })
    }

    function removeAllFromCart() {
        dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: { idDrink } })

    }

    function clearCart() {
        dispatch({type: actionTypes.CLEAR_CART})
    }

    function sendOrder() {
        alert(JSON.stringify(state))
    }

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.Proptypes = {
    children: Proptypes.node.isRequired
}

export { CartProvider, CartContext } 
