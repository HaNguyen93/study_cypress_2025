const CHECKBOX_SEL="input[type='checkbox']"
describe(" handle checkbox",()=>{

    it(" should be able to select/unselect a checkbox",()=>{
        
        cy.visit("/checkboxes")
        //try to unselect the second checkbox
        cy.get(CHECKBOX_SEL).eq(1).click()
        //verify all checkboxes are unselected
        cy.get(CHECKBOX_SEL).filter(":not([checked])").should("have.length",2)
        //loop over all checkboxes again then select all
        cy.get(CHECKBOX_SEL).filter(":not([checked])").then(items =>{
            cy.get(items).click({ multiple: true })
        })

        
    });
});