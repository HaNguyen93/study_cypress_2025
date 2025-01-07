import SRHomePage from "../models/pages/SRHomePage" 
describe("SR homepage test",()=>{

    it("should be able print all the title",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        cy.get(".card__title").each(($title,index)=>{
            cy.log(index)
            cy.log($title.text().trim())
        })
    })

    it.only("should be interact with a component",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        const srHomePage=new SRHomePage()
        srHomePage.heroComponent().card_title.each(($title,index)=>{
            cy.log(index)
            cy.log($title.text().trim())
        })


    })
})