describe('Sprint Tests', () => {

    it('Can you type in Name field?', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[name="name"]').type("Matthew").should('have.value', "Matthew")
    })

    it('Can you add multiple toppings?', () => {
        cy.get('[name="pepperoni"]').click(),
        cy.get('[name="pineapple"]').click(),
        cy.get('[value="marinara"]').click(),
        cy.get('[name="size"]').select('large')
        
    })

    it('Can you submit the form?', () => {
        cy.get('[id="order-button"]').click()
    })

})