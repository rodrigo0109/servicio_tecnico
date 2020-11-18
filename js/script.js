document.getElementById('btn_up').addEventListener('click', scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.webkitRequestAnimationFrame(()=>{scrollUp}); 
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("btn_up");

window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}