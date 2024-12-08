class ListingPage{

    get listingTitle() { return cy.get('.MuiGrid-root h5')}
    get moreInfoButton() { return cy.get('[class="MuiBox-root css-xi606m"]')}
    get bedroomIcon() { return cy.contains(' Bedrooms: ')}
    get askingPriceIcon() { return cy.contains('Asking Price')}
    get squareFeetIcon() { return cy.contains('Square Feet: ')}
    get lotSizeIcon() { return cy.contains('Lot Size: ')}
    get listingDateIcon() { return cy.contains('Listing Date:')}
    get garageIcon() { return cy.contains(' Garage: ')}
    get bathroomIcon() { return cy.contains('Bathrooms')}
    get propertyName() { return  cy.get('.MuiGrid-root.MuiGrid-item h3')}
    get priceRange() { return cy.visit('https://dev.delekhomes.com/featured-listings?price=1000000-1000000&city=Armonk');}
    get urlCheck() { return cy.url().should('include', `price=${1000000}`)}
    get firstInfoButton() { return cy.get('[class="MuiBox-root css-xi606m"]').eq(0)}
    get searchInput() { return cy.get('[type="text"]').eq(0)}
    get startSearch() { return cy.get('.MuiBox-root.css-1t9pz9x.iconify.iconify--eva')}
    get bedroonButton() { return cy.get('[role="button"]').eq(0)}
    get twoBedrooms() { return cy.get('[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-vyg8zi"]').eq(1)}
    get cityInput() { return cy.get('[type="text"]').eq(1)}
   

}
export default new ListingPage();