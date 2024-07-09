describe('Fluxo de Inserir veículo', () => {

  beforeEach(() => {
    cy.visit('https://www.adset.com.br/Integrador')
    cy.get('#Email').type('qa@adset.com.br');
    cy.get('#Senha').type('9PK6#E8m');
    cy.get('#loginBtn').click();
    cy.get('.icomoon-icon-car').trigger('mouseover');
    cy.get('li .sub').contains('Incluir').click();
  })

  it('Incluir Veiculo Usado', () => {    
      cy.get('#MarcaVeiculoId').select('JEEP', {force:true});
      cy.get('#ModeloVeiculoId').select('COMMANDER', {force:true});
      cy.get('#AnoFabricacao').select('2024', {force:true});

     cy.wait(1000)

      cy.get('#VersaoVeiculoId').select('1.3 T270 TURBO FLEX LIMITED AT6', {force:true})
      cy.get('input[id="CondicaoVeiculo"][value="Usado"]').should('be.checked')
     cy.get('#Km').type('50000');
     cy.get('#Portas').select('4', {force:true});
     cy.get('#CorVeiculo').select('Preto', {force:true});
     cy.get('#Placa').type('NET2940')

     cy.wait(1500)

     cy.get('#Chassi').type('4vv Ne9bRe t4 cW9301');
     cy.get('#Valor').type('14500000');
     //marcar checkbox de Informações complementares
     cy.get('div[class="form-campo caracteristicas"] div:nth-child(3) label:nth-child(1) input[type="checkbox"]').check();
     cy.get('#Informacoes').type('Veículo Automatizado');
     cy.get('#Video').type('7QU1nvuxaMA');
      //marcar checkbox de Itens de série e opcionais
     cy.get(':nth-child(40) > .span6 > .box > .content > :nth-child(1) > .form-campo > .row-fluid > :nth-child(1) > :nth-child(1) > label input[type="checkbox"]').check();
     cy.get('input[title="Clique para adicionar"]').selectFile('../adset/cypress/fixtures/jeep.jpg');

     cy.wait(5000)

     cy.get('button[type="submit"]').click();
     //selecionar botão de excluir no último carro adicionado no estoque
     cy.get('div[class="adset-conteudo"] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) span:nth-child(1)').click()
     cy.get('#integrar').click({force:true});    
     cy.get('#ModalSucesso').should('be.visible');
    });

     it('Incluir Veiculo novo', () => {

      cy.get('#MarcaVeiculoId').select('JEEP', {force:true});
      cy.get('#ModeloVeiculoId').select('COMMANDER', {force:true});
      cy.get('#AnoFabricacao').select('2024', {force:true});

     cy.wait(1000)

      cy.get('#VersaoVeiculoId').select('1.3 T270 TURBO FLEX LIMITED AT6', {force:true})
      cy.get('input[id="CondicaoVeiculo"][value="ZeroKm"]').check().should('be.checked')
     cy.get('#Portas').select('4', {force:true});
     cy.get('#CorVeiculo').select('Preto', {force:true});
     cy.get('#Chassi').type('4vv Ne9bRe t4 cW9301');
     cy.get('#Valor').type('14500000');
     //marcar checkbox de Informações complementares
     cy.get('div[class="form-campo caracteristicas"] div:nth-child(3) label:nth-child(1) input[type="checkbox"]').check();
     cy.get('#Informacoes').type('Veículo Automatizado');
     cy.get('#Video').type('7QU1nvuxaMA');
     //marcar checkbox de Itens de série e opcionais
     cy.get(':nth-child(40) > .span6 > .box > .content > :nth-child(1) > .form-campo > .row-fluid > :nth-child(1) > :nth-child(1) > label input[type="checkbox"]').check();
     cy.get('input[title="Clique para adicionar"]').selectFile('../adset/cypress/fixtures/jeep.jpg');

     cy.wait(5000)

     cy.get('button[type="submit"]').click();

     cy.wait(1000)

     cy.get('#EstoqueTipo').select('Veículos Novos', {force:true});
     //selecionar botão de excluir no último carro adicionado no estoque
     cy.get('div[class="adset-conteudo"] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) span:nth-child(1)').click()

     cy.wait(1000);

     cy.get('#integrar').click({force:true});
     cy.get('#ModalSucesso').should('be.visible');
  });
});
