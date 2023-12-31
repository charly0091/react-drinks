import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './MainLayout.module.css';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CartModal from '../components/CartModal';

export default function MainLayout({children}) {
    return(
        <div className={styles.main}>
            <Header />
            <Container className="mt-5">
                {children}
            </Container>
            <CartModal />
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}