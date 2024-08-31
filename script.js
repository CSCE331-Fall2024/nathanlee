let coin = document.querySelector(".coin");
let flip = document.querySelector("#flip-button");
let theme = document.querySelector("link#theme");
let x = false; // Keeps track of the current stylesheet

flip.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(i) {

        setTimeout(function(){
            coin.style.animation = "headspin 3s forwards";
        }, 100);

        // Switch to style2.css if heads
        setTimeout(function(){
        if (!x) {
            theme.href = "style2.css";
            x = true;
        }
        }, 3000);
    } 
    
    else {

        setTimeout(function(){
            coin.style.animation = "tailspin 3s forwards";
        }, 100);
        

        // Switch to style.css if tails
        setTimeout(function(){
        if (x) {
            theme.href = "style.css";
            x = false;
        }
        }, 3000);

    }
    
    //disables the button as it spins
    disable();
});

function disable(){
    flip.disabled = true;
    setTimeout(function(){ flip.disabled = false; }, 3000);
}

document.getElementById("navbutton").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
        
        sidebar.classList.remove("open");

    } 
    else {
        sidebar.classList.add("open");
    }
};

document.getElementById("navbutton").onclick = function() {
    var nav = document.querySelector("nav.nav");
    nav.classList.toggle("close");
};

