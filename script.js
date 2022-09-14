
const homeButton = document.querySelector("#home")
const myCart = document.querySelector("#cart")
const custService = document.querySelector("#customer")
const aboutUs = document.querySelector("#bio")


document.addEventListener("DOMContentLoaded", () =>{
    console.log(homeButton)
    console.log(myCart)
    console.log(custService)
    console.log(aboutUs)

    homeButton.addEventListener("click", showHomePage)
    myCart.addEventListener("click", showCartPage)
    custService.addEventListener("click", showCustServicePage)
    aboutUs.addEventListener("click", showAboutUsPage)
})

function showHomePage() {
    console.log("Home Page is clicked")
}

function showCartPage() {
    console.log("Cart should show")
}

function showCustServicePage(){
    console.log("LOL CUSTOMER SERVICE")
}

function showAboutUsPage(){
    console.log("Bio here")
}

