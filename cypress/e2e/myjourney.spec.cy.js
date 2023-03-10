describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('passes', () => {
    cy.get('.button-homepage-2').contains('SELECT A SERVICE').click()
    cy.location("href").should("eq", "http://localhost:3000/services");
    cy.get('.service-card').contains('Plumber').click()
    cy.get('.next-button').click()
    cy.location("pathname").should("eq","/customer-sign-up" )
  });
});
