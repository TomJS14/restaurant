import heroImage from "/src/indexPage/hero-image.jpg"

function homeLoad() {
    //Clear Main element first.
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""
    
    
    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")

    //Add content
    const myImage = new Image();
    myImage.src = heroImage
      

    //Append elements
    main.appendChild(myImage)

    homeButton.setAttribute("id", "selected")
    menuButton.removeAttribute("id")
    aboutButton.removeAttribute("id")
    

    return element
    
    }
    
    
    
    export { 
        homeLoad,
    
    };
    