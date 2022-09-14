//Pulls  tab id from document to allow button creation on tab 
const homeButton = document.querySelector("#home")
const myCart = document.querySelector("#mycart")
const custService = document.querySelector("#customerservice")
const aboutUs = document.querySelector("#aboutus")

//Console.log id for tabs
document.addEventListener("DOMContentLoaded", () =>{
    console.log(homeButton)
    console.log(myCart)
    console.log(custService)
    console.log(aboutUs)

// Creates event listeners for tabs on click of tab
    homeButton.addEventListener("click", showHomePage)
    myCart.addEventListener("click", showCartPage)
    custService.addEventListener("click", showCustServicePage)
    aboutUs.addEventListener("click", showAboutUsPage)
})

// Alert for event listener on Home tab
function showHomePage() {
    console.log("Home Page is clicked")
}

// Alert for event listener on Cart tab
function showCartPage() {
    console.log("Cart should show")
}

// Alert for event listener on Customer Service tab
function showCustServicePage(){
    console.log("LOL CUSTOMER SERVICE")
}

// Alert for event listener on About Us tab
function showAboutUsPage(){
    console.log("Bio here")
}

