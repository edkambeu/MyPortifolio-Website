//Open and Close Menu Bar  
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");
const menuList = document.getElementById("menu-open-list");
const navList = document.getElementById("nav-bar-list")
openIcon.addEventListener("click",
function(){
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
    menuList.style.display = "block";
    navList.style.height = "180px"
})

closeIcon.addEventListener("click",
function (){
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    menuList.style.display = "none";
    navList.style.height = "180px"
})