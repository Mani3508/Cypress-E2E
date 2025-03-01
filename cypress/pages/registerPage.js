

/// <reference types="cypress" />


export class registerPage{

    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: 'input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
        
    }

      openURL(){
        cy.visit(Cypress.env('URL'))
      }


    enterFirstName(Fname){
        
        cy.get(this.weblocators.firstName).type(Fname)

    }

    enterLastName(Lname){
        
        cy.get(this.weblocators.lastName).type(Lname)

    }

    enterEmail(email){
        
        cy.get(this.weblocators.email).type(email)

    }

    enterTelephone(phoneNo){
        
        cy.get(this.weblocators.telephone).type(phoneNo)

    }

    enterPassword(password){
        
        cy.get(this.weblocators.password).type(password)

    }

    enterPassword(password){
        
        cy.get(this.weblocators.passwordConfirm).type(password)

    }

    selectCheckbox(){
        
        cy.get(this.weblocators.policyCheckbox).check()


    }
     clickContinue(){

        cy.get(this.weblocators.continue).click()

     }

    
   
}

export default registerPage;