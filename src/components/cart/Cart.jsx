import ListGroup from 'react-bootstrap/ListGroup';
import './Cart.scss'
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
const Cart = () => {


    const cartItems = useSelector(state => state.productSlice.itemToCart)
    const renderList = (arr = []) => {
        return arr.map(item => {
            return <ListGroup.Item as="li" key={item.id}>{item.title}</ListGroup.Item>
        })
    }

    return (
        <ListGroup as="ol" numbered className='cart'>
            {renderList(cartItems)}
            <Button variant='primary'>Order</Button>
        </ListGroup>
    );

}

export default Cart;