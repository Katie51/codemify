import { faker } from '@faker-js/faker';

import homePage from '../../page_object/home.page';
import loginPage from '../../page_object/login.page';
import dashboardPage from '../../page_object/dashboard.page';
import registrationPage from '../../page_object/registration.page';
import userCredentials from '../../fixtures/userCredentials.json'

const email = faker.internet.email();
const password = faker.internet.password();

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an account as new user', () => {
        homePage.registrBtn.click();
        registrationPage.firstNameInput.type(userCredentials.user.firstName);
        registrationPage.lastNameInput.type(userCredentials.user.lastName);
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.submitBtn.click();
        dashboardPage.roleLabel.should('have.text', userCredentials.user.labelRoleUser);
        dashboardPage.fullNameLabel.should('have.text', userCredentials.user.labelFirstNameLastName);
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
        loginPage.loginBtn.click();
        loginPage.login(email, password);
        dashboardPage.roleLabel.should('have.text', userCredentials.user.labelRoleUser);
        dashboardPage.fullNameLabel.should('have.text', userCredentials.user.labelFirstNameLastName);
    })
})
