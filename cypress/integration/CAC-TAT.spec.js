/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preencher os campos', function() {
        cy.get('input[name="firstName"]')
        .type('Ariel')
        .should('have.value', 'Ariel')
        cy.get('input[name="lastName"]')
        .type('Melo')
        .should('have.value', 'Melo')///.should('be.equal', 'Melo')
        cy.get('#email')
        .type('ariel@teste.com')
        .should('have.value', 'ariel@teste.com')///.should('be.equal', 'ariel@teste.com') Método com o inspecionador do cypress
        cy.get('#phone')
        .type('11971927437')
        .should('have.value', '11971927437')///.should('be.equal', '11971927437')
        ///cy.get('#feedback').click()
        cy.get('textarea[name="open-text-area"]').type('Teste para a validação do texto escrito')///.should('be.equal', 'Teste para a validação do texto escrito')
        cy.get('button[type="submit"]').click()

    })
  })