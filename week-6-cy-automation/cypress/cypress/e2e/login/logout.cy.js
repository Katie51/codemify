/// <reference types="cypress" />



describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log with existing account as user', () => {
    // Click login button on homepage
    cy.get('[href="/auth/login"]').click();
    //Tape in ser name, password
    cy.get('[name="email"]').type('aro@gmail.com')
    cy.get('[name="password"]').type('aroaro')
    //Click login button
    cy.contains('Login').click()

// Verify user role
    cy.get('a p').should('have.text', 'role: user')
    cy.title().should('eq', 'User: Profile | Delek Homes')
    cy.get('h6').should('have.text', 'Aro  Solo')

// Logout
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains('Logout').click();

  })

  
})
