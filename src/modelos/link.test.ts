import Link from "./link"

describe('Criacao de links', () => {
    test('Criar link', () => {
        const link = new Link ('cubosacademy', 'https://cubosacademy.com.br') 

        expect(link).toHaveProperty('identificador')
        expect(link).toHaveProperty('url', 'https://cubosacademy.com.br')
        expect(link).toHaveProperty('visitas', 0)
    })
})

