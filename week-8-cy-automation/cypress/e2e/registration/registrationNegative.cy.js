import homePage from "../../page_object/home.page"
import registrationPage from "../../page_object/registration.page"

describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
          
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type('Kate');
            registrationPage.lastNameInput.type('Sera');
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitBtn.click();
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");

        })

        it('Should not register with an already existing email account', () => {
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type('Kate');
            registrationPage.lastNameInput.type('Sera');
            registrationPage.emailInput.type('aro@gmail.com');
            registrationPage.passwordInput.type('aroaro')
            registrationPage.submitBtn.click();
            registrationPage.errorInputDataValidationFailed.should("be.visible");

        })

    })
