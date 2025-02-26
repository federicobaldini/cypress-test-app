/// <reference types="cypress" />

describe("task page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header").get("img");
  });

  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header").get("h1").should("have.length", 1);
    cy.get(".main-header").get("img").contains("My Cypress Course Tasks");
  });
});
