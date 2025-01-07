
//demoblaze.com
class FooterComponent{

    getfooterColums=()=>cy.get("#fotcont .caption")
    getColumHeader =()=>cy.get("h4")
    getColumDesc=()=>cy.get("p")


    getAboutUsData(){
        let aboutUsData={}

        this.getfooterColums().eq(0).within(()=>{
            this.getColumHeader().then($header=>aboutUsData.header=$header.text().trim())
            this.getColumDesc().then($desc=>aboutUsData.desc=$desc.text().replace(/\n\s+/g," ").trim())
        })

        return new Cypress.Promise(resolve=>{
            cy.wrap("").then(()=>resolve(aboutUsData))
        })
    }

    getContactData(){
        let contactUsData={}

        this.getfooterColums().eq(1).within(()=>{
            this.getColumHeader().then($header=>contactUsData.header=$header.text().trim())
            this._getMutiDesc().then(desc=>contactUsData.desc=desc)
        })

        return new Cypress.Promise(resolve=>{
            cy.wrap("").then(()=>resolve(contactUsData))
        })
    }

    _getMutiDesc(){
        let desc=""

        this.getColumDesc().each($descLine=>{
            desc=desc+$descLine.text().trim()+ " "

        })
        
        return new Cypress.Promise(resolve=>{
            cy.wrap("").then(()=>{
                resolve(desc)
            })
        })
    }

    

}
module.exports=FooterComponent