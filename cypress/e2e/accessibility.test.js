/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.injectAxe().checkA11y();
  });

  it("Navigates to Projects page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /projects/i })
      .click()
      .injectAxe()
      .checkA11y();
  });

  it("Navigates to Contact page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /contact/i })
      .click()
      .injectAxe()
      .checkA11y();
  });

  it("Navigates to first post page and checks for accessibility violations", () => {
    cy.findByRole("link", { name: /read/i }).click().injectAxe().checkA11y();
  });
});
