// const cypress = require("cypress");
// const { describe } = require("mocha");

// const { assert } = require("chai")
// const { expect } = require("chai")


describe('Login Test Scenario', () =>{

    it('verify that the user can login with a valid userid and password - Implicit Assertion', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com') //visit url
        
        cy.url().should('include', 'orangehrmlive.com')
        .and('contain', 'opensource')
        .and('contain', 'https')
        
        cy.title().should('eq','OrangeHRM') //verify the Page Title

        .and('contain','HRM')//verify the page title contain

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()


        })

        it('verify that the user can login with a valid userid and password - Explicit Assertion', () =>{

            cy.visit('https://opensource-demo.orangehrmlive.com') //visit url
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

            cy.get('.oxd-button').click()


            let expName = "Paul Collings";

            cy.get('.oxd-userdropdown-name').then( (E) =>{

                let actName=E.text()

                expect(actName).to.equal(expName) //BDD ASSERTION

                assert.equal(actName,expName) //TDD ASSERTION

            })
    
    
        })
})

