--/// <reference types="Cypress" />

describe('Agendar um aendimento', function() {
    it('Agendar um aendimento com profissional e depois cancelar', function() {
        cy.visit('https://qa-paciente.conexasaude.com.br/login')
        cy.contains(`Entrar`).click()
        cy.get(`[name="user"]`).type(`53301367097`)
        cy.get(`[name="pass"]`).type(`12345678D`)
        cy.contains(`Entrar`).click()
        cy.contains(`Consulta Agendada`).click()
        cy.contains(`Buscar pelo nome do profissional`).click
        cy.contains(`Digite o nome do profissional`).click
        cy.get().type(`Ariel`)
        

        


        
    })
  })