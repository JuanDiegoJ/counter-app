import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 
    test('debe retornar un String y un Número', () => { 
        const [letter, numbers] = retornaArreglo();
        
        expect( letter ).toBe( 'ABC' )
        expect( numbers ).toBe( 123 )

        expect(typeof letter).toBe('string')
        expect(typeof numbers).toBe('number')

        // Regresa cualquier tipo de String
        expect(letter).toEqual(expect.any(String))

     })
 })