import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


export const CleanButton = ({ setCategoties }) => {

    const handleClear = () => setCategoties([])

    return (
        <Fragment>
            <button onClick={handleClear} className="btn-clean">Clear </button>
        </Fragment>
    )
}

CleanButton.protoType = {
    setCategoties: PropTypes.func.isRequired
}
