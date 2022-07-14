import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el 02-template-string', () => { 
    test('getSaludo debe retornar "Hola Juan Diego"', () => { 
        const name = 'Juan Diego'
        const message = getSaludo( name )
     })
 })