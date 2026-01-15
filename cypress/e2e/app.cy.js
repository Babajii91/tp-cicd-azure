describe('E2E - Application', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Bienvenue');
  });

  it('returns health status', () => {
    cy.request('http://localhost:3000/health')
      .its('body')
      .should('deep.equal', { status: 'ok' });
  });
});
