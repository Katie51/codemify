class RegistrationPage {

    get firstNameInput() { return cy.get('[name="firstName"]') };
    get lastNameInput() { return cy.get('[name="lastName"]'); }
    get emailInput() { return cy.get('[name="email"]') }
    get passwordInput() { return cy.get('[name="password"]') }
    get submitBtn() { return cy.get('[type=submit]') }
    get errorEmailReguired() {return cy.contains('Email is required')}
    get errorPasswordRequired() {return cy.contains('Password is required')}
    get errorInputDataValidationFailed() {return cy.contains('Input data validation failed')}

}
export default new RegistrationPage();