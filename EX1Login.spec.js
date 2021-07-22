// Página que vamos testar
const url = 'http://thedemosite.co.uk/addauser.php'

// Vamos gerar uma conta com crendenciais randomicas
for (var i = 0; i < 9; i++) {
  // more statements

const username = String(Math.ceil(Math.random()*10000));
const password = String(Math.ceil(Math.random()*10000));

context('Cadastro de usuário', () => {
  before(() => {
    cy.visit(url)
  });

  it('Realizar cadastro de usuário', () => {

    // Preenchimento dos campos
    cy.get('input[name="username"').type(username);
    cy.get('input[name="password"').type(password);

    // Clique no botão de registro
    cy.get('input[name="FormsButton2"').click();

    /*  Para saber se a conta efetivamente foi criada
        precisamos ver qual mensagem de sucesso o site retorna
        no caso desse site, dois elementos sao preenchidos
        com os dados da conta criada, vamos validar se os valores
        desses elementos, correspondem as nossas variaveis de
        nome e senha */
    cy.get('blockquote').eq(3).should('contain', username);
    cy.get('blockquote').eq(3).should('contain', password);  
  });

  it('Realizar login com usuário criado', () => {
    cy.get('a[href="login.php"').first().click();

    // Preenchimento dos campos
    cy.get('input[name="username"').type(username);
    cy.get('input[name="password"').type(password);

    // Clique no botão de login
    cy.get('input[name="FormsButton2"').click();

    // Verificando se o login foi feito com sucesso
    cy.get('blockquote').first().should('contain.text', '**Successful Login**');
  });
});
}