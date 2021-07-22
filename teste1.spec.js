const url = 'http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar'

// Vamos gerar uma conta com crendenciais randomicas
context('Visitar site', () => {
  before(() => {
    cy.visit(url)
  });
});