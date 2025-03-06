import  registerPage  from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe(' test automation', () => {



    it('register flow', () => {

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Mani')
        cy.get('#input-lastname').type('Babu')
        cy.get('#input-email').type('Babu@gmail.com')
        cy.get('#input-telephone').type('12334567890')
        cy.get('#input-password').type('Manibabu1@')
        cy.get('#input-confirm').type('Manibabu1@')
        cy.get('input[type="checkbox').click()
        cy.get('.btn.btn-primary').click

        
        
        
    
        // registerObj.openURL()
        // registerObj.enterFirstName(registerData.firstName)
        // registerObj.enterlastName(registerData.lastName)
        // registerObj.enterEmail(registerData.email)
        // registerObj.enterTelephone(registerData.telephone)
        // registerObj.enterPassword(registerData.password)
        // registerObj.selectCheckbox()
        // registerObj.clickOnContinue()



    })


    it('register flow', () => {

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Mani')
        cy.get('#input-lastname').type('Babu')
        cy.get('#input-email').type('Babu@gmail.com')
        cy.get('#input-telephone').type('12334567890')
        cy.get('#input-password').type('Manibabu1@')
        cy.get('#input-confirm').type('Manibabu1@')
        cy.get('input[type="checkbox').click()
        cy.get('.btn.btn-primary').click
    })
})