import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: []
}

export function cartReducer(state, {type, payload = {}}) {
    const { idDrink } = payload;

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink);
    switch (type) {
        case actionTypes.ADD_TO_CART:

            if (drinkInCart) {
                let cartItemsUpdated = state.cartItems.map(item => {
                    if (item.idDrink === payload.idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return {
                        ...item
                    }
                });

                return {
                    ...state,
                    cartItems: cartItemsUpdated,
                };
            } else {
                payload.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }

            }
        case actionTypes.REMOVE_ONE_FROM_CART:

            if (drinkInCart.quantity > 1) {
                let cartItemsUpdated = state.cartItems.map((item) => {
                    if (item.idDrink === payload.idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item
                });

                return {
                    ...state,
                    cartItems: cartItemsUpdated,
                };
            } else {
                let cartItemsUpdated = state.cartItems.filter((item) => item.idDrink != idDrink);

                return {
                    ...state,
                    cartItems: cartItemsUpdated
                };
            }
        case actionTypes.REMOVE_ALL_FROM_CART:

            if (drinkInCart) {
                let cartItemsUpdated = state.cartItems.filter((item) => item.idDrink != idDrink);
                return {
                    ...state,
                    cartItems: cartItemsUpdated
                };
            }

        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }


    }

}