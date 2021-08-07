/// <reference types="cypress" />

const BASE_URL = 'http://localhost:8083/';
describe('Example APP', function () {
  context('Login', function () {
    it('Localhost Site', function () {
      cy.visit(BASE_URL);
    });
    it('Grid item click', function () {
      cy.get('.items__wrapper:first').wait(2000).click();
    });
  });
});
