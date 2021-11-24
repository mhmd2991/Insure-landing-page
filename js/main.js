let btn = document.querySelector(".toggle-menu");
let menu = document.querySelector("#menu");
let icon = document.querySelector(".toggle-menu i");
btn.addEventListener("click", function(e) {
    icon.classList.toggle("fa-times");
    menu.classList.toggle("active");
});