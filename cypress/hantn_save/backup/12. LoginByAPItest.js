describe("DemoBlaze page test",()=>{
    
    it("login demoblaze page by API",()=>{

       
       cy.login("hantn","123456")
       cy.visit("https://demoblaze.com/")

        })
        
    })