/// <reference types="cypress" />

describe('loginTest', () => {
    it('login', () => {
        cy.enterTVN24()

        cy.get('.account-standard')
            .invoke('show')
        cy.wait(2000)
            
        cy.get('.account-content__button--large')
            .click({force: true})
            cy.wait(2000)
        
        cy.get('#login_by_email')
            .click()
        
        cy.get('[autocomplete="username"]')
            .type('martynadoztest@op.pl')

        cy.get('#password')
            .type('J@vorzk@13!')

        cy.get('#sign_in')
            .click()
            
    //Ze względu na captcha wymagane ponowne klikniecie po załadowaniu
        cy.get('#sign_in')
            .click()
        
        
    })
})