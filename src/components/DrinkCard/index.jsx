import { Col, Card, Button, Row } from "react-bootstrap";
import { useDrinks } from "../../hooks/useDrinks";
import propTypes from "prop-types";
import { useCart } from "../../hooks/useCart";

export default function DrinkCard({ drink }) {
    const { handleModalClick, handleDrinkIdClick } = useDrinks();
    const {addToCart} = useCart()

    function handleAddToCart (drink) {
        addToCart(drink)
    }

    return (
        <Col md={6} ld={3}>
            <Card className="mb-4" shadow-sm>
                <Card.Img variant="top" src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />
                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Card.Subtitle style={{marginBottom: 2}}>{drink.price}</Card.Subtitle>
                    <Row >
                        <Col >
                            <Button
                                variant="warning"
                                className="text-uppercase"
                                onClick={
                                    () => {
                                        handleModalClick();
                                        handleDrinkIdClick(drink.idDrink);
                                    }
                                } >
                                Ver Receta
                            </Button>
                        </Col>
                        <Col >
                            <Button
                                variant="primary"
                                className="text-uppercase"
                                onClick={() => handleAddToCart(drink)}
                                 >
                                Carrito
                            </Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: propTypes.shape({
        strDrink: propTypes.string.isRequired,
        strDrinkThumb: propTypes.string.isRequired,
        idDrink: propTypes.string.isRequired,
        price: propTypes.number.isRequired
    }).isRequired,
}

