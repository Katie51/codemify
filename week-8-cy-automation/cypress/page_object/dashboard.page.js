class DashboardPage {

    get roleLabel() { return cy.get('a p') };
    get fullNameLabel() { return cy.get('h6') };

    // user icon menu
    get userIconBtn() { return cy.get('button [data-testid="PersonIcon"]') }
    get logoutBtn() { return cy.contains('Logout') }

}
export default new DashboardPage();