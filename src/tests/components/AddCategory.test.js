import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from '../../components/AddCategory'


describe('<AddCategory/>', () => {

    const f = () => { }
    const wrapper = shallow(<AddCategory setCategoties={f} />)

    test('should: ', () => {

        expect(wrapper).toMatchSnapshot()
    })

})
