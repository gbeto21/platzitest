import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    })

    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano')
    })

    test('Comprobar tamaño arreglo.', () => {
        expect(arrayFruits()).toHaveLength(5);
    })

    test('Comprobaemos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    })
})



