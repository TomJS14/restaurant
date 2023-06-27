import heroImage from "/src/indexPage/hero-image.jpg"

function pageLoad() {
    //Select Content Div
    const element = document.querySelector("#content")
    
    //Create home page elements
    const header = document.createElement("header")
    const title = document.createElement("h1")
    const navlist = document.createElement("ul")
    const listItemOne = document.createElement("button")
    const listItemTwo = document.createElement("button")
    const listItemThree = document.createElement("button")
    const main = document.createElement("main")
    const myImage = new Image();
    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    const footerText2 = document.createElement("p")

    //add event listeners
    
    //Add content
    title.textContent = "Welcome to the restaurant"
    listItemOne.textContent = "Menu"
    listItemTwo.textContent = "Home"
    listItemThree.textContent = "About us"
    myImage.src = heroImage
    footerText.textContent = `${new Date().getFullYear()} Made by TomJS14`
    footerText2.textContent = `Another generic restaurant website`
    
    //set attributes.
    header.classList.add("header")
    navlist.classList.add("nav-list")
    listItemOne.classList.add("menu-button")
    listItemTwo.classList.add("home-button")
    listItemThree.classList.add("about-button")
    
    //Append elements
    header.appendChild(title)
    header.appendChild(navlist)
    
    navlist.appendChild(listItemOne)
    navlist.appendChild(listItemTwo)
    navlist.appendChild(listItemThree)
    
    main.appendChild(myImage)
    
    footer.appendChild(footerText)
    footer.appendChild(footerText2)
    
    element.appendChild(header)
    element.appendChild(main)
    element.appendChild(footer)

    return element
    
    }
    
    
    
    export { 
        pageLoad,
    
    };
    