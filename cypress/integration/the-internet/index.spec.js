/// <reference types="cypress" />

describe('when opening index page', () => {
    it('then a list of 44 links is displayed', () =>{
        cy.visit('/')

        cy.title().should('eq', 'The Internet')
        cy.contains('h1', 'Welcome to the-internet')
        cy.contains('h2', 'Available Examples')
        
        // get length of the link list
        cy.get('#content > ul').children().should('have.length', 44)

        // assert each item of the list to be a link
        cy.get('#content > ul > li').children().then((item) =>{
            expect(item).to.have.prop('href')
        })
    })
})