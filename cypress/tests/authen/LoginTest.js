import HeaderComponent from "../../models/components/HeaderComponent"
import LoginComponent from "../../models/components/LoginComponent"
const LOGIN_CREDS={
    username:"hantn",
    password:"123456"
}

describe(" login test",()=>{
    let headerComp
    let loginComp

    beforeEach(()=>{
        cy.visit("/")
        headerComp = new HeaderComponent()
        loginComp =new LoginComponent()
    })
    
    const login=(username,password)=>{
        headerComp.getLoginLink().click({force:true})
        loginComp.getLoginForm().should("be.visible")

        loginComp.getUsername().type(`${LOGIN_CREDS.username}`,{force:true,waitForAnimation:true})
        loginComp.getPassword().type(`${LOGIN_CREDS.password}`,{force:true,waitForAnimation:true})
        loginComp.getLoginBtn().click({force:true})

    }

    it("should be able to login with correct creds",()=>{
        const {username,password}=LOGIN_CREDS
        login(username,password)

        headerComp.getLogName().should("be.visible")
        headerComp.getLogName().should("contain.text",`Welcome ${LOGIN_CREDS.username}`)

        
    })

    it("should be able to login with incorrect username",()=>{

        const {username,password}=LOGIN_CREDS
        login(username+"_WRONG",password)

        cy.on('window:alert',(alert)=>{
            //assertions
            expect(alert).to.contains("User does not exist.")
         })
    })

    it("should be able to login with incorrect pass",()=>{

        const {username,password}=LOGIN_CREDS
        login(username,password+"_WRONG")

        cy.on('window:alert',(alert)=>{
            //assertions
            expect(alert).to.contains("Wrong password.")
         })
    })

})