describe('Homepage is available', function () {
    it('check if homepage has correct url', function () {
        cy.visit('https://www.kruegermike.de')
        cy.url().should('contain', 'https://www.kruegermike.de');
    })
})