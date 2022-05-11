/// <reference types ="cypress"/>

describe('Login', () => {


    it("open Jakibi Page login page", () => {
        cy.visit("https://staging.jakibi.com/buyer")
        cy.clickLink('.header-container--desktop > .header__nav > .nav > :nth-child(4) > a')
        cy.clickLink('.title-signin > .tos')
    })

    it("enter account credentials", () => {
        cy.fixture('credentials').then(function (data) {
            this.data = data;
            cy.enterLoginInfo(this.data.email, this.data.password)
        })
    })

    it("click Continue button", () => {
        cy.get('.login-btn').click({force: true})
    })

    it("has account icon", () => {
        cy.get('.user-menu-control > span', {"timeout": 10000}).should('be.visible')
    })

    it("connect tab is not visible", () => {
        cy.contains('Connect').should('not.exist')
    })
    
    it("logout", () => {
        cy.get('.user-menu-control > span').click({ force: true })
        cy.get(':nth-child(3) > button').click({ force: true })
    })
})