import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('Uzytkownik otwiera strone www.tvn24.pl', () =>{
    cy.visit('www.tvn24.pl')
    cy.get('#onetrust-accept-btn-handler')
        .click()
})

Then('Uzytkownik znajduje sie na stronie glownej', () => {
    cy.get('.top-story__media')
        .should('be.visible')
})