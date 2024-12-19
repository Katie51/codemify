import homePage from "../../page_object/home.page"
import featureListingPage from "../../page_object/featureListing.page"

describe('example to-do app', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    homePage.nightMode.click();
  })

  it('Should search by keyword ', () => {

    homePage.searchInput.first().type('picturesque oasis');
    homePage.startSearch.click();
    featureListingPage.listingTitle.should('have.text', 'Modern picturesque oasis');
  })
  it('Should search by bedrooms ', () => {

    homePage.bedroomButton.first().click();
    homePage.twoBedrooms.click();
    homePage.startSearch.click();

    const randomIndex = Math.floor(Math.random() * 6);
    featureListingPage.moreInfoButton.eq(randomIndex).click();
    featureListingPage.bedroomIcon.invoke('text').then((text) => {
      const bedroomCount = parseInt(text.replace(/\D/g, ''), 10);
      expect(bedroomCount).to.be.at.least(2, 'Bedroom count should be at least 2');
    });
   
  });
      
  it('Should search by city ', () => {

    homePage.cityInput.eq(1).type('Armonk');
    homePage.startSearch.click();
    featureListingPage.moreInfoButton.click();

    featureListingPage.propertyName.should('have.text', 'Modern picturesque oasis');
    featureListingPage.askingPriceIcon.should('have.text', ' Asking Price: $ 1,000,000');
    featureListingPage.squareFeetIcon.should('have.text', ' Square Feet: 11000');
    featureListingPage.lotSizeIcon.should('have.text', ' Lot Size: 2');
    featureListingPage.listingDateIcon.should('have.text', ' Listing Date: 06 December 2024');
    featureListingPage.garageIcon.should('have.text', ' Garage: 2');
    featureListingPage.bathroomIcon.should('have.text', ' Bathrooms: 3');
    featureListingPage.bedroomIcon.should('have.text', ' Bedrooms: 2');
  })

  it('Should search by price ', () => {
    cy.visit('https://dev.delekhomes.com/featured-listings?price=999999-1000001&city=Armonk')
    featureListingPage.priceRange;
    featureListingPage.urlCheck;
  })
})

