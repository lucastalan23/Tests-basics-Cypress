/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        //cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')
        cy.get('[data-cy=dataSobrenome]').type('Cypress Test 2')
        cy.get('[data-cy=dataSobrenome]').should('have.value', 'Cypress Test 2')
        cy.get('#elementosForm\\:sugestoes').type('textarea')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'textarea')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('campo1')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').should('have.value', 'campo1')
        cy.get(':nth-child(2) > :nth-child(6) > input').type('campo2')
        cy.get(':nth-child(2) > :nth-child(6) > input').should('have.value', 'campo2')
        cy.get(':nth-child(3) > :nth-child(6) > input').type('campo3')
        cy.get(':nth-child(3) > :nth-child(6) > input').should('have.value', 'campo3')
        cy.get(':nth-child(4) > :nth-child(6) > input').type('campo4')
        cy.get(':nth-child(4) > :nth-child(6) > input').should('have.value', 'campo4')
        cy.get(':nth-child(5) > :nth-child(6) > input').type('campo5')
        cy.get(':nth-child(5) > :nth-child(6) > input').should('have.value', 'campo5')
    })

    it('RadioButton test...', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        
        cy.get('#formSexoFem').should('not.be.checked')

        cy.get('[name= formSexo]').should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaCarne')
            .click()
            .should('be.checked')

        cy.get('#formComidaFrango').should('not.be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('not.be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaCarne').should('not.be.checked')
        /*cy.get('#formComidaFrango')
            .click()
            .should('#formComidaFrango', 'be.checked')
        cy.get('#formComidaPizza')
            .click()
            .should('#formComidaPizzas', 'be.checked')
        cy.get('#formComidaVegetariana')*/
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
            .should('not.have.value', '1grauincomp')
            .should('not.have.value', '1graucomp')
            .should('not.have.value', '2grauincomp')
            .should('not.have.value', 'superior')
            .should('not.have.value', 'especializacao')
            .should('not.have.value', 'mestrado')
            .should('not.have.value', 'doutorado')
        
    })
    it('ComboMultiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'Corrida', 'Karate', 'futebol'])
        .should('not.have.value', 'nada')
            
    })
})
