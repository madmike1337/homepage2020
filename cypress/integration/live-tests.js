describe('Homepage is available', function () {
    it('check if homepage has correct url', function () {
        cy.visit('https://www.kruegermike.de')
        cy.url().should('contain', 'https://www.kruegermike.de');

    
    })
})

describe('Homepage Elements are visible', function () {
    it('check if header element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > header > div').should('be.visible')

    })

    it('check if qa-element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > section:nth-child(2)').should('be.visible')

    })

    it('check if video-element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > video').should('be.visible')

    })

    it('check if project-element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > section:nth-child(5)').should('be.visible')

    })

    it('check if footer-element is visible', function () {
        cy.visit('https://www.kruegermike.de')
        cy.get('body > section.footer').should('be.visible')

    })
})