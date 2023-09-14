export function getTotalPricesItems (cartItems) {
    return cartItems.map((item) => item.price * item.quantity)
} 