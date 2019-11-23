import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(3);
    });
    test('Multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(20);
    })
    test('Restar', () => {
        expect(restar(2, 1)).toBe(20);
    })
    test('Dividir', () => {
        expect(dividir(10, 5)).toBe(20);
    })

});