describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Прогноз погоди')
  })

  it('Search for Lviv', () => {
    cy.visit('/')
    cy.get("#search-box").type("Lviv");
    cy.get("#weather-content").contains('Lviv');
  })
})
