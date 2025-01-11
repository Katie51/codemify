class HomePage {

    get loginBtn() { return cy.get('[href="/auth/login"]') }
    get registrBtn() { return cy.get('[href="/auth/register"]') }
    get nightMode() { return cy.get('[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]')}
    get searchInput() { return cy.get('[type="text"]')}
    get startSearch() { return cy.get('[type="button"]')}
    get bedroomButton() { return cy.get('[role="button"]')}
    get twoBedrooms() { return cy.get('[data-value="2"]')}
    get cityInput() { return cy.get('[type="text"]')}
    get featureListingButton() { return cy.get('.MuiBox-root.css-12z0wuy').eq(1)}
    
}

export default new HomePage();