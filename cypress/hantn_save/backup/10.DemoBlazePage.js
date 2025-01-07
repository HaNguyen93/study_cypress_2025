
import DemoBlazepage from "../models/pages/DemoBlazepage" 
import products from "./products.json"
describe("DemoBlaze page test",()=>{

   
    it("get hero card title ",()=>{

        cy.visit("https://demoblaze.com/")
        new DemoBlazepage().getAllCardData().then(allCardData=>{
            cy.wrap("").then(()=>{
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(products)
            })
        })
        
    })


    it.only("get hero card title ",()=>{

        cy.visit("https://demoblaze.com/")
        
        //intercept default homepage product
        cy.intercept("/entries").as("entries")
        cy.wait("@entries")
        cy.get("@entries").then(entries=>{
            //cy.log(JSON.stringify(entries.response.body.Items))
        let apiProductData=entries.response.body.Items
        apiProductData=apiProductData.map(item=>{
            return{
                    itemName: item.title.replace("\n",""),
                    itemPrice:"$"+item.price
            }
         })

         new DemoBlazepage().getAllCardData().then(allCardData=>{
            cy.wrap("").then(()=>{
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(apiProductData)
            })
        })

        })
        
    })
})