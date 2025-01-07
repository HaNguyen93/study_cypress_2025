
import HomePageAPI from "../../support/HomePageAPI"
import HeaderComponent from "../../models/components/HeaderComponent"
import LoginComponent from "../../models/components/LoginComponent"
import ProductDetailComponent from "../../models/components/ProductDetailComponent"
import CartDetailComponent from "../../models/components/CartDetailComponent"
import InputOderInfo from "../../models/components/InputOderInfo"


describe("product detail test",()=>{

    beforeEach(()=>{
        cy.visit("/")
    
    })
 /* step
        1. open page
        2. select a random category
        3. select a random product
        4. add to cart
        5. go to cart and verify cart detail
        6. place order as guest       
        */
    it("order item as guest",()=>{
       
        purcharseItem()
    
    })

    it("order item as logged in user",()=>{
       //login      
        const {username,password}=LOGIN_CREDS
        login(username,password)

       //purchase
        purcharseItem()
    
    })
 
})

const purcharseItem =()=>{
    //select a random product
    HomePageAPI.getHomePageProducts().then((apiData=>{
        const RandomProduct=apiData[Math.floor(Math.random()*apiData.length)]
        const RandomProductTitle=RandomProduct.title.trim().replace("\n","")
        cy.contains(RandomProductTitle).click()

        let productDetailP= new ProductDetailComponent()
        let headerComp= new HeaderComponent()
        let detailCart=new CartDetailComponent()
        let inputOderInfo =new InputOderInfo()
        
        // add to cart
        productDetailP.getAddtocartBtn().click()
        //go to cart

        headerComp.getCartLink().click()

        //verify cart details

        //place order
        detailCart.getPlaceOrderBtn().click()

        //input place order details

        //inputOderInfo
        inputOderInfo.getProductName().type("hanguyen")
        inputOderInfo.getCountry().type("vietnam")
        inputOderInfo.getCity().type("HCM")
        inputOderInfo.getCard().type("123456789")
        inputOderInfo.getMonth().type("01")
        inputOderInfo.getYear().type("2025")
        inputOderInfo.getPurchaseBtn().click()

        //verify purcharse confirm dialog
        cy.get(".sweet-alert h2").should("have.text","Thank you for your purchase!")
        cy.get(".sweet-alert .lead").should("contain.text","Card Number: 123456789")
    

    }))
}

const LOGIN_CREDS={
    username:"hantn",
    password:"123456"
}

const login=(username,password)=>{
    let headerComp = new HeaderComponent()
    let loginComp =new LoginComponent()

    headerComp.getLoginLink().click({force:true})
    loginComp.getLoginForm().should("be.visible")

    loginComp.getUsername().type(`${LOGIN_CREDS.username}`,{force:true,waitForAnimation:true})
    loginComp.getPassword().type(`${LOGIN_CREDS.password}`,{force:true,waitForAnimation:true})
    loginComp.getLoginBtn().click({force:true})
    }