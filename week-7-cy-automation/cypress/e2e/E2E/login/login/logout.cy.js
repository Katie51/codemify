import dashboardPage from "../../../../page_objects/dashboard.page"
import homePage from "../../../../page_objects/home.page"
import loginPage from "../../../../page_objects/login.page"

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log with existing account as user', () => {
        // Click login button on homepage
        homePage.loginBtn.click();

        //Tape in ser name, password
        loginPage.emailInput.type('aro@gmail.com');
        loginPage.passwordInput.type('aroaro');

        //Click login button
        loginPage.loginBtn.click();

        // Verify user role
        dashboardPage.roleLabel.should('have.text', 'role: user')
        dashboardPage.fullNameLabel.should('have.text', 'Aro  Solo')

        // Logout
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();

    })


})