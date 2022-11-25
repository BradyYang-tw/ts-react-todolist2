/// <reference types="Cypress" />

describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });
});

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });
