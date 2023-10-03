import Placeholder from "react-bootstrap/Placeholder";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getCategory} from "./filterSlice.js";

const Category = () => {

    const dispatch = useDispatch()
    const category = useSelector(state => state.filterSlice.category)

    useEffect(() => {
        dispatch(getCategory())
    },[])

    const setCategory = (arr) => {
        return arr.map((item,i) => {
            return(
                <Link key={i} to={'/products/'+item}>
                    <Button variant="secondary" className="mx-2">{item}</Button>
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
