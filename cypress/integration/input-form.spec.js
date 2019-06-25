describe('Input Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Focused on load', () => {
        cy.focused()
            .should('have.id', 'city')
    })

    it('Searchin a weather', () =>{
        const cityText = "Bogor"
        const countryText = "ID"
        cy.get('form').within(() => {
            cy.get('input#city').type(cityText)
            .should('have.value', cityText)
            cy.get('input#country').type(countryText)
            .should('have.value', countryText)
          })

    })

    context('Form Submission', () => {
        it('Checking the weather', () => {
            const cityText = "Bogor"
            const countryText = "ID"
            cy.get('form').within(() => {
                cy.get('input#city').type(cityText)
                .should('have.value', cityText)
                cy.get('input#country').type(countryText)
                .should('have.value', countryText)
              }).type('{enter}')
        })
    })

})