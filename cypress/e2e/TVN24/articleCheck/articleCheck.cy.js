import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('Uzytkownik znajduje sie na stronie glownej tvn24', () => {
    cy.enterTVN24()
})

When('Uzytkownik otwiera najswiezszy artykul', () => {
    cy.wait(1000)
    cy.get('.header-menu__row-list > :nth-child(1) > .link > .link__content > .header-menu-link')
        .should('be.visible')
        .click({force: true})

    cy.url().should('contain', '/najnowsze')
    
    cy.get('.default-teaser__container')
        .first()
        .click()
})

Then('Artykul poprawnie zaladowal sie', () => {
    cy.scrollTo("bottom")
    cy.get('.inline-author')
        .should('be.visible')
})

Then('Uzytkownik manipuluje odtwarzaczem', () => {

    cy.get('.playlist__content')
        .click()
    cy.get('.paused')
        .click({multiple: true})
})