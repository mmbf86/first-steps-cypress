import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredetialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    closeButton: '.--close',
    genderField: '.oxd-radio-input--active',
    saveButton: '.orangehrm-left-space',
  }

  it.only('User Info Updates - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('John')
    cy.get(selectorsList.middleNameField).clear().type('Doe')
    cy.get(selectorsList.lastNameField).clear().type('Smith')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorsList.genericField).eq(4).clear().type('123456')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicense')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.genderField).eq(0).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredetialAlert)
  })
})