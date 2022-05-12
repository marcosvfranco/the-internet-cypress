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

    // this second implementation does not work for input type = range
    // however it's a good solution to see the slider being changed like in the real world
    it.skip('and a slider is displayed, the slider is moved to a specific position', () =>{
        cy.visit('/horizontal_slider')

        // to achieve this, we need to know the attributes of the slider component
        // min; max; value and step
        // we need to move the slider using the keyboard (right arrow) to move the slider
        // each type the key is pressed, the slider will move one value equal to the "step" attribute

        const destiny = 1
        const step = 0.5
        const initialValue = 0
        const stepsToReachDestiny = (destiny - initialValue) / step 

        // now we repeat x times (stepsToReachDestiny) 
        // the key press to reach the value
        const keyboardCommandRepeated = '{rightArrow}'.repeat(stepsToReachDestiny)

        // and call the function
        cy.get('.sliderContainer > input').click()
        // cy.get('.sliderContainer > input').invoke('val', 3).trigger('change')

        cy.get('.sliderContainer > input').type(keyboardCommandRepeated, { force: true, log: true }).trigger('change')

        // check the value in the slider
        cy.get('.sliderContainer > span')
            .should('have.value', destiny)
    })

})