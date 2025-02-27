/// <reference types="cypress" />

describe("page navigation", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='header-about-link']").click();
    cy.location("pathname").should("equal", "/about");
    cy.go("back");
    cy.location("pathname").should("equal", "/");
    cy.get("[data-cy='header-about-link']").click();
    cy.get("[data-cy='header-home-link']").click();
    cy.location("pathname").should("equal", "/");
  });
});
