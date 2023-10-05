import Placeholder from "react-bootstrap/Placeholder";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getCategory, getFilter} from "./filterSlice.js";

const Category = () => {

    const category = useSelector(state => state.filterSlice.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    },[])

    const setCategory = (arr) => {
        return arr.map((item,i) => {
            return(
                <Link key={i} to={'/products/'} >
                    <Button variant="secondary" className="m-2" onClick={() => dispatch(getFilter(item))}>{item}</Button>
                </Link>
            )
        })
    }

    return(
        <div className="text-center">
            { category.length < 1 ?
                <div className="placeholders">
                    <Placeholder.Button xs={1} aria-hidden="true" className="mx-1"/>
                    <Placeholder.Button xs={1} aria-hidden="true" className="mx-1"/>
                    <Placeholder.Button xs={1} aria-hidden="true" className="mx-1"/>
                    <Placeholder.Button xs={1} aria-hidden="true" className="mx-1"/>
                </div>  : setCategory(category)
            }
        </div>
    )
}

export default Category;
