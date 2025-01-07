//import ProductDetailComponent from "../../models/pages/ProductDetailComponent" 
import ProductDetailComponent from "../../models/components/ProductDetailComponent"
import HomePageAPI from "../../support/HomePageAPI"

describe("product detail test",()=>{

    beforeEach(()=>{
        cy.visit("/")
    
    })

    it("should be able to verify detail product",()=>{

       /*  cy.intercept("/entries").as("entries")
        cy.wait("@entries")
        cy.get("@entries").then(entries=>cy.log(JSON.stringify(entries.response.body.Items)))
 */
        //HomePageAPI.getHomePageProducts().then(apiData=>cy.log(JSON.stringify(apiData)))
        HomePageAPI.getHomePageProducts().then((apiData=>{
            const RandomProduct=apiData[Math.floor(Math.random()*apiData.length)]
            const RandomProductTitle=RandomProduct.title.trim().replace("\n","")
            cy.contains(RandomProductTitle).click()

            const productDetail=new ProductDetailComponent()
            productDetail.getProductName().should("have.text",RandomProductTitle)
            productDetail.getProductPrice().should("contain.text",RandomProduct.price)
            productDetail.getProductImg().should("be.visible")
            productDetail.getProductDesc().should("not.be.empty")

        }))
        
        
    })


    
        

   

 
})