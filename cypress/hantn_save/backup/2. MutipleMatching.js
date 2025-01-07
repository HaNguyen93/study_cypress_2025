describe("mutiple matching element", ()=>{

    it("test 1",()=>{
        
        cy.visit("/login")
/* 
        //use eq
        cy.get("input").eq(0).type("tomsmith")
        cy.get("input").eq(1).type("SuperSecretPassword!")

        //use closure
        cy.get("input").then(items=>{
            cy.get(items[0]).clear()
            cy.get(items[0]).type("tomsmith")
            
            cy.get(items[1]).clear()
            cy.get(items[1]).type("SuperSecretPassword!")
        })
 */
        //use each
        cy.get("input").each((item,index)=>{
            cy.get(item).type("somethingtest")
        })
        cy.get("button[type='submit']").click()

        //wait
        cy.wait(2000)


    })
})