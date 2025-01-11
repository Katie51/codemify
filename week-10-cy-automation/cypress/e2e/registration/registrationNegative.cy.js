import homePage from "../../page_object/home.page"
import registrationPage from "../../page_object/registration.page"
import verificationErrorMessages from "../../fixtures/verificationErrorMessages.json"
import userCredentials from "../../fixtures/userCredentials.json"

describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
          
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type(userCredentials.user.firstName);
            registrationPage.lastNameInput.type(userCredentials.user.lastName);
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitBtn.click();
            registrationPage.errorEmailReguired.should("be.visible").and("contain",verificationErrorMessages.errorEmailReguired);
            registrationPage.errorPasswordRequired.should("be.visible").and("contain",verificationErrorMessages.errorPasswordRequired);

        })

        it('Should not register with an already existing email account', () => {

            homePage.registrBtn.click();
            registrationPage.firstNameInput.type(userCredentials.user.firstName);
            registrationPage.lastNameInput.type(userCredentials.user.lastName);
            registrationPage.emailInput.type(userCredentials.user.email);
            registrationPage.passwordInput.type(userCredentials.user.password)
            registrationPage.submitBtn.click();
            registrationPage.errorInputDataValidationFailed.should("be.visible").and("contain",verificationErrorMessages.errorInputDataValidationFailed);

        })

    })
