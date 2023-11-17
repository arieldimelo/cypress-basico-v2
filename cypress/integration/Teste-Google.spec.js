/// <reference types="Cypress" />

describe('Acessar Google', function() {
    it('Verificar se entrou no google', function() {
        cy.visit('https://www.google.com/')
        //cy.title('Central de Atendimento ao Cliente TAT')
    })
  })