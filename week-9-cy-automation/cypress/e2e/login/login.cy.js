import loginPage from "../../page_object/login.page"
import homePage from "../../page_object/home.page"
import dashboardPage from "../../page_object/dashboard.page"
import userCredentials from "../../fixtures/userCredentials.json"

describe('Login', () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit('/')
  })

  it('Should log with existing account as user', () => {

    homePage.loginBtn.click();
    loginPage.emailInput.type(userCredentials.email);
    loginPage.passwordInput.type(userCredentials.password);
    loginPage.loginBtn.click();
    dashboardPage.roleLabel.should('have.text', 'role: user');
    dashboardPage.fullNameLabel.should('have.text', 'Aro  Solo');
  })
})
