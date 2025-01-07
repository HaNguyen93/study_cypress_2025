describe(" element interaction",()=>{

    it(" should be able to complete the form",()=>{
        //open the login form page
        cy.visit("/login")
        //find username by id then input the text
        cy.get("#username").type("tomsmith")
        //find password by acttribute name then input the text
        cy.get("[name='password']").type("SuperSecretPassword!")
        //find login btn by attribute and tag name then click
        cy.get("button[type='submit']").click()
        //debug purpose only
        cy.wait(3000)
    });
});