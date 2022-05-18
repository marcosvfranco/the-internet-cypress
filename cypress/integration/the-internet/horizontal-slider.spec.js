/// <reference types="cypress" />

describe('When opening horizontal slider page', () => {
    it('and a slider is displayed, the slider is moved to a specific position', () =>{
        cy.visit('/horizontal_slider')
        // to achieve this test goal, we need to use the invoke method to change the value attribute
        // inside the input, and trigger the change event to see the slider being moved.
        const destiny = 1

        cy.get('.sliderContainer > input').invoke('val', destiny).trigger('change')

        // check the value in the slider
        cy.get('.sliderContainer > span')
            .should('have.text', destiny)
    })

    // this second implementation work only with a external plugin named cypress-real-events
    // for input type = range
    // cy.type() fire the event keypress as a simulation, but some components does not work
    // with simulated events, because of that, this plugin fires a real event using
    // Chrome Dev Protocol. So we can use it here.
    it('and a slider is displayed, the slider is moved to a specific position', () =>{
        cy.visit('/horizontal_slider')

        // to achieve this, we need to know the attributes of the slider component
        // min; max; value and step
        // we need to move the slider using the keyboard (right arrow) to move the slider
        // each type the key is pressed, the slider will move one value equal to the "step" attribute

        const destiny = 4
        const step = 0.5
        const initialValue = 0
        const stepsToReachDestiny = (destiny - initialValue) / step 

        // and call the function
        cy.get('.sliderContainer > input').focus()

        Cypress._.times(stepsToReachDestiny, (i) => {
            cy.get('.sliderContainer > input').realType('{rightarrow}')
            cy.get('.sliderContainer > input').trigger('change')
        })

        // check the value in the slider
        cy.get('.sliderContainer > span')
            .should('have.text', destiny)
    })

})