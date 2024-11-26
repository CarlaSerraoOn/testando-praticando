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

    })

    it('Campo E-mail inválido', () => {
    
    })

    it('Campo Senha vazio', () => {
       
    })

    it('Campo Senha inválido', () => {
     
    })

    it('Cadastro feito com sucesso', () => {
     
    })
    
})