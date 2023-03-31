describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('passes', () => {
    cy.get('.button-homepage-2').contains('SELECT A SERVICE').click()
    cy.location("href").should("eq", "http://localhost:3000/services");
    cy.get('.service-card').contains('Plumber')
    cy.get('.service-card').contains('Masonry')
    cy.get('.service-card').contains('Gas & Electric')
    cy.get('.service-card').contains('Cleaner')
    cy.get('.service-card').contains('Painter')
    cy.get('.service-card').contains('Handyman')
    cy.get('.next-button').click()
    cy.location("pathname").should("eq","/customer-sign-up")
    cy.get('.form-input').contains('plumbing')
    cy.get('.form-input').contains('painter')
    cy.get('.customer-submit-button').contains('Submit').click()
    cy.location("pathname").should("eq","/customer-confirmation-page")

  });
});


//Test how to see if service card contains the services which are pulled from the database table.
