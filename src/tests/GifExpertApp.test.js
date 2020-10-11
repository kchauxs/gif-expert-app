import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import {GifExpertApp} from "../GifExpertApp"


describe('<GifExpertApp/>', () => {


    test('should: mostrar correctamente ', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })


    test('should ', () => {
        const categories = ["boo", "rick"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("GifGrid").length).toBe(categories.length)

    })
    

})

