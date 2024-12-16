import homePage from "../../page_object/home.page"
import registrationPage from "../../page_object/registration.page"
// import homePage from "../../page_object/home.page"
// import registrationPage from "../../page_object/registration.page"

describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
            // Click login button on homepage
            homePage.registrBtn.click();
            //Leave email and password blank
            // Click on First name
            registrationPage.firstNameInput.type('Kate');
            // Click on Last name
            registrationPage.lastNameInput.type('Sera');
            // Leave email and password fields blank
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            //Click register button
            registrationPage.submitBtn.click();

            // Verify user cannot be logged in
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");

        })

        it('Should not register with an already existing email account', () => {
            // Click register button on homepage
            homePage.registrBtn.click();

            // Click on First name
            registrationPage.firstNameInput.type('Kate');
            // Click on Last name
            registrationPage.lastNameInput.type('Sera');
            //Tape name which already exists 
            registrationPage.emailInput.type('aro@gmail.com');
            registrationPage.passwordInput.type('aroaro')
            //Click register button
            registrationPage.submitBtn.click();

            // Verify user cannot be logged in
            registrationPage.errorInputDataValidationFailed.should("be.visible");

        })

    })