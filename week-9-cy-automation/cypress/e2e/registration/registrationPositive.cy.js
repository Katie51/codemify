import { faker } from '@faker-js/faker';

import homePage from '../../page_object/home.page';
import loginPage from '../../page_object/login.page';
import dashboardPage from '../../page_object/dashboard.page';
import registrationPage from '../../page_object/registration.page';
import userCredentials from '../../fixtures/userCredentials.json'

const email = faker.internet.email();
const password = faker.string.uuid();

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an account as new user', () => {
        homePage.registrBtn.click();
        registrationPage.firstNameInput.type(userCredentials.firstName);
        registrationPage.lastNameInput.type(userCredentials.lastName);
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.submitBtn.click();
        dashboardPage.roleLabel.should('have.text', userCredentials.labelRoleUser);
        dashboardPage.fullNameLabel.should('have.text', userCredentials.labelFirstNLastN);
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
        loginPage.loginBtn.click();
        loginPage.login(email, password);
        dashboardPage.roleLabel.should('have.text', userCredentials.labelRoleUser);
        dashboardPage.fullNameLabel.should('have.text', userCredentials.labelFirstNLastN);
    })
})
