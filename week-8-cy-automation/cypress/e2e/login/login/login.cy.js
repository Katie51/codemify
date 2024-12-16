import loginPage from "../../../page_object/login.page"
import homePage from "../../../page_object/home.page"
import dashboardPage from "../../../page_object/dashboard.page"
// import loginPage from "../../page_object/login.page"
// import homePage from "../../page_object/home.page"
// import dashboardPage from "../../page_object/dashboard.page"

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log with existing account as user', () => {

    homePage.loginBtn.click();
    loginPage.emailInput.type('aro@gmail.com');
    loginPage.passwordInput.type('aroaro');
    loginPage.loginBtn.click();

    // Verify user role
    dashboardPage.roleLabel.should('have.text', 'role: user');
    dashboardPage.fullNameLabel.should('have.text', 'Aro  Solo');
  })
})