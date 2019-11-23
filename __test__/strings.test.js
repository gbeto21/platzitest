describe('Comprobar cadenas de texto', () => {

    const text = 'es un bonito texto';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    })

    test('No cotiene el siguiente texto', () => {
        expect(text).not.toMatch(/esñ/);
    })

    test('Comprobar tamaño de un texto', () => {
        expect(text).toHaveLength(18);
    })
})