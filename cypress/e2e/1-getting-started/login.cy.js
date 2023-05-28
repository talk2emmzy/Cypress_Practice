// const cypress = require("cypress");
// const { describe } = require("mocha");


describe('Login Test Scenario', () =>{

    it('verify that the user can login with a valid userid and password', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit url
        
        cy.title().should('eq','OrangeHRM') //verify the Page Title

        .and('contain','HRM')//verify the page title contain


        })
})