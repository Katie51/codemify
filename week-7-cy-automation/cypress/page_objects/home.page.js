class HomePage {

    get loginBtn() { return cy.get('[href="/auth/login"]') }
    get registrBtn() { return cy.get('[href="/auth/register"]') }
}

export default new HomePage();