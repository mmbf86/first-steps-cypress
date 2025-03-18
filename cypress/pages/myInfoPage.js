class MyInfoPage {
    
    selectorList() {
        const selectors = {
                firstNameField: "[name='firstName']",
                middleNameField: "[name='middleName']",
                lastNameField: "[name='lastName']",
                genericField: '.oxd-input--active',
                closeButton: '.--close',
                genderField: '.oxd-radio-input--active',
                saveButton: '.orangehrm-left-space',
                dropdownField: "[clear='false']",
            }
        return selectors
        }
        

    updateUserInfo() {
        cy.get(this.selectorList().firstNameField).clear().type('John')
        cy.get(this.selectorList().middleNameField).clear().type('Doe')
        cy.get(this.selectorList().lastNameField).clear().type('Smith')
        cy.get(this.selectorList().genericField).eq(3).clear().type('EmployeeID')
        cy.get(this.selectorList().genericField).eq(4).clear().type('123456')
        cy.get(this.selectorList().genericField).eq(5).clear().type('ABC12345')
        cy.get(this.selectorList().genericField).eq(6).clear().type('2025-03-10')
        cy.get(this.selectorList().closeButton).click()
        cy.get(this.selectorList().dropdownField).eq(0).click()
        cy.contains('American').click()
        cy.get(this.selectorList().dropdownField).eq(1).click()
        cy.contains('Single').click()
        cy.get(this.selectorList().genderField).eq(0).click()
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }

}

export default MyInfoPage