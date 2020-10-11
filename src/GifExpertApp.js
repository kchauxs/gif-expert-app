import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { CleanButton } from './components/CleanButton'

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategoties] = useState(defaultCategories)

    return (
        <Fragment>
            <h2>GifExpertApp {":)"}</h2>
            <AddCategory setCategoties={setCategoties} />
            <CleanButton setCategoties={setCategoties} />
            <hr />
            <ol>
                {categories.map(cat => <GifGrid category={cat} key={cat} />)}
            </ol>
        </Fragment>
    )
}
