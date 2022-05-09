/// <reference types="cypress" />

describe('when open a page with basic auth', () => {
    it('then the authentication is done and the page is loaded', () =>{
        // this is just a demonstration of how to visit a page with basic auth.
        // it's not recommended to expose credentials in the code.
        cy.visit('/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })

        cy.contains('Congratulations! You must have the proper credentials.')
    })
})