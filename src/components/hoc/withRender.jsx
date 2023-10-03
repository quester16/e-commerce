import ProductSingle from "../product-single/ProductSingle.jsx";
import Spinner from "../spinner/Spinner.jsx";
import Error from "../error/Error.jsx";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../product-list/productsSlice.js";

const withRender = (Component, limit = true) => {
    // eslint-disable-next-line react/display-name
    return function (){
        const type = limit ? 'limit' : 'all'
        const {products, productsLoadingStatus} = useSelector(state => state.productSlice)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(fetchProducts(type))
            //eslint-disable-next-line
        }, [])


        const renderProductCards = (arr) =>{
            if(arr.length < 1) return <h5 className="text-center text-bg-secondary">Something went wrong</h5>

            return arr.map(({id, ...props})=> {
                return <ProductSingle key={id} id={id} data={props} status={productsLoadingStatus}/>
            })
        }

        if(productsLoadingStatus === 'loading'){
            return <Spinner/>
        } else if(productsLoadingStatus === 'error') {
            return <Error/>
        }

        const elements = renderProductCards(products)

        return <Component elements={elements}/>
    }

}

export default withRender;