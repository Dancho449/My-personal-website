const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.sidebar');
const clear = document.querySelector('.sidebar-clear');
const body = document.querySelector('.body');
const container = document.querySelector('.side-menu');

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