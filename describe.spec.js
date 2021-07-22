/// <reference types="cypress" />
it.only('A external test...', () => {
    print('Aqui');
})

describe.skip('Shold group tests...', () =>{
    describe('Sould group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })
    describe('Sould group more specific tests 2...', () => {
        it('A specific test 2...', () => {
            
        })
    })
    it('A internal test...', () => {

    })
})