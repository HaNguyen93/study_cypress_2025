class HeroComponent{

    static COMP_SEL=".showcase__hero"

    constructor (component){
        this.component=component
    }
    get card_title(){
        return this.component.find(".card__title")
    }
    
}

module.exports = HeroComponent
