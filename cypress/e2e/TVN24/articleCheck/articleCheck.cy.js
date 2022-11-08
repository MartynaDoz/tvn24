import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('Uzytkownik znajduje sie na stronie glownej tvn24', () => {
    cy.enterTVN24()
})

When('Uzytkownik otwiera dowolny artykul', () => {
    cy.get('.link__content')
        .contains('POLSKA')
        .click()

    cy.get('.news-of-the-day__item')
        .click()
})