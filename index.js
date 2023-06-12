const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.sidebar');
const clear = document.querySelector('.sidebar-clear');
const body = document.querySelector('.body');
const container = document.querySelector('.side-menu');
const icon2 = document.querySelector('.light-dark2');
const ham = document.querySelector('.ham');

btn.addEventListener('click', function(){
    menu.style.width = "clamp(180px, 27%, 360px)"
    container.style.width = "100%"
})

clear.addEventListener('click', function(){
    menu.style.width = "0"
    container.style.width = "0"
})

window.addEventListener('click', function(e){
    if(e.target === container){
        menu.style.width = "0"
        container.style.width = "0"
    }
})

icon2.addEventListener('click', function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon2.src = "./images/sun.PNG"
        ham.src = "./images/menubar-light.png"
    }else{
        icon2.src = "./images/moon.PNG"
        ham.src = "./images/menubar-light.png"
    }
})