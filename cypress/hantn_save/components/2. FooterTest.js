import FooterComponent from "../../models/components/FooterComponent"

describe("footer test",()=>{

   
    let footerComp

    beforeEach(()=>{
        cy.visit("/")
        footerComp =new FooterComponent()

    })
    
    it("test about us of footer",()=>{

        const expectedAboutUs={
            "header":"About Us",
            "desc":"We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
        }

        footerComp.getAboutUsData().then(actualAboutUsData=>{
            //cy.log(JSON.stringify(actualAboutUsData))
            cy.wrap("").then(()=>{
                // expect(actualAboutUsData.header).to.equal(expectedAboutUs.header)
                // expect(actualAboutUsData.desc).to.equal(expectedAboutUs.desc)
                expect(actualAboutUsData).to.eql(expectedAboutUs)
            })
        })
    })

    it.only("test contact us data",()=>{

        const expectedContactUs={
            header:"Get in Touch",
            desc:"Address: 2390 El Camino Real",
            Phone: "+440 123456",
            Email: "demo@blazemeter.com"
        }

        footerComp.getContactData().then(actualContactUsData=>{
            cy.log(JSON.stringify(actualContactUsData))
            cy.wrap("").then(()=>{
                expect(actualContactUsData.header).to.equal(expectedContactUs.header)
                expect(actualContactUsData.desc).to.contains(expectedContactUs.desc)
                expect(actualContactUsData.desc).to.contains(expectedContactUs.Phone)
                expect(actualContactUsData.desc).to.contains(expectedContactUs.Email)
            })
        })
    })


 
})