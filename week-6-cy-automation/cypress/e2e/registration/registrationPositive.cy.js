import { faker } from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.string.uuid();

describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should register an account as new user', () => {
    // Click register button on homepage
    cy.get('[href="/auth/register"]').click();
    // Click on First name
    cy.get('[name="firstName"]').type('Kate');
    // Click on Last name
    cy.get('[name="lastName"]').type('Sera');
    //Tape in name, password
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    //Click register button
    cy.get('[type=submit]').click();

    // Verify user role, name, url and page title
    cy.get('a p').should('have.text', 'role: user');
    cy.get('h6').should('have.text', 'Kate  Sera');
    // cy.title().should('eq', 'User: Profile | Delek Homes');
    // cy.url().should('include', 'dashboard/user/profile');


    // Logout
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains('Logout').click();


    //Tape in name, password
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    //Click login button
    cy.contains('Login').click();


    // Verify user role, name, url and page title
    cy.get('a p').should('have.text', 'role: user');
    cy.get('h6').should('have.text', 'Kate  Sera');
    cy.title().should('eq', 'User: Profile | Delek Homes');
    cy.url().should('include', 'dashboard/user/profile');

  })


})
