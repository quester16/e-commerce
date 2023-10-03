import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {useState} from "react";
import Cart from "../cart/Cart.jsx";

const Header = () => {

    const cardAmount = useSelector(state => state.productSlice.itemToCart)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container className='position-relative'>
                <Navbar.Brand >
                        <h2>e-commerce</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-baseline">
                        <Link to={"/"} style={{listStyle: 'none', textDecoration: 'none', color: 'inherit'}}>
                            <h5>Home</h5>
                        </Link>
                        <Link to={"/products"} style={{listStyle: 'none', textDecoration: 'none', color: 'inherit', margin:'0 30px 0 20px'}}>
                            <h5>Products</h5>
                        </Link>
                        <Nav.Item style={{cursor: 'pointer'}} onClick={() => setIsOpen(state => !state)}>

                            <img src="src/assets/cart.svg" alt="cart" style={{width: '40px', height: '40px'}}/>
                            {
                                cardAmount.length && <Badge bg="secondary">{cardAmount.length}</Badge>
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

                {isOpen && <Cart/>}
            </Container>
        </Navbar>
    );
}
export default Header;