import SingupPage from "../pages/SingupPage";
import singup from "../pages/SingupPage";
//import signupFactory from '../Factories/SignupFactory'

describe("Cadastro", () => {
  beforeEach(function () {
    cy.fixture("deliver").then((d) => {
      this.deliver = d;
    });
  });
  // var singup =  new SingupPage()

  it("Seja um entregador", function () {
    /*  cy.viewport (1440, 900)    
         cy.visit('https://buger-eats.vercel.app')
         cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        var entregador = {
            nome: 'Gilberto Brito a',
            cpf: '00121456981',
            email:'gilberto@email.com',
            zap:'88123654',
            endereco:{
                cep: '41385000',
                rua:'Rua da Boa Paz',
                numero:'01',
                complemento:'casa',
                bairro:'Sete de Abril',
                cidade_uf:'Salvador/BA'
            },
            metodo_entrega:'Moto',
            metodo_entrega:'Bicicleta',
            metodo_entrega:'Van/Carro',
            cnh: 'cnh-digital.jpg'
        var singup =  new SingupPage()*/
    singup.go();
    singup.fillForm(this.deliver.singup);
    singup.Submit();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    singup.modalContentShouldBe(expectedMessage);
  });
  /*  cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.zap)


        cy.get('input[name=postalcode]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
        cy.get('input[name=address]').should('have.value', entregador.endereco.rua)
        cy.get('input[name=district]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name=city-uf]').should('have.value', entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
       // cy.get('form button[type="submit"]').click()  
       // const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
       // cy.get('.swal2-container .swal2-html-container')
       //   .should('have.text', expectedMessage)
        })*/
  it("CPF incorreto", function () {
    /*var entregador = {
            nome: 'Gilberto Brito',
            cpf: '00121456981we',
            email:'gilberto@email.com',
            zap:'88123654',
            endereco:{
                cep: '41385000',
                rua:'Rua da Boa Paz',
                numero:'01',
                complemento:'casa',
                bairro:'Sete de Abril',
                cidade_uf:'Salvador/BA'
            },
            metodo_entrega:'Moto',
            metodo_entrega:'Bicicleta',
            metodo_entrega:'Van/Carro',
            cnh: 'cnh-digital.jpg'

        }
      var singup =  new SingupPage()*/
    singup.go();
    singup.fillForm(this.deliver.cpf_invalido);
    singup.Submit();
    const expectedMessage = "Oops! CPF inválido";
    singup.alertMessageShouldBe(expectedMessage);
  });

  /*  cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.zap)


        cy.get('input[name=postalcode]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
        cy.get('input[name=address]').should('have.value', entregador.endereco.rua)
        cy.get('input[name=district]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name=city-uf]').should('have.value', entregador.endereco.cidade_uf)


        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
        
      //  const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

      //  cy.get('.swal2-container .swal2-html-container')
      //    .should('have.text', expectedMessage)

    })*/
  it("E-mail incorreto", function () {
    singup.go();
    singup.fillForm(this.deliver.email_invalido);
    singup.Submit();
    const expectedMessage = "Oops! Email com formato inválido.";
    singup.alertMessageShouldBe(expectedMessage);
  });

  context("campos_obrigatorios", function () {
    const messages = [
      { campo: "name", output: "É necessário informar o nome" },
      { campo: "CPF", output: "É necessário informar o CPF" },
      { campo: "email", output: "É necessário informar o email" },
      { campo: "CEP", output: "É necessário informar o CEP" },
      { campo: "numero", output: "É necessário informar o número do endereço" },
      { campo: "método de entrega", output: "Selecione o método de entrega" },
      { campo: "CNH", output: "Adicione uma foto da sua CNH" },
    ];
    before(function () {
      SingupPage.go();
      SingupPage.Submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.campo} is require`, function () {
        SingupPage.alertMessageShouldBe(msg.output);
      });
    });
  });
  /*it('campos_obrigatorios', function() {

        singup.go()
        singup.Submit()
        singup.alertMessageShouldBe('É necessário informar o nome')
        singup.alertMessageShouldBe('É necessário informar o CPF')
        singup.alertMessageShouldBe('É necessário informar o email')
        singup.alertMessageShouldBe('É necessário informar o CEP')
        singup.alertMessageShouldBe('É necessário informar o número do endereço')
        singup.alertMessageShouldBe('Selecione o método de entrega')
        singup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })*/
});
