


describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should not login without email and password', () => {
    // Click login button on homepage
    cy.get('[href="/auth/register"]').click();

    //Leave email and password blank
    // Click on First name
    cy.get('[name="firstName"]').type('Kate');
    // Click on Last name
    cy.get('[name="lastName"]').type('Sera');
    cy.get('[name="email"]').clear();
    cy.get('[name="password"]').clear();
    //Click register button
    cy.get('[type=submit]').click();

    // Verify user cannot be logged in
    cy.contains('Email is required');
    cy.contains('Password is required');

  })


  it('Should not register with an already existing email account', () => {
    // Click login button on homepage
    cy.get('[href="/auth/register"]').click();

    //Leave email and password blank
    // Click on First name
    cy.get('[name="firstName"]').type('Kate');
    // Click on Last name
    cy.get('[name="lastName"]').type('Sera');
     //Tape name which already exists 
     cy.get('[name="email"]').type('aro@gmail.com')
     cy.get('[name="password"]').type('aroaro')
    //Click register button
    cy.get('[type=submit]').click();

    // Verify user cannot be logged in
    cy.contains('Input data validation failed');


  })



})
