/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("ne-izlesem app", () => {
  it("başlangıçta listem boş mu?", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-test=listem]").should(
      "have.text",
      "İncelediğin dizileri buraya ekleyebilirsin."
    );
  });

  it("Diziyi listeye ekleniyor mu?", () => {
    cy.visit("http://localhost:5173/");
    cy.get(
      ':nth-child(1) > .diziBox-info > [data-test="button-incele"]'
    ).click();

    cy.get(".summary-info > button").click();
    cy.get("[data-test=item-listem]").should("have.length", 1);
  });

  it("Dizi tekrar eklenmiyor olmalı", () => {
    cy.visit("http://localhost:5173/");
    cy.get(
      ':nth-child(1) > .diziBox-info > [data-test="button-incele"]'
    ).click();

    cy.get(".summary-info > button").click();
    cy.get("[data-test=item-listem]").should("have.length", 1);
    cy.get(".summary-info > button").click();
    cy.get("[data-test=item-listem]").should("have.length", 0);
  });
});
