window.onload = () => {
    document.querySelector(".main").style.marginLeft = "30%"
    document.querySelector(".sidebar").style.display = "flex"   
}

document.querySelector(".sidebar-button").onclick = () => {
    if (document.querySelector(".sidebar-button").textContent.charCodeAt(0) == 9664) {
        document.querySelector(".tableofcontents").style.display = "none"
        document.querySelector(".main").style.removeProperty("margin-left")
        document.querySelector(".sidebar-button").textContent = String.fromCharCode(9654)
    }
    else {
        document.querySelector(".main").style.marginLeft = "30%"
        document.querySelector(".tableofcontents").style.display = "block"
        document.querySelector(".sidebar-button").textContent = String.fromCharCode(9664)
    }
}