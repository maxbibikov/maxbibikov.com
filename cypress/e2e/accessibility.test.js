/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });

  it("Navigates to Projects page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /projects/i })
      .click()
      .checkA11y();
  });

  it("Navigates to Contact page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /contact/i })
      .click()
      .checkA11y();
  });

  it("Navigates to first post page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /read/i }).click();
    cy.injectAxe().checkA11y();
  });
});
