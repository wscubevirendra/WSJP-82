var menuBar = document.querySelector("#menuBar");
var navbar = document.querySelector(".container nav ul");
var overlay_container = document.querySelector(".overlay_container")
var top_section = document.querySelector(".top_section")



menuBar.addEventListener(
    "click",
    function () {
        navbar.classList.add("navbarShow")
        overlay_container.classList.add("overlayShow")

    }
)

overlay_container.addEventListener(
    "click",
    function () {
        navbar.classList.remove("navbarShow")
        overlay_container.classList.remove("overlayShow")

    }
)

document.addEventListener(
    "scroll",
    function (e) {
        if (window.scrollY > 49) {
            top_section.classList.add("top_section_show")

        } else {
            top_section.classList.remove("top_section_show")

        }
    }
)