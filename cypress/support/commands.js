///<reference types="cypress" />

Cypress.Comannds.add('enterTVN24.pl', () => {

    cy.visit('www.tvn24.pl')
    cy.get('#onetrust-accept-btn-handler')
        .click()
})
