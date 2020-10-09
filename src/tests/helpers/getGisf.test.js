
import { getGifs } from '../../helpers/getGisf'

describe('getGifs', () => {

        test('should: recibir 10 elementos', async () => {

                const gifs = await getGifs("Bob esponja")
                expect(gifs.length).toBe(10)
        })

        test('should: recibir 10 elementos', async () => {

                const gifs = await getGifs("")
                expect(gifs.length).toBe(0)
        })

})
