import homePage from "../../page_object/home.page"
import listingPage from "../../page_object/listing.page"

describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('/')
    homePage.nightMode.click();
  })

  it('Should search by keyword ', () => {
    homePage.searchInput.first().type('picturesque oasis');
    homePage.startSearch.click();
    listingPage.listingTitle.should('have.text', 'Modern picturesque oasis');
  })

  it('Should search by bedrooms ', () => {
    homePage.bedroomButton.first().click();
    homePage.twoBedrooms.click();
    homePage.startSearch.click();
    const randomIndex = Math.floor(Math.random() * 6);
    listingPage.moreInfoButton.eq(randomIndex).click();
    listingPage.bedroomIcon.should('not.have.text', '0,1');
  })

  it('Should search by city ', () => {
    homePage.cityInput.eq(1).type('Armonk');
    homePage.startSearch.click();
    listingPage.moreInfoButton.click();
    listingPage.propertyName.should('have.text', 'Modern picturesque oasis');
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
  })
})