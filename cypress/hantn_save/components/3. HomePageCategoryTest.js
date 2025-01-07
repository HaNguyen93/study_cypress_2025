import DemoBlazepage from "../../models/pages/DemoBlazepage" 
import HomePageAPI from "../../support/HomePageAPI" 
describe("homepage category filter test",()=>{

   
    beforeEach(()=>{
        cy.visit("/")
        HomePageAPI.waitForHomePageLoaded()

    })

    function verifyCategoryFilterBy(productName){
        cy.intercept("/bycat").as("cats")
        //cy.get('[onclick="byCat(\'phone\')"]').scrollIntoView().click()
        cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force:true})
        cy.wait("@cats")
        cy.request({
            method:"POST",
            url:"https://api.demoblaze.com/bycat",
            body:{
                cat: `${productName}`
            }
       }).then(res=>{

        let apiProductData=res.body.Items
        apiProductData=apiProductData.map(item=>{
            return{
                    itemName: item.title.replace("\n",""),
                    itemPrice:"$"+item.price
            }
         })
        
         //compair with UI data
         new DemoBlazepage().getAllCardData().then(allCardData=>{
            cy.wrap("").then(()=>{
                //cy.log(JSON.stringify(allCardData))
                expect(allCardData).to.be.eql(apiProductData)
            })
        })
       })

    }

    const SCENARIOS=["phone","notebook","monitor"]

    SCENARIOS.forEach(product=>{
        it(`should be able to filter ${product} `,()=>{
            verifyCategoryFilterBy(`${product}`)
        })

    })

    
        

   

 
})