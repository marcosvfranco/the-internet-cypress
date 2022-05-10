/// <reference types="cypress" />

describe('When opening dropdown page', () => {
    it('then an option is selected in the dropdown', () =>{
        cy.visit('/dropdown')

        // select the first option
        cy.get('#dropdown').select(1)
        
        // assert if its selected
        cy.get('#dropdown').children().eq(1)
            .should('have.attr', 'selected', 'selected');
        
        // assert that the dropdown have 3 options
        cy.get('#dropdown').children().should('have.length', 3)
        
        // asserting again but now refer to the JQuery element and using Chai assertions
        cy.get('#dropdown').children().eq(1).should(($p) => {
            expect($p).to.be.selected
        })
    })
})