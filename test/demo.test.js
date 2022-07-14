// Forma en la que se inicializa una prueba
// Se compone del título de la prueba
// La función que se va a evaluar

// Agrupar las pruebas para saber a qué hacen referencias las pruebas

describe('Pruebas en <DemoComponent />', ()=>{
    test('Esta prueba no debe fallar', ()=> {
        
        // 1. Inicialización
        const message1 = 'Hola mundo'
    
        // 2. Estímulo
        const message2 = message1.trim()
    
        // 3. Observar el comportamientos... esperando
        expect(message1).toBe(message2)
    
    })
})
