/// <reference types="Cypress" />
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });

  it("check title", () => {
    cy.contains("ToDo List");
    cy.contains("A Simple todolist built react hooks & context");
  });

  it("check add button", () => {
    cy.get(".App-input").type("Read Book");
    cy.get("button").click();
    cy.contains("Read Book");
  });
});
