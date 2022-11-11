import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

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
        .contains('Autor')
})

When('Uzytkownik pauzuje odtwarzanie', () => {

    cy.get('.sc-elYLMi')
        .click()
    cy.get('.playing.nuviPlayPauseButton')
        .click()
})