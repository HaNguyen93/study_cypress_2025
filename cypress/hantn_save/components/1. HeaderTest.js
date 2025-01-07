
import HeaderComponent from "../../models/components/HeaderComponent"

describe(" header test",()=>{

    const BRANCH_TEXT="PRODUCT STORE"
    let headerComp

    beforeEach(()=>{
        cy.visit("/")
        headerComp =new HeaderComponent()

    })
    
    it("test for logo",()=>{

        headerComp.brandLogoImg().should("be.visible")
        headerComp.brandLogo().should("contain.text",BRANCH_TEXT)


    })


    it("test for header menu details",()=>{

        const expectedMenuDetails=[
            {"text":"Home (current)","href":"index.html"},
            {"text":"Contact","href":"#"},
            {"text":"About us","href":"#"},
            {"text":"Cart","href":"cart.html"},
            {"text":"Log in","href":"#"},
            {"text":"Sign up","href":"#"}]

        headerComp.getMenuDetails().then(actualMenudetails=>{
            //cy.log(JSON.stringify(menuDetailsData))
            cy.wrap("").then(()=>{
                expect(actualMenudetails).to.be.deep.equal(expectedMenuDetails)
            })
        })
        })


  /*   it("test for header menu",()=>{
        const headerComp =new HeaderComponent()
        headerComp.headerMenuItemList().each(menuItem=>{
            cy.wrap(menuItem).should("not.be.empty")
        })
    }) */
})