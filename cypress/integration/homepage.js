describe('Homepage is available', function () {
    it('check if homepage has correct url', function () {
        cy.visit('https://www.kruegermike.de')
        cy.url().should('contain', 'https://www.kruegermike.de');

    })

    it('check if header element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > div').should('be.visible').contains('Hello World')

    })
})