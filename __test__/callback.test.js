import { callbackHell } from '../callback'

describe('Probando un callback', () => {
    test('Callback', (hecho) => {
        function otherCallback(data) {
            expect(data).toBe('Hola Javascripters')
            hecho();
        }
        callbackHell(otherCallback)
    })
})