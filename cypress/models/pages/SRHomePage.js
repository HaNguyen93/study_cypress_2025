
import HeroComponent from "../components/SRpage/HeroComponent"

class SRHomePage{

    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL));
    }


}
module.exports=SRHomePage