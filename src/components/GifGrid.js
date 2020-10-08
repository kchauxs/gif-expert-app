import React, { Fragment } from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import logo from '../logo.svg';
// import { getGifs } from '../helpers/getGisf'

export const GifGrid = ({ category }) => {
    
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])


    const { data:images, loading } = useFetchGif(category)


    return (
        <Fragment>
            <h3 className="animate__bounceIn">{category}</h3>

            {/* {loading && <p>Cargando...</p>} */}
            {loading &&  <img src={logo} className="App-logo" alt="logo" />}

            <div className="card-grid">

                {
                    images.map(img => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </Fragment>
    )
}
