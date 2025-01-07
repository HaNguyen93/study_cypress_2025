
import DemoBlazepage from "../models/pages/DemoBlazepage" 
import HomePageAPI from "../support/HomePageAPI"
import products from "./products.json"
describe("DemoBlaze page test",()=>{
    let apiProductData
    beforeEach(()=>{
        cy.visit("https://demoblaze.com/")
        HomePageAPI.getHomePageProducts().then(entries=>apiProductData=entries)
    }) 

    it("get hero card title ",()=>{

        //let apiProductData=entries.response.body.Items
        let apiProduct=apiProductData.map(item=>{
            return{
                    itemName: item.title.replace("\n",""),
                    itemPrice:"$"+item.price
            }
         })

         new DemoBlazepage().getAllCardData().then(allCardData=>{
            cy.wrap("").then(()=>{
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.deep.eq(apiProduct)
            })
        })

        })
        
    })