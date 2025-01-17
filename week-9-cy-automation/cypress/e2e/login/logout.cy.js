import dashboardPage from "../../page_object/dashboard.page"
import userCredentials from "../../fixtures/userCredentials.json"

describe('Login', () => {
    beforeEach(() => {
        cy.loginApi(userCredentials.email,userCredentials.password)
         cy.visit('/dashboard/user/profile')
    })

    it('Should log with existing account as user and logout', () => {

        dashboardPage.roleLabel.should('have.text', userCredentials.labelRoleUser)
        dashboardPage.fullNameLabel.should('have.text', userCredentials.labelFirstNameLastName)
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
        cy.contains("Sign in to Delek Homes").should("be.visible");

    })
})