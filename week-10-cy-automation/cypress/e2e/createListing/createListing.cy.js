import userCredentials from "../../fixtures/userCredentials.json"
import createNewRealEstatePage from "../../page_object/createNewRealEstate.page";
import listingDetails from "../../fixtures/listingDetails.json"
import featureListingPage from "../../page_object/featureListing.page";
import homePage from "../../page_object/home.page";

let listingId

describe("Create a new listing", () => {
    afterEach(() => {
    cy.url().then((url) => {
    const listingId = url.split("/").pop();
    cy.deleteListing(listingId);
    });
    });

    it("Verify Admin can create a new listing", () => {
        cy.loginApi(userCredentials.admin.email, userCredentials.admin.password);
        cy.visit("/dashboard/real-estate/new");

        createNewRealEstatePage.listingTitleInput.type(listingDetails.title);
        createNewRealEstatePage.listingDescriptionInput.type(listingDetails.description);
        createNewRealEstatePage.listingCityInput.type(listingDetails.city);
        createNewRealEstatePage.listingAddressInput.type(listingDetails.address);
        createNewRealEstatePage.listingZipCodeInput.type(listingDetails.zipCode);
        createNewRealEstatePage.listingStateInput.type(listingDetails.state);
        createNewRealEstatePage.selectState.click();
        createNewRealEstatePage.listingAddImage.attachFile("photos/house.jpeg", { subjectType: 'drag-n-drop' });
        createNewRealEstatePage.listingsetPublishCheck.click();
        createNewRealEstatePage.listingPriceInput.type(listingDetails.price);
        createNewRealEstatePage.listingBedroomsInput.type(listingDetails.bedrooms);
        createNewRealEstatePage.listingBathroomsInput.type(listingDetails.bathrooms);
        createNewRealEstatePage.listingGarageInput.type(listingDetails.garage);
        createNewRealEstatePage.listingSqftInput.type(listingDetails.sqft);
        createNewRealEstatePage.listingLotSizeInput.type(listingDetails.lotSize);
        createNewRealEstatePage.postButton.click();

        cy.visit("/", { timeout: 10000 });
        homePage.searchInput.first().type(listingDetails.title);
        homePage.startSearch.click();
        featureListingPage.moreInfoButton.eq(0).click();

        cy.url().then((url) => { listingId = url.split("/").pop(); });

        listingDetails.listingInfo.forEach((info) => {
            const [key, value] = info.split(':'); // Split into key and value
            cy.contains(`${key.trim()}:`) // Trim the key before passing it to cy.contains
              .invoke('text') // Get the actual text from the element
              .should('include', info.replace(/\u00a0/g, ' ').trim()); // Replace &nbsp; with space and compare
          });
        
    });

})