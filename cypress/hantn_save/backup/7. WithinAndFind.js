
describe(" learning within and find",()=>{

    it("no use within method",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        cy.get(".card__title").each(($card_title,index)=>{
        cy.log(index)
        })
        

    })

    it("use within method",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        cy.get(".showcase__hero").within(()=>{
            cy.get(".card__title").each(($card_title,index)=>{
            cy.log(index)
            })
        })

    })

    it.only("use find method",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        cy.get(".showcase__hero").find(".card__title").each(($card_title,index)=>{
            cy.log(index)
        })
    })

})