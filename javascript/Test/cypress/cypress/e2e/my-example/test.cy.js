// const { beforeEach } = require("mocha");
require("cypress-xpath");
require("@testing-library/cypress");

describe("네이버에서 네이버 검색", () => {
  it("네이버 방문", () => {
    cy.visit("https://www.naver.com");
  });

  it("네이버 검색", () => {
    cy.get("#query").click();
    cy.get("#query").type("네이버");
    cy.get(".ico_search_submit").click();
  });
});
