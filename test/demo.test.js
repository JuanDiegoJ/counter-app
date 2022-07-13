// Forma en la que se inicializa una prueba
// Se compone del título de la prueba
// La función que se va a evaluar

test('Esta prueba no debe fallar', ()=> {
    if (0 === 1) {
        throw new error('No se puede dividir entre 0')
    }
})