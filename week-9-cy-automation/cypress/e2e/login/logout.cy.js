import dashboardPage from "../../page_object/dashboard.page"
import homePage from "../../page_object/home.page"
import loginPage from "../../page_object/login.page"
import userCredentials from "../../fixtures/userCredentials.json"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log with existing account as user', () => {
        homePage.loginBtn.click();
        loginPage.emailInput.type(userCredentials.email);
        loginPage.passwordInput.type(userCredentials.password);
        loginPage.loginBtn.click();
        dashboardPage.roleLabel.should('have.text', 'role: user')
        dashboardPage.fullNameLabel.should('have.text', 'Aro  Solo')
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
    })
})