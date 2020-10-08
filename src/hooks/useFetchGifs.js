import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGisf'

export const useFetchGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then(img => {
                setTimeout(() => {
                    setstate({
                        data: img,
                        loading: false
                    })
                }, 500);
            })
    }, [category])

    return state

}