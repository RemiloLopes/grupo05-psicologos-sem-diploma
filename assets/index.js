//NAVBAR MOBILE
function showNav(){
    let navbar = document.getElementById("mobile-nav");
    if (navbar.classList.contains("shown-nav")) {
        setTimeout(function() {
            navbar.style.right = -50 + "vw";
        }, 20);
        setTimeout(function() {
            navbar.classList.remove("shown-nav");
        }, 100);
    }
    else {
        navbar.classList.add("shown-nav")
        setTimeout(function() {
            navbar.style.right = 0 + "vw";
        }, 20);
    }
}