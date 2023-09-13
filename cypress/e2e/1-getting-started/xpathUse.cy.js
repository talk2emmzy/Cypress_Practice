





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


        it.only('testing using only xpath', () =>{

            cy.visit('https://the-internet.herokuapp.com/login')
            
            cy.url().should('include', 'internet')
            .and('contain', '/login')
            .and('contain', 'https')
            
            cy.title().should('eq','The Internet') //verify the Page Title
    
            .and('contain','Internet')//verify the page title contain
    
            cy.xpath("//input[@id='username']").type('tomsmith')

            cy.xpath("//input[@id='password']").type('SuperSecretPassword!')

            //cy.xpath("//button[@type='submit']").click()

            cy.get('.radius').click()
    
    
        })

})