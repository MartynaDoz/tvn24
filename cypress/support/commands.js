///<reference types="cypress" />

Cypress.Commands.add('enterTVN24.pl', () => {

    cy.visit('www.tvn24.pl')
    cy.get('#onetrust-accept-btn-handler')
        .click()
})
