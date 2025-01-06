/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

import home_pages from '../support/pages/home_pages'
import login_pages from '../support/pages/login_page.js'

describe('Login', () => {

    beforeEach('Login', () => {
            home_pages.acessarLogin()
        })

    it('Campo E-mail vazio', () => {
        login_pages.preencheEmail(faker.person.fullName())
        login_pages.acessarLogin()
        login_pages.validarMensagemErro('E-mail inválido.')
    })

    it('Campo E-mail inválido', () => {
        login_pages.preencheEmail(faker.person.firstName())
        login_pages.acessarLogin()
        login_pages.validarMensagemErro('E-mail inválido.')

    })

    it('Campo Senha vazio', () => {
        login_pages.preencheEmail(faker.internet.email())
        login_pages.acessarLogin()
        login_pages.validarMensagemErro('Senha inválida.')

    })

    it('Campo Senha inválido', () => {
        login_pages.preencheEmail(faker.internet.email())
        login_pages.preencheSenha('234')
        login_pages.acessarLogin()
        login_pages.validarMensagemErro('Senha inválida.')
    })
 
    it('Login com sucesso', async() => {
        const email = await faker.internet.email()

        login_pages.preencheEmail(email) 
        login_pages.preencheSenha('165379')
        login_pages.acessarLogin()
        login_pages.validarMensagemSucesso(email)
        
     })
          

})