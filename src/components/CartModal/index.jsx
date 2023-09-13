import styles from "./CartModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import { ModalCard } from "./components/Card";

export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const {cart, clearCart, sendOrder} = useCart()


    if (isOpen) {
        return (
            <div className={styles.modalBg}>
                <div className={styles.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal}/>
                    <h2>Carrito</h2>
                    <section className={styles.modalBody}>
                        <div className={styles.modalDrinksListContainer}>
                            {cart.cartItems.map((drink) => {
                                <ModalCard key={drink.idDrink} drink={drink}  />
                            })}
                            
                        </div>
                        <i>tachito</i>
                        <aside>
                            <p>Subtotal: X</p>
                            <p>Total: X</p>
                            <div className={styles.btnContainer}>
                                <button className={styles.clearCart} onClick={clearCart}>Vaciar</button>
                                <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar</button>
                            </div>
                        </aside>
                    </section>
                </div>
            </div>
        )
    }
}