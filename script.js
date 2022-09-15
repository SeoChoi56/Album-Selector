
const homeButton = document.querySelector("#home")
const myCart = document.querySelector("#mycart")
const custService = document.querySelector("#customerservice")
const aboutUs = document.querySelector("#aboutus")

const listAPI = []




fetch("https://api.discogs.com/labels/")
.then(res => res.json())
.then(data => {
    listAPI.push(data)

console.log(listAPI[0])
console.log(listAPI[1])
console.log(listAPI[2])
})
//can access artist
//can access releases
//can access labels

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

