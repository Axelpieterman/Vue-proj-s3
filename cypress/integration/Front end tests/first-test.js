

describe('Verify Browser Stack Home Page', () => {

        it('Test home page', () => {
    
           cy.visit('http://localhost:8081');

           cy.get('.home > img')

           cy.get('h1');

        })
    
        it('Test side-bar', () => {

            cy.contains('Home');
    
            cy.contains('Weapons');

            cy.contains('Attachments');

            cy.contains('Gear');  

            cy.contains('Sign-up');

            cy.contains('Sign-in');

            cy.contains('Add article');
        })
    
        it('Test weapon page', () => {
    
            cy.contains('Weapons').click();

            cy.url().should('include', '/weaponstore')

            cy.get(':nth-child(1) > .card')

            cy.get(':nth-child(1) > .card > .card-body > .btn')

            cy.get(':nth-child(1) > .card > .card-body')

            cy.get(':nth-child(1) > .card > .card-body > .card-text')

            cy.get(':nth-child(1) > .card > .imgbox > .card-img-top')
        })

        it('Test gear page', () => {
        
            cy.contains('Gear').click();

            cy.url().should('include', '/gearstore')

            cy.get(':nth-child(1) > .card')

            cy.get(':nth-child(1) > .card > .card-body > .btn')

            cy.get(':nth-child(1) > .card > .card-body')

            cy.get(':nth-child(1) > .card > .card-body > .card-text')

            cy.get(':nth-child(1) > .card > .imgbox > .card-img-top')
        })

        it('Test attachments page', () => {
        
            cy.contains('Attachments').click();

            cy.url().should('include', '/attachmentstore')

            cy.get(':nth-child(1) > .card')

            cy.get(':nth-child(1) > .card > .card-body > .btn')

            cy.get(':nth-child(1) > .card > .card-body')

            cy.get(':nth-child(1) > .card > .card-body > .card-text')

            cy.get(':nth-child(1) > .card > .imgbox > .card-img-top')
        })

       it('Test sign-up page (succes)', () => {
        
            cy.contains('Sign-up').click();

            cy.url().should('include', '/sign-up')

            cy.get('h3');

            cy.get('[type="email"]');

            cy.get('[type="password"]');

            cy.get('[type="city"]');

            cy.get('[type="postalcode"]')

            cy.get('[type="address"]')

            cy.contains('Accept terms and conditions');

            cy.get('[type="email"]').type('axelxeon@gmail.com').should('have.value', 'axelxeon@gmail.com');

            cy.get('[type="password"]').type('password123').should('have.value', 'password123');
            
            cy.get('[type="city"]').type('Best').should('have.value', 'Best');

            cy.get('[type="postalcode"]').type('5683PM').should('have.value', '5683PM');

            cy.get('[type="address"]').type('Buitenweg 11').should('have.value', 'Buitenweg 11');      

            cy.get('[type="checkbox"]').first().check();
            
            cy.contains('Create Account').click();

            cy.contains('succes');
        })   
        it('Test sign-up page (no succes)', () => {
        
            cy.reload();

            cy.get('[type="email"]').type('axelxeon@gmail.com').should('have.value', 'axelxeon@gmail.com');

            cy.get('[type="password"]').type('pass').should('have.value', 'pass');
            
            cy.get('[type="city"]').type('Best').should('have.value', 'Best');

            cy.get('[type="postalcode"]').type('5683PM').should('have.value', '5683PM');

            cy.get('[type="address"]').type('Buitenweg 11').should('have.value', 'Buitenweg 11');    

            cy.contains('Create Account').click();

            cy.get('succesfull').should('not.exist');

            cy.get('[type="checkbox"]').first().check();

            cy.contains('Create Account').click(); 

            cy.get('.error');

            cy.get('succesfull').should('not.exist');
        })   
        it('Test sign-in page', () => {
            
            cy.contains('Sign-in').click();

            cy.get('[type="email"]').type('axelxeon@gmail.com').should('have.value', 'axelxeon@gmail.com');

            cy.get('[type="password"]').type('password123').should('have.value', 'password123');

            cy.get('[type="checkbox"]').first().check();
            
         })   
    })