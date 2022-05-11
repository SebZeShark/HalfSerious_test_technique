// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('enterLoginInfo', (email, password) => {
    cy.get(':nth-child(1) > ion-col.md > .input-container > .ng-untouched > .native-input').type(email)
    cy.get(':nth-child(2) > :nth-child(1) > .input-container').type(password)
    
})


Cypress.Commands.add('clickLink', (link) => {
    cy.get(link).click({ force: true })
    cy.wait(500)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
