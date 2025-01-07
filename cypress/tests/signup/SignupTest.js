import HeaderComponent from "../../models/components/HeaderComponent"
import SignupComponent from "../../models/components/SignupComponent"

function generateRandomUser(userLength){

    const ALL_CHARS="ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuwxyz0123456789"
    const ALL_CHARS_LENGTH=ALL_CHARS.length
    let randomUsername=''
    for (let i=0;i<userLength;i++){
        randomUsername+=ALL_CHARS.charAt(Math.floor(Math.random()*ALL_CHARS_LENGTH))
    }
    return randomUsername
}
const SIGNUP_CREDS={
    username:generateRandomUser(9),
    password:"123456"
}

describe("sign up test",()=>{
    let headerComp
    let signUpComp

    beforeEach(()=>{
        cy.visit("/")
        headerComp = new HeaderComponent()
        signUpComp =new SignupComponent()
    })
    
    const signup=(username,password)=>{
        headerComp.getLoginLink().click({force:true})
        signUpComp.getSignupForm().should("be.visible")

        signUpComp.getUsername().type(`${SIGNUP_CREDS.username}`,{force:true,waitForAnimation:true})
        signUpComp.getPassword().type(`${SIGNUP_CREDS.password}`,{force:true,waitForAnimation:true})
        signUpComp.getSignupBtn().click({force:true})

    }

    it("should be able to create a new user",()=>{
        const {username,password}=SIGNUP_CREDS
        signup(username,password)

        cy.on('window:alert',(alert)=>{
            //assertions
            expect(alert).to.contains("Sign up successful.")
         })

        
    })

    it("should be able to see existing username",()=>{

        const {password}=SIGNUP_CREDS
        signup("hantn",password)

        cy.on('window:alert',(alert)=>{
            //assertions
            expect(alert).to.contains("This user already exist.")
         })
    })

  /*   after(()=>{
        //delete registered username
    }) */

})