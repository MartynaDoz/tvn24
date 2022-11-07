import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('Uzytkownik znajduje sie na stronie glownej www.google.com', () => {
    cy.visit("www.google.com")

})