//demoblaze.com
class SignupComponent{

    getSignupForm=()=>cy.get(".modal-dialog form")
    getUsername=()=>cy.get("#sign-username")
    getPassword=()=>cy.get("#sign-password")
    getSignupBtn=()=>cy.get("[onclick='register()']")


}
module.exports=SignupComponent