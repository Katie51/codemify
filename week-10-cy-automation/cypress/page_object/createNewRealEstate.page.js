class createNewRealEstatePage {
    get listingTitleInput() { return cy.get('[name="title"]'); }
    get listingDescriptionInput() { return cy.get('[name="description"]'); }
    get listingCityInput() { return cy.get('[name="city"]'); }
    get listingAddressInput() { return cy.get ('[name="address"]'); }
    get listingZipCodeInput() { return cy.get ('[name="zipCode"]'); }
    get listingStateInput() { return cy.get ('[aria-haspopup="listbox"]'); }
    get selectState() {return cy.contains('New York'); }
    get listingAddImage() { return cy.get (('.MuiBox-root.css-1mmtv2s')); }
    get listingsetPublishCheck() {return cy.get ('[name="isPublished"]'); }
    get listingPriceInput() {return cy.get ('[name="price"]'); }
    get listingBedroomsInput() { return cy.get ('[name="bedrooms"]'); }
    get listingBathroomsInput() { return cy.get ('[name="bathrooms"]'); }
    get listingGarageInput() {return cy.get ('[name="garage"]'); }
    get listingSqftInput() { return cy.get ('[name="sqft"]'); }
    get listingLotSizeInput() {return cy.get ('[name="lotSize"]'); }
    get postButton() { return cy.get('[type="submit"]'); }
}

export default new createNewRealEstatePage();