import { faker } from '@faker-js/faker';

import homePage from '../../page_object/home.page';
import loginPage from '../../page_object/login.page';


import dashboardPage from '../../page_object/dashboard.page';
import registrationPage from '../../page_object/registration.page';

const email = faker.internet.email();
const password = faker.string.uuid();

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an account as new user', () => {
        homePage.registrBtn.click();
        registrationPage.firstNameInput.type('Kate');
        registrationPage.lastNameInput.type('Sera');
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.submitBtn.click();
        dashboardPage.roleLabel.should('have.text', 'role: user');
        dashboardPage.fullNameLabel.should('have.text', 'Kate  Sera');
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
        loginPage.loginBtn.click();
        loginPage.login(email, password);
        dashboardPage.roleLabel.should('have.text', 'role: user');
        dashboardPage.fullNameLabel.should('have.text', 'Kate  Sera');
    })
})