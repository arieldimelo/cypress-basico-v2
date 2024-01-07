/// <reference types="Cypress" />

describe('Acessar Google', function() {
    it('Verificar se entrou no google', function() {
        cy.visit('https://www.speedtest.net/pt')
        
    })

    it('Testar velocidade da internet', function() {
        
        cy.contains('iniciar').click()
        
    })
  })