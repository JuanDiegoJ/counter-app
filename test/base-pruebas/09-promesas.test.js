import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un héroes', () => { 
        const id = 1
        getHeroeByIdAsync( id )
            .then(hero => {
                expect(true).toBe(false)
            })
     })
 })