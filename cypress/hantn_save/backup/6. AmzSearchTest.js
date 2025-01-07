import AmazonHomePage from "../models/pages/AmazonHomePage"

describe("amazon search",()=>{

    it("should be able to search dining table",()=>{

        cy.visit("https://www.amazon.com/")
        
        const SEARCH_TEXT="dining table"
        let amzHomePage=new AmazonHomePage()

        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT)
        amzHomePage.searchBtnElem.click()



    })
})