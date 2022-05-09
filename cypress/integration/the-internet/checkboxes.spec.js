/// <reference types="cypress" />

describe('When opening checkboxes page', () => {
    it('and a list of checkboxes is displayed, the checkboxes are checked and unchecked', () =>{
        cy.visit('/checkboxes')

        // example of how to get the checked attribute (if exists, if does not will return undefined)
        cy.get('#checkboxes > input').eq(0).invoke('attr', 'checked').then((elem) => {
            console.log(elem)
        })

        // check the first checkbox and assert if it's checked
        cy.get('#checkboxes > input').eq(0).check()
            .should('have.attr', 'checked')

        // uncheck the first checkbox and assert if it's unchecked
        cy.get('#checkboxes > input').eq(1).uncheck()
            .should('not.have.attr', 'checked')
    })
})