import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {getCartItem} from "../product-list/productsSlice.js";

//eslint-disable-next-line
const ProductSingle = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {title, image, description, price} = data

    const dispatch = useDispatch()

    const minimizeDescrip = string => {
        const str = string.split(" ")
        const newString = str.map((letter,i) =>{
            if(str.length < 6) return letter
            else if(i === 5){
                return str.slice(0, i) + '...'
            }
        })
        return newString.join(" ")
    }


    return(
        <div className="col text-center mb-3">
            <Card className="justify-content-end" style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" src={image} style={{maxHeight: '200px', objectFit: 'cover', padding: '5px'}}/>

                <Card.Body>
                    <Card.Title>{minimizeDescrip(title)}</Card.Title>
                    <Card.Text>{minimizeDescrip(description)}</Card.Text>
                    <Card.Text className="position-absolute mb-2 bottom-0" style={{right: 10}}>
                        <strong>{price}</strong>$
                    </Card.Text>
                    <div className="position-absolute mb-2 bottom-0 ">
                        <Button variant="primary" onClick={() => dispatch(getCartItem(data))}>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductSingle;