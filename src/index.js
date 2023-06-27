import "./styles.css"
import { pageLoad }from "./initialPageLoad.js"
import { menuLoad }from "./menu.js"
import {aboutUsLoad} from "./about-us.js"
import { homeLoad } from "./homeLoad"

//select the content div.
const content = document.querySelector("#content")

//Display the contents of PageLoad module
pageLoad()


//Add event listeners to tabs / pages
const menuButton = document.querySelector(".menu-button")
const aboutButton = document.querySelector(".about-button")
const homeButton = document.querySelector(".home-button")

menuButton.addEventListener("click", menuLoad);
aboutButton.addEventListener("click", aboutUsLoad)
homeButton.addEventListener("click", homeLoad)




