//demoblaze.com
class InputOderInfo{

    getProductName=()=>cy.get("#name")
    getCountry=()=>cy.get("#country")
    getCity=()=>cy.get("#city")
    getCard=()=>cy.get("#card")
    getMonth=()=>cy.get("#month")
    getYear=()=>cy.get("#year")

    getPurchaseBtn=()=>cy.contains("Purchase")


}
module.exports=InputOderInfo