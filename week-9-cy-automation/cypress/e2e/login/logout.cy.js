import dashboardPage from "../../page_object/dashboard.page"
import homePage from "../../page_object/home.page"
import loginPage from "../../page_object/login.page"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log with existing account as user', () => {
        homePage.loginBtn.click();
        loginPage.emailInput.type('aro@gmail.com');
        loginPage.passwordInput.type('aroaro');
        loginPage.loginBtn.click();
        dashboardPage.roleLabel.should('have.text', 'role: user')
        dashboardPage.fullNameLabel.should('have.text', 'Aro  Solo')
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
    })
})