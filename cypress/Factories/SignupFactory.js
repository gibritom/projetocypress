var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
        nom: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email:faker.internet.email(firstName),
        zap:'78988123654',
        endereco:{
            cep: '41385000',
            rua:'Rua da Boa Paz',
            numero:'01',
            complemento:'casa',
            bairro:'Sete de Abril',
            cidade_uf:'Salvador/BA'
            },
            metodo_entrega:'Moto',
             cnh: 'cnh-digital.jpg'
        }
     return data

    }

}
