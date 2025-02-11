describe('Teste do Formulário de Cadastro', () => {
  beforeEach(() => {
      // Dado que o usuário acessa a página de cadastro
      cy.request('https://jsonplaceholder.typicode.com/users'); // URL da API com os dados do usuário
  });

  it('Deve exibir mensagem de sucesso ao preencher o formulário corretamente', () => {
      // Quando o usuário preenche todos os campos corretamente
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const user = response.body[0];  // Pegando o primeiro usuário da API
          cy.get('path[name="nome"]').type(user.name);
          cy.get('path[name="email"]').type(user.email);
          cy.get('path[name="confirmacaoEmail"]').type(user.email); // Confirmando o e-mail
          cy.get('path[name="senha"]').type('Teste123'); // Senha válida
          cy.get('path[name="botaoCadastrar"]').click();
          
          // Então o sistema deve exibir uma mensagem de sucesso
          cy.contains('Cadastro realizado com sucesso').should('be.visible');
        });
  });

  it('Deve exibir mensagens de erro ao deixar campos obrigatórios vazios', () => {
      // Quando o usuário tenta enviar o formulário sem preencher os campos obrigatórios
      cy.get('path[name="botaoCadastrar"]').click();
      
      // Então o sistema deve exibir mensagens de erro para os campos obrigatórios
      cy.contains('Nome é obrigatório').should('be.visible');
      cy.contains('E-mail é obrigatório').should('be.visible');
      cy.contains('Senha é obrigatória').should('be.visible');
  });

  it('Deve exibir erro ao digitar uma senha fraca', () => {
      // Quando o usuário insere uma senha fraca
      const senhasFracas = [
          'abcdefgh', // 8 caracteres sem número e sem maiúscula
          'abcdefg1', // 8 caracteres com número mas sem maiúscula
          'Abcdefgh', // 8 caracteres com maiúscula mas sem número
          'Abc1234'   // 7 caracteres com maiúscula e número
      ];

      senhasFracas.forEach((senha) => {
          cy.get('path[name="nome"]').clear().type('Usuário Teste');
          cy.get('path[name="email"]').clear().type('teste@email.com');
          cy.get('path[name="confirmacaoEmail"]').clear().type('teste@email.com');
          cy.get('path[name="senha"]').clear().type(senha);
          cy.get('path[name="botaoCadastrar"]').click();
          
          // Então o sistema deve exibir uma mensagem de erro sobre a senha fraca
          cy.contains('A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número').should('be.visible');
      });
  });

  it('Deve exibir erro ao digitar e-mails diferentes', () => {
      // Quando o usuário insere e-mails diferentes nos campos de e-mail e confirmação
      cy.get('path[name="nome"]').type('Usuario Teste');
      cy.get('path[name="email"]').type('teste@email.com');
      cy.get('path[name="confirmacaoEmail"]').type('teste@diferente.com');
      cy.get('path[name="senha"]').type('Teste123');
      cy.get('path[name="botaoCadastrar"]').click();
      
      // Então o sistema deve exibir uma mensagem de erro sobre a discrepância de e-mails
      cy.contains('Os e-mails digitados não coincidem').should('be.visible');
  });
});