/// <reference types="cypress" />

describe('when opening index page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('then a page is loaded with a h1 title and h2 subtitle', () => {
        cy.title().should('eq', 'The Internet')
        cy.contains('h1', 'Welcome to the-internet')
        cy.contains('h2', 'Available Examples')
    })
    it('then a list of 44 links is displayed', () =>{
        // get length of the link list
        cy.get('#content > ul').children().should('have.length', 44)

        // assert each item of the list to be a link
        cy.get('#content > ul > li').children().then((item) =>{
            expect(item).to.have.prop('href')
        })
    })
})