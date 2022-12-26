import React from 'react'
import { useState } from 'react'

export const AddCategory = (props) => {
    const [inputValue, setinputValue] = useState("");
    const onChange = ({ target }) => {
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        props.onNewCategory(inputValue);
        setinputValue("");
    }
    return (
            <form onSubmit={(event) => onSubmit(event)}>
                <input type="text" placeholder='Search' onChange={onChange}  value ={inputValue}/>
            </form>
    )
}
