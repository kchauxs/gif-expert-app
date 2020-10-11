import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import { useFetchGif } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


describe('<useFetchGifs/>', () => {
    


    test('should: retornar el estado inicial', async() => {

        const category = "patricio"
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGif(category))
        const { data, loading } = result.current
        await waitForNextUpdate()
        expect(data).toEqual([])
        expect(loading).toBe(true)
        
    })


    test('should: debe retornar todas la imagenes y el loading en false', async () => {
        const category = "patricio"
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGif(category))
        await waitForNextUpdate()
        const { data, loading } = result.current

        expect(data.length).toEqual(10)
        expect(loading).toBe(false)
    })
    
    
})
