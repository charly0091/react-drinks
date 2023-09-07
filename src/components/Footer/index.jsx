import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`py-5 ${styles.footer}`}>
            <small>Drink app</small>
        </footer>
    )
}