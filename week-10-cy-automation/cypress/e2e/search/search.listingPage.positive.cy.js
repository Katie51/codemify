import homePage from "../../page_object/home.page"
import featureListingPage from "../../page_object/featureListing.page"
import listingDetails from "../../fixtures/listingDetails.json"
import userCredentials from "../../fixtures/userCredentials.json"

let listingId;

describe('Search listingPage', () => {

  before(() => {
    cy.loginApi(userCredentials.admin.email, userCredentials.admin.password);
    cy.createListing(listingDetails).then((id) => {
      listingId = id; 
    });
  });

  beforeEach(() => {
    cy.errorHandler();
    cy.visit('/featured-listings')
    homePage.nightMode.click();
  })

  after(() => {
    cy.deleteListing(listingId)
  });

  it('Should search by keyword', () => {

    featureListingPage.searchInput.type(listingDetails.title);
    featureListingPage.startSearch.click();
    featureListingPage.listingTitle.should('have.text', listingDetails.title)

  })

  it('Should search by bedrooms', () => {

    featureListingPage.bedroonButton.click();
    featureListingPage.twoBedrooms.click();
    featureListingPage.startSearch.click();

    const randomIndex = Math.floor(Math.random() * 6);
    featureListingPage.moreInfoButton.eq(randomIndex).click();
    featureListingPage.bedroomIcon.invoke('text').then((text) => {
        const bedroomCount = parseInt(text.replace(/\D/g, ''), 10);
        expect(bedroomCount).to.be.at.least(2, 'Bedroom count should be at least 2');
    })
  })

  it('Should search by city ', () => {

    featureListingPage.cityInput.type(listingDetails.city);
    featureListingPage.startSearch.click();
    featureListingPage.moreInfoButton.should('have.text', 'More Info').click();
    featureListingPage.propertyName.should('have.text', listingDetails.title)
    listingDetails.listingInfo.forEach((info) => {
        const [key, value] = info.split(':'); 
        cy.contains(`${key.trim()}:`) 
          .invoke('text') 
          .should('include', info.replace(/\u00a0/g, ' ').trim()); 
      });
  })

  it('Should search by price ', () => {

    cy.visit('/featured-listings?price=999999-1000001&city=Armonk')
    featureListingPage.priceRange;
    featureListingPage.urlCheck;
    
  })
})
