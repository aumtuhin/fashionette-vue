/// <reference types="cypress" />

describe('movie search app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    cy.visit('http://localhost:5173');
  });

  it('should display search input placeholder with Name', () => {
    cy.get('.search-input').should('have.attr', 'placeholder', 'Name');
  });

  it('should display search button name with Search', () => {
    cy.get('.btn-default').should('contain', 'Search');
  });

  it('displays 12 movie shows initially', () => {
    cy.get('.total-result').should('have.text', 'Total: 12');
    cy.get('.movie-card').should('have.length', 12);
  });

  it('.type() - type into the search input', () => {
    cy.get('.search-input')
      .type('fo bar')
      .should('have.value', 'fo bar')

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.typing', { delay: 100 })
      .should('have.value', 'slow.typing');
  });

  it('.clear search input', () => {
    cy.get('.search-input')
      .type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '');
  });

  it('should request movie api and get expected respose', () => {
    cy.request('https://api.tvmaze.com/shows').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(240);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });

  it('should show header', () => {
    cy.get('.header').should('be.visible');
    cy.viewport(320, 480);
  });

  it('should show footer', () => {
    cy.get('.footer').should('be.visible');
    cy.viewport(320, 480);
  });
});
