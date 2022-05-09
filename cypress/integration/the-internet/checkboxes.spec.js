/// <reference types="cypress" />

describe('when opening checkboxes page', () => {
    it('then a list of checkboxes is displayed', () =>{
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