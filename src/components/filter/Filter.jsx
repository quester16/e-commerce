import Form from 'react-bootstrap/Form';
import {getCategory} from "../adCarusel/filterSlice.js";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import Button from "react-bootstrap/Button";

import './Filter.scss'
const Filter = () => {

    const [isOpen, setIsOpen] = useState(false)
    const category = useSelector(state => state.filterSlice.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
        //eslint-disable-next-line
    },[])
    const renderCategory = () => {
        return category.map((item, i) => {
            return(
                <option key={i} value={item} >{item}</option>
            )
        })
    }

    function logState(e){
        const select = e.target
        const value = select.options[select.selectedIndex].value
    }

    return(
        <div className="filter">
            <Button variant='secondary' className='my-2' onClick={() => setIsOpen(state=>!state)}>
                <img src="src/assets/filter.svg" alt="filter" style={{height:'40px'}}/>
            </Button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="filter"
                unmountOnExit
                >
                <View renderCategory={renderCategory} logState={logState} isOpen={isOpen}/>

            </CSSTransition>

        </div>
    )
}

export default Filter;

// eslint-disable-next-line react/prop-types
const View = ({renderCategory, logState}) => {
    return(
            <Form>
                <Form.Select aria-label="Default select example" onChange={logState}>
                    <option value='default'>Choose the category</option>
                    {renderCategory()}
                </Form.Select>
            </Form>
    )
}