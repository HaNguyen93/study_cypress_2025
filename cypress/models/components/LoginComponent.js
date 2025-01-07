//demoblaze.com
class LoginComponent{

    getLoginForm=()=>cy.get("#logInModal form")
    getUsername=()=>cy.get("#loginusername")
    getPassword=()=>cy.get("#loginpassword")
    getLoginBtn=()=>cy.get("[onclick='logIn()']")


}
module.exports=LoginComponent