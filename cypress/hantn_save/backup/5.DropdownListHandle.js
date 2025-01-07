const DROPDOWN_SEL="select[id='dropdown']"
describe(" handle dropdown list",()=>{

    it(" should be able to select dropdown list",()=>{
        
        cy.visit("//dropdown")
        
        //select by index | option 1
        cy.get(DROPDOWN_SEL).select(1)

        //select by value | option 2 
        cy.get(DROPDOWN_SEL).select("2")

        //select by visible text | select option 1
        cy.get(DROPDOWN_SEL).select("Option 1")
        
        //verify the selected option is now option 1
        cy.get("select option:selected").invoke("text").should("eq","Option 1")

        
    });
});