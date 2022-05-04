/// <reference types="cypress" />

describe('when opening keypress page', () => {
    it('and typing something in the field, then the last character is registered', () =>{
        cy.visit('/key_presses')
        cy.get('#target').type('This is a keypress test')

        cy.get('#result').contains('T')
    })
})