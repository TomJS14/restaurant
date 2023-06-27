import BiancaImage from "/src/menuPage/pizza-bianca.jpg"
import funghiImage from "/src/menuPage/mushroom-pizza.jpg"
import fourCheese from "/src/menuPage/four-cheese.jpg"
import napolotena from "/src/menuPage/napolotena.jpg"

function menuLoad() {
    //clear main element first
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""
    
    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")
    
    /* menu container */

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    //menu items
    const card1 = document.createElement("div")
    const card2 = document.createElement("div")
    const card3 = document.createElement("div")
    const card4 = document.createElement("div")
    const card5 = document.createElement("div")
    const card6 = document.createElement("div")

    //menu content 
    card1.textContent = "Pizza bianca"
    card2.textContent = "Pizza ai funghi"
    card3.textContent = "Pizza quattro formaggi"
    card4.textContent = "Pizza Napoletana"
    card5.textContent = "Another Pizza"
    card6.textContent = "And another pizza"

    const pizzaBianca = new Image();
    pizzaBianca.src = BiancaImage

    const pizzaFunghi = new Image();
    pizzaFunghi.src = funghiImage;

    const quattroFormaggi = new Image();
    quattroFormaggi.src = fourCheese;

    const napolotenaPizza = new Image();
    napolotenaPizza.src = napolotena;

    const pizza5 = new Image();
    pizza5.src = napolotena;

    const pizza6 = new Image();
    pizza6.src = napolotena;

    //menu styling
    card1.classList.add("menu-card")
    card2.classList.add("menu-card")
    card3.classList.add("menu-card")
    card4.classList.add("menu-card")
    card5.classList.add("menu-card")
    card6.classList.add("menu-card")

    pizzaBianca.classList.add("menu-img")
    pizzaFunghi.classList.add("menu-img")
    quattroFormaggi.classList.add("menu-img")
    napolotenaPizza.classList.add("menu-img")
    pizza5.classList.add("menu-img")
    pizza6.classList.add("menu-img")

    //appending cards
    card1.appendChild(pizzaBianca)
    card2.appendChild(pizzaFunghi)
    card3.appendChild(quattroFormaggi)
    card4.appendChild(napolotenaPizza)
    card5.appendChild(pizza5)
    card6.appendChild(pizza6)
    //appending menu
    
    menuContainer.appendChild(card1)
    menuContainer.appendChild(card2)
    menuContainer.appendChild(card3)
    menuContainer.appendChild(card4)
    menuContainer.appendChild(card5)
    menuContainer.appendChild(card6)

    main.appendChild(menuContainer)

    menuButton.setAttribute("id", "selected")
    aboutButton.removeAttribute("id")
    homeButton.removeAttribute("id")
    return element
    
    }
    
    
    
    export { 
        menuLoad,
    };
    