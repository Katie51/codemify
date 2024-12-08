import homePage from "../../page_object/home.page"
import listingPage from "../../page_object/listing.page"

describe('example to-do app', () => {
  beforeEach(() => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    homePage.nightMode.click();
    homePage.featureListingButton.click();
    listingPage.firstInfoButton.should('have.text', 'More Info');
  })

  it('Should search by keyword', () => {
    listingPage.searchInput.type('picturesque oasis');
    listingPage.startSearch.click();
    listingPage.listingTitle.should('have.text', 'Modern picturesque oasis')
  })

  it('Should search by bedrooms', () => {
    listingPage.bedroonButton.click();
    listingPage.twoBedrooms.click();
    listingPage.startSearch.click();

    const randomIndex = Math.floor(Math.random() * 6);
    listingPage.moreInfoButton.eq(randomIndex).click();
    listingPage.bedroomIcon.should('not.have.text', '0,1');
  })

  it('Should search by city ', () => {
    listingPage.cityInput.type('Armonk');
    listingPage.startSearch.click();
    listingPage.moreInfoButton.should('have.text', 'More Info').click();
    listingPage.propertyName.should('have.text', 'Modern picturesque oasis')
    listingPage.askingPriceIcon.should('have.text', ' Asking Price: $ 1,000,000');
    listingPage.squareFeetIcon.should('have.text', ' Square Feet: 11000');
    listingPage.lotSizeIcon.should('have.text', ' Lot Size: 2');
    listingPage.listingDateIcon.should('have.text', ' Listing Date: 06 December 2024');
    listingPage.garageIcon.should('have.text', ' Garage: 2');
    listingPage.bathroomIcon.should('have.text', ' Bathrooms: 3');
    listingPage.bedroomIcon.should('have.text', ' Bedrooms: 2');
  })

  it('Should search by price ', () => {
    listingPage.priceRange;
    listingPage.urlCheck;
    // cy.visit('https://dev.delekhomes.com/featured-listings?price=1000000-1000000&city=Armonk');
  })
})
