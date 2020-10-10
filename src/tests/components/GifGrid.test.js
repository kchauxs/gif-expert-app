import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid'
import { useFetchGif } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('<GifGrid/>', () => {

    const categoria = "boo"


    test('should: mostrar correctamente el componente GifGrid', () => {

        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={categoria} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should: mostar el texto de la categoria ', () => {
        const wrapper = shallow(<GifGrid category={categoria} />)
        const h3 = wrapper.find("h3")
        expect(h3.text().trim()).toBe(categoria)
    })


    test('should: mostar los items cuando se cargan las imagenes', () => {

        const gifs = [{
            id:"AA111",
            url:"http://localhost/test.jpg",
            title:"cualquier cosa"
        },
        {
            id:"AA122",
            url:"http://localhost/test.jpg",
            title:"cualquier cosa"
        }]

        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={categoria} />)
        expect(wrapper).toMatchSnapshot() 
        expect(wrapper.find("img").exists()).toBe(false)
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
    }) 



})
