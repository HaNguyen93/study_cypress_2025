class SRHomePage2{

    getHeroCompTitle(){
        
        let title=""
        cy.get(".showcase__hero .card__title").then($title=>{

            title=$title.text().trim()
            
        })
        return new Cypress.Promise(resolve =>cy.wrap("").then(()=>resolve(title)))
    }

}
module.exports=SRHomePage2