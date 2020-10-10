import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import { AddCategory } from '../../components/AddCategory'


describe('<AddCategory/>', () => {

    const setCategoties = jest.fn()
    let wrapper = shallow(<AddCategory setCategoties={setCategoties} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategoties={setCategoties} />)
    })

    test('should: ', () => {

        expect(wrapper).toMatchSnapshot()
    })


    test('should: simular un cambio en input', () => {
        const input = wrapper.find("input")
        const value = "test input"
        input.simulate('change', { target: { value } })
    })


    test('should: no debe postear la informacion onsubmit', () => {

        wrapper.find("form").simulate("submit", { preventDefault: () => { } })
        expect(setCategoties).not.toHaveBeenCalled()
    })


    test('should: llamar el setCategories y limpiar la caja de texto', () => {
        const value = "test input"
        wrapper.find("input").simulate('change', { target: { value } })
        wrapper.find("form").simulate('submit', { preventDefault: () => { }})
        expect(setCategoties).toHaveBeenCalled()
        expect(wrapper.find("input").prop('value')).toBe("")

    })


})
