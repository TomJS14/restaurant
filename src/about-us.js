import mapScreenshot from "/src/aboutPage/map.png"


function aboutUsLoad() {
    //clear main element first
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""

    //create card
    const aboutCard = document.createElement("div")

    const callText = document.createElement("p")
    callText.textContent = "Call us 📞 01289 731 901"

    const addressText = document.createElement("p")
    addressText.textContent = "Find us 🍕 121 Buckland End"

    const mapImage = new Image();
    mapImage.src = mapScreenshot;

    mapImage.classList.add("map-img")

    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")
    

    //Set styling
    aboutCard.classList.add("about-card")

    //append
    aboutCard.appendChild(callText)
    aboutCard.appendChild(addressText)
    aboutCard.appendChild(mapImage)
    
    main.appendChild(aboutCard)

    aboutButton.setAttribute("id", "selected")
    menuButton.removeAttribute("id")
    homeButton.removeAttribute("id")

    return element

}

export { aboutUsLoad }

