
import SRHomePage2 from "../models/pages/SRHomePage2" 
describe("sr homepage test",()=>{

    it("get hero card title ",()=>{

        cy.visit("https://www.simplyrecipes.com/")
        //new SRHomePage2().getHeroCompTitle().then(title=>cy.log(title))

        new SRHomePage2().getHeroCompTitle().then(title=>{
            cy.wrap("").then(()=>{
                expect(title).to.be.eq("Our 52 Most Popular Recipes of All Time")
            })
        })
    })
})