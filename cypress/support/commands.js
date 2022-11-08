///<reference types="cypress" />


//reuzywalna metoda
Cypress.Commands.add('enterTVN24', () => {

    cy.visit('www.tvn24.pl')
    cy.get('#onetrust-accept-btn-handler')
        .click()
})
