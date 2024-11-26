/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

import commum_page from '../support/pages/commum_page'
import cadastro_pages from '../support/pages/cadastro_usuario_pages'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo Nome vazio', () => {
       cadastro_pages.clicarCadastrar()
       cadastro_pages.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo E-mail vazio', () => {
      cadastro_pages.preencheNome(faker.person.fullName())
      cadastro_pages.clicarCadastrar()
      cadastro_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo E-mail inválido', () => {
      cadastro_pages.preencheNome(faker.person.fullName())
      cadastro_pages.preencheEmail(faker.person.firstName()) //Só preciso prencher qualuqer coisa , pq é uma função inválida.
      cadastro_pages.clicarCadastrar()
      cadastro_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo Senha vazio', () => {
      cadastro_pages.preencheNome(faker.person.fullName())
      cadastro_pages.preencheEmail(faker.internet.email()) 
      cadastro_pages.clicarCadastrar()
      cadastro_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha inválido', () => {
      cadastro_pages.preencheNome(faker.person.fullName())
      cadastro_pages.preencheEmail(faker.internet.email()) 
      cadastro_pages.preencheSenha('4575')
      cadastro_pages.clicarCadastrar()
      cadastro_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro feito com sucesso', async () => {

      const name = await faker.person.fullName()
      const email = await faker.internet.email()

      cadastro_pages.preencheNome(name)
      cadastro_pages.preencheEmail(email) 
      cadastro_pages.preencheSenha('165379')
      cadastro_pages.clicarCadastrar()
      cadastro_pages.validarMensagemSucesso(name)

    })
  
    
})