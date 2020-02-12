describe('Homepage is available', function () {
    it('check if user can visit my homepage', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > header > div > div > h1').contains('Hello World')
        cy.wait(1500)
    
    })
})