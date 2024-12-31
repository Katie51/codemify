import 'cypress-file-upload';

Cypress.Commands.add('errorHandler', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.warn('Ignoring uncaught exception:', err);
      return false;
    });
});

    Cypress.Commands.add("loginApi", (email, password) => {
        cy.request("POST", "/api/users/login", {
          email: email,
          password: password,
        }).then((response) => {
          window.localStorage.setItem("accessToken", response.body.accessToken);
        });
  });

  Cypress.Commands.add("deleteListing", (listingId) => {
    const token = window.localStorage.getItem("accessToken"); 
    return cy.request({
      method: "DELETE",
      url: `/api/estate-objects/${listingId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });

  Cypress.Commands.add("createListing", (listingDetails) => {
    cy.fixture("photos/house.jpeg").then((image) => {
      const blob = Cypress.Blob.base64StringToBlob(image, "/house.jpeg");
      const formData = new FormData();
      formData.append("images", blob);
      formData.append("lotSize", listingDetails.lotSize);
      formData.append("sqft", listingDetails.sqft);
      formData.append("garage", listingDetails.garage);
      formData.append("bathrooms", listingDetails.bathrooms);
      formData.append("bedrooms", listingDetails.bedrooms);
      formData.append("price", listingDetails.price);
      formData.append("zipCode", listingDetails.zipCode);
      formData.append("state", listingDetails.state);
      formData.append("city", listingDetails.city);
      formData.append("address", listingDetails.address);
      formData.append("description", listingDetails.description);
      formData.append("title", listingDetails.title);
      formData.append("isPublished", true);
  
      const token = window.localStorage.getItem("accessToken");
      return cy.request({
        method: "POST",
        url: "/api/estate-objects",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const listingId = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(response.body))).id;
        return listingId; 
      });
    });
  });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })