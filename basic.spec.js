/// <reference types ="cypress" />

const { stubObject } = require("cypress/types/lodash")

describe('Cypress basics', () => {
    it('Visita uma página', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', "Campo de Treinamento")
        const titulo = cy.title().debug(stubObject).should('contain', "Campo")
        
    })

    it('Printa o titulo', () => {        
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
           console.log(titulo)
    })

    it('Escreve o titulo em um campo', () => {        
        const titulo = 'ABCDEFGHIJKL'
        cy.get('input[name="formNome"').type(titulo);
        console.log('end')
    }, 1000)

    it('testes aleatórios', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        cy.get('#buttonLazy').click()
        cy.get('#buttonCount').click()
        cy.get('#buttonList').click()
        cy.get('#buttonListDOM').click()
        cy.get('#buttonPopUp').click()
        cy.get('#buttonDelay').click()
        cy.get('#buttonNow').click()
        cy.get('#buttonTimePassed').click()
        cy.get('#formNome').type('Lucas')
        cy.get('#formNome').should('have.length', '1')
        cy.get('[data-cy=dataSobrenome]').type('Talam')
        cy.get('#formComidaCarne').click()
        cy.get('#formComidaFrango').click()
        cy.get('#formComidaPizza').click()
        cy.get('#formComidaVegetariana')
        //cy.get('[value="natacao"]').click()
       // cy.get('#elementosForm\:sugestoes').type('Proposta: 1 proposta, opinião, palpite, pitaco, conselho, recomendação, alvitre, observação.Estímulo para a realização de algo:2 estímulo, incentivo, impulso, incitação, instigação, inspiração, suscitação, tentação.Ideia insinuada:3 ideia, insinuação, lembrança, alusão.Ameaça para conseguir algo:4 ameaça, intimidação, intimação, persuasão, sugesta.')
    })
})