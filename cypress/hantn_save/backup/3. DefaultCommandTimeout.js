describe("exploring default command timeout",()=>{
//describe("exploring default command timeout",{defaultCommandTimeout:5000},()=>{
    it("should be able to apply default timeout",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        
        //cy.get("#username__",{timeout:7000}).type("testtest")
        cy.get("a[href='/login']").click()
        cy.location("pathname",{timeout:500}).should("eq","/login1")
       

    })
})