import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategoties }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => setInputValue(e.target.value)

    const handleSumit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2 ) {
            setCategoties(categories => [ inputValue,...categories])
        }
        setInputValue("")
    }

    return (
        <form onSubmit={handleSumit}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add Category" />
        </form>
    )
}

AddCategory.protoType = {
    setCategoties:PropTypes.func.isRequired         
}
