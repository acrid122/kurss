window.onload = () => {
    var all_main_images = document.querySelectorAll('.main_slider span')
    var main_slider = document.querySelector('.main_slider');
    var all_info = document.querySelectorAll('.info_menu');
    var big_menu = document.querySelector(".nav_2");
    var remove_but = document.querySelector(".remove-but");
    var main_name = document.querySelector(".main_name");
    var what_delete;
    remove_but.onmouseenter = function(){
        remove_but.classList.add('push-ret');
    }
    remove_but.onclick = function(){
        remove_but.classList.remove('active-ret');
        remove_but.classList.remove('push-ret');
        main_slider.classList.remove('active-non');
        big_menu.classList.remove("active-menu");
        all_info[what_delete].classList.remove('active-info-menu');
        main_slider.style.removeProperty('animation-play-state');
        main_name.classList.remove("active-main-name");
    }
    for(let i = 0; i < all_main_images.length; ++i){
        all_main_images[i].onmouseenter = function(){
            all_info[i].classList.add('active-info-menu');
            all_info[i].style.backgroundImage = 'url(' + main_slider.querySelectorAll('.main_slider span')[i].querySelector('.main_slider span img').src + ')';
            what_delete = i;
            main_slider.style.animationPlayState = "paused";
            main_slider.style.animationFillMode = "forwards";
            main_name.classList.add("active-main-name");
            main_slider.classList.add('active-non');
            big_menu.classList.add("active-menu");
            remove_but.classList.add('active-ret');
        }
    }
}