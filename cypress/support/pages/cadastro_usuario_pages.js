/// <reference types="cypress" />

import { Faker } from "@faker-js/faker"

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    // validarMensagemErro() {
    //     cy.get('.errorLabel')
    //         .then((element)=>{
    //             expect(element).to.be.visible
    //             expect(element.text()).eq('O campo nome deve ser prenchido')
    //         })
    // },

    validarMensagemErro(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencheNome(nome) {
        cy.get('#user')
            .type(nome)


    }
}