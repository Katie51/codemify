import homePage from "../../page_object/home.page"
import featureListingPage from "../../page_object/featureListing.page"
import listingDetails from "../../fixtures/listingDetails.json"

describe('Search homePage', () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit('/')
    homePage.nightMode.click();
  })

  it('Should search by keyword ', () => {

    homePage.searchInput.first().type(listingDetails.title);
    homePage.startSearch.click();
    featureListingPage.listingTitle.should('have.text', listingDetails.title);

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

    homePage.cityInput.eq(1).type(listingDetails.city);
    homePage.startSearch.click();
    featureListingPage.moreInfoButton.click();

    featureListingPage.propertyName.should('have.text', listingDetails.title);
    
    listingDetails.listingInfo.forEach((info) => {
        const [key, value] = info.split(':'); // Split into key and value
        cy.contains(`${key.trim()}:`) // Trim the key before passing it to cy.contains
          .invoke('text') // Get the actual text from the element
          .should('include', info.replace(/\u00a0/g, ' ').trim()); // Replace &nbsp; with space and compare
      });
  })

  it('Should search by price ', () => {

    cy.visit('/featured-listings?price=999999-1000001&city=Armonk')
    featureListingPage.priceRange;
    featureListingPage.urlCheck;
    
  })
})

