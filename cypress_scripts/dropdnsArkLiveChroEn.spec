/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.playlostark.com/en-us')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
      cy.get('.ags-SiteHeader-account').as('buyFoundersBtn')  
          .should('contain', 'Buy')
      
      cy.get('@buyFoundersBtn').click()
      cy.get('a.ags-ShopModule-contentContainer-item').click({ multiple: true, timeout: 100000})    
     })
  })

