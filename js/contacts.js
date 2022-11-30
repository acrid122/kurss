var main_bg = document.querySelector(".social-media");
var change_body_bg = document.querySelector("body");
var list_li = document.querySelectorAll("li");
var nav_menu_text = document.querySelectorAll('header nav a');
var where_find_zag = document.querySelectorAll('h1')[0];
var animate_blocks = document.querySelectorAll('.animate-blk');
var scroll_amount = offset(animate_blocks[0]);
var address = document.querySelector(".mirea-address");
var map_border = document.querySelector("iframe");
var big_menu = document.querySelector(".nav_2");
for (let i = 0; i < list_li.length; ++i){
    list_li[i].onmouseenter = function(){
        where_find_zag.style.top = "15%";
        big_menu.classList.add("active");
        main_bg.style.background = list_li[i].getAttribute('data-color');
        change_body_bg.style.background = main_bg.style.background;
        if(list_li[i].getAttribute('data-color') == "white"){
            /*
            nav_menu_text.forEach(element => {
                element.style.color = "black";
            });*/
            list_li.forEach(element => {
                let a = element.querySelector('a');
                a.style.border = "1px solid black";
            });
            where_find_zag.style.color = "black";
            address.style.color = "black";
            document.querySelectorAll('h1')[1].style.color = "black";
            main_bg.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 86%, rgba(234,67,53,1) 86% 88%, rgba(251,188,5,1) 88% 90%, rgba(52,168,83,1) 90% 92%, rgba(66,133,244,1) 92% 94%, rgba(255,255,255,1) 94% 100%)";
 
        }
        else if(list_li[i].getAttribute('data-color') == "black"){
            list_li.forEach(element => {
                let a = element.querySelector('a');
                a.style.border = "1px solid #8860D0";
            });
            map_border.style.boxShadow = "2px 2px, -2px -2px #8860D0";
            main_bg.style.background = "linear-gradient(90deg, rgb(0, 0, 0) 88%, rgb(0, 244, 255) 88% 91%, rgb(255, 0, 193) 91% 94%, rgb(0,0,0) 94% 100%)";
        }
        else if(list_li[i].getAttribute('data-color') == "#f4032b" || list_li[i].getAttribute('data-color') == "#036bf4"){
            list_li.forEach(element => {
                let a = element.querySelector('a');
                a.style.border = "1px solid white";
            });
        }
    }
    list_li[i].onmouseleave = function(){
        big_menu.classList.remove("active");
        where_find_zag.style.top = "25%";
        main_bg.style.background = "#5680E9";
        nav_menu_text.forEach(element => {
            element.style.color = "white";
        });
        list_li.forEach(element => {
            let a = element.querySelector('a');
            a.style.border = "1px solid #C1C8E4";
        });
        change_body_bg.style.background = "#5680E9";
        where_find_zag.style.color = "white";
        address.style.color = "white";
        map_border.style.boxShadow = "2px 2px, -2px -2px black";
        document.querySelectorAll('h1')[1].style.color = "white";
    }
}
for(let i = 0; i < animate_blocks.length; ++i){
    window.addEventListener('scroll', animation_blk);
    function animation_blk(){
        let animate_block = animate_blocks[i];
        let block_height = animate_block.offsetHeight;
        let block_height_offSet = offset(animate_block);
        let point = window.innerHeight - block_height / 5;
        let list_li_left = document.querySelectorAll('.animate-left li');
        let count = 2;
        if((scrollY >  block_height_offSet - point) && (scrollY < block_height_offSet - 2 * block_height)){
            animate_block.classList.add('animate-active');
        }
        else{
             animate_block.classList.remove('animate-active');
        }
        if(scrollY > block_height_offSet - block_height){
            for(let i = 0; i < list_li_left.length; ++i){
                delete list_li_left[i].dataset.text;
            }
        }
        else{

            for(let i = 0; i < list_li_left.length; ++i){
                switch (i){
                    case 0:
                        list_li_left[i].dataset.text = "YouTube";
                        break;
                    case 1:
                        list_li_left[i].dataset.text  = "VK";
                        break;
                    case 2:
                        list_li_left[i].dataset.text  = "Google";
                        break;
                    case 3:
                        list_li_left[i].dataset.text  = "TikTok";
                        break
                }
            }
        }
    }
}
function offset(elem){
    return elem.getBoundingClientRect().top + (window.scrollY || document.documentElement.scrollTop);
}
animation_blk();
var set_new_color_a = document.querySelectorAll('.nav_1 ul li a');
set_new_color_a.forEach(elems => {elems.addEventListener('mouseenter', function(event){
    event.target.style.color = "#8860D0";
})});
VanillaTilt.init(document.querySelectorAll("li a"), {
    max: 40,
    speed: 800
});