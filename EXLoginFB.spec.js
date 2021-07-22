const url = 'https://www.facebook.com/?stype=lo&jlou=AfdZZNcIuHjOEuQVnCeS4vFdMo1e9_xxMapbXdYeKhhvRDZlEsNQocay5bJrqduFwJIQ9NeXGLM_I4G4665JhMEt4gYQurmnl0KgoiCSN1WeBA&smuh=14440&lh=Ac-Dg1OEPOzkkcRK90A'

// Vamos gerar uma conta com crendenciais randomicas
const username = 'lucas_talan@hotmail.com';
const password = 'lucastalam71';
for (var i = 0; i < 3; i++) {
context('Cadastro de usuário', () => {
  before(() => {
    cy.visit(url)
  });


  it('Realizar login com usuário criado', () => {

    cy.get('input[name="email"').type(username);
    cy.get('input[name="pass"').type(password);

    // Clique no botão de registro
    cy.get('button[name="login"').click();

    // Verificando se o login foi feito com sucesso
    cy.get('blockquote').first().should('contain.url', 'https://www.facebook.com/');
  });
});
}