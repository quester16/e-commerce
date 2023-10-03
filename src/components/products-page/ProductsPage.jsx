import Filter from "../filter/Filter.jsx";

const ProductsPage = ({elements}) => {

    return(
        <div className="container">
            <Filter/>
            <div className="row text-center">
                {elements}
            </div>
        </div>
    )
}

export default ProductsPage