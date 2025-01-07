//demoblaze.com
class ProductDetailComponent{

    getProductImg=()=>cy.get(".product-image img")
    getProductName=()=>cy.get("#tbodyid .name")
    getProductPrice=()=>cy.get("#tbodyid .price-container")
    getProductDesc=()=>cy.get("#tbodyid .description")
    getAddtocartBtn=()=>cy.contains("Add to cart")

}
module.exports=ProductDetailComponent