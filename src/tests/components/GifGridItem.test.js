import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => {


    const title = "El test"
    const url = "https:/laimagentest.com"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should: mostrar correctamente el componente GifGridItem ', () => {

        expect(wrapper).toMatchSnapshot()
    })


    test('should: mostrar el parrafo', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('should: mostrar la imgagen', () => {

        const img = wrapper.find('img')
        // console.log(img.html())
        // console.log(img.props())

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })


    test('should: tener la clase animate__bounce', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        
        expect(className.includes("animate__bounce")).toBe(true)
    })

})
