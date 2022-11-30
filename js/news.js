window.onload = () => {
    var all_images = document.querySelectorAll('.news_pic');
    var next_button = document.querySelector(".slider-next");
    var prev_button = document.querySelector(".slider-prev");
    var slider = document.querySelector('.slider');
    var roll_slider = document.querySelector('.slider-line');
    var big_menu = document.querySelector(".nav_2");
    var small_menu = document.querySelector(".small_nav");
    var news = document.getElementsByClassName('news');
    var body = document.querySelector('body');
    var mini_news = document.querySelectorAll('.news_h');
    var menu_info = document.querySelector('.menu_info');
    var name_ate = document.querySelectorAll('.news p');
    var slider_width;
    var return_but = document.querySelector('.return-but');
    /*Текущая картинка*/
    var count = 0;
    var roll_width = 0;
    var tmp_height;
    var fl = false;
    function init(){
        roll_width = slider.offsetWidth;
        roll_slider.style.width = roll_width * all_images.length + 'px';
        all_images.forEach(item => {
            item.style.width = roll_width + 'px';
            item.style.height = 'auto';
        });
        roll();
    }
    init();
    window.addEventListener('resize', init);
    /*Click*/
    prev_button.addEventListener('click', function(){
        if(fl == true){
            news[count].classList.remove('active-news');
        }
        else{
            mini_news[count].classList.remove('active-h');
        }
        --count;
        if(count < 0){
            if(fl == true){
                news[0].classList.remove('active-news');
            }
            count = all_images.length - 1;
            if(fl == true){
                news[count].classList.add('active-news')
            }
        }
        else{
            if(fl == true){
                news[count].classList.add('active-news');
            }
        }
        if(fl == true){
            let slice_name = all_images[count].src.slice(0, all_images[count].src.lastIndexOf('.'));
            init();
            body.style.backgroundImage = 'url(' + slice_name + '_bl.jpg)';
        }
        roll();
        if(fl == false){
            mini_news[count].classList.add('active-h');
            if(count == 1){
                mini_news[count].style.left = "20%";
            }
            else if(count == 2){
                mini_news[count].style.left = "40%";
            }
            else if(count == 3){
                mini_news[count].style.left = "60%";
            }
            else if(count == 4){
                mini_news[count].style.left = "80%";
            }
            else if(count == 0){
                mini_news[count].style.left = "0%";
            }
        }
    })
    next_button.addEventListener('click', function(){
        if(fl == true){
            news[count].classList.remove('active-news');
        }
        else{
            if(count == 0){
                mini_news[count].classList.remove('h-init');
            }
            mini_news[count].classList.remove('active-h');
        }
        ++count;
        if(count == all_images.length){
            if(fl == true){
                news[all_images.length - 1].classList.remove('active-news');
            }
            count = 0;
            if(fl == true){
                news[count].classList.add('active-news');
            }
        }
        else{
            if(fl == true){
                news[count].classList.add('active-news');
            }
        }
        if(fl == true){
            let slice_name = all_images[count].src.slice(0, all_images[count].src.lastIndexOf('.'));
            init();
            body.style.backgroundImage = 'url(' + slice_name + '_bl.jpg)';
        }
        roll();
        if(fl == false){
            mini_news[count].classList.add('active-h');
            if(count == 1){
                mini_news[count].style.left = "20%";
            }
            else if(count == 2){
                mini_news[count].style.left = "40%";
            }
            else if(count == 3){
                mini_news[count].style.left = "60%";
            }
            else if(count == 4){
                mini_news[count].style.left = "80%";
            }
            else if(count == 0){
                mini_news[count].style.left = "0%";
            }
        }
    })
    /*Прокрутка*/
    function roll(){
        roll_slider.style.transform = 'translate(-' + count * roll_width + 'px)';
    }
    return_but.onclick = function(){
        return_but.classList.remove('active-ret');
        return_but.classList.remove('push-ret');
        slider.classList.remove('active');
        menu_info.classList.remove('active-m-info');
        big_menu.classList.remove("active-menu");
        small_menu.classList.remove("active-sm-menu");
        news[count].classList.remove('active-news');
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#5680E9";
        init();
        fl = false;
    }

    /*Hover effect*/
    all_images.forEach(elements => {elements.addEventListener('mouseenter', function(){
        if(fl == false){
            menu_info.classList.add('active-m-info');
            news[count].classList.add('active-news');
            let slice_name = elements.src.slice(0, elements.src.lastIndexOf('.'));
            body.style.backgroundImage = 'url(' + slice_name + '_bl.jpg)';
            return_but.classList.add('active-ret');
            slider.classList.add('active');
            init();
            mini_news.forEach(elements =>{
                if(elements.classList.contains('active-h')){
                    elements.classList.remove('active-h');
                }
            });
            big_menu.classList.add("active-menu");
            small_menu.classList.add("active-sm-menu");
            fl = true;
        }
    })})
    return_but.onmouseenter = function(){
        return_but.classList.add('push-ret');
    }
    //Truncate
    function truncate(str, maxlength, index) {
        if (str.length > maxlength){
            str = str.slice(0, maxlength - 1 ) + "...";
            let url_js = document.createElement('a');
            switch(index){
                case 0:
                    url_js.href = "https://cointelegraph.com/news/miamis-next-big-web3-summit-announces-packed-agenda-featuring-high-profile-speakers";
                    break;
                case 1:
                    url_js.href  = "https://cointelegraph.com/news/proof-of-reserves-can-reserve-audits-avoid-another-ftx-like-moment";
                    break;
                case 2:
                    url_js.href  = "https://cointelegraph.com/news/nickel-digital-metaplex-and-others-continue-to-feel-the-impact-of-ftx-collapse";
                    break;
                case 3:
                    url_js.href  = "https://cointelegraph.com/news/banks-still-show-interest-in-digital-assets-and-defi-amid-market-chaos";
                    break;
                case 4:
                    url_js.href  = "https://cointelegraph.com/news/crypto-self-custody-a-fundamental-human-right-but-not-risk-free-community";
                    break;
            }
            url_js.appendChild(document.createTextNode('See more'));
            url_js.style.color = "black";
            url_js.style.textTransform = "uppercase";
            news[index].appendChild(url_js);
            return str;
        }
        return str;
    }
    for (i=0; i < name_ate.length; i++){
        name_ate[i].textContent = truncate(name_ate[i].textContent,  600, i);
        init();
    }
    mini_news.forEach(elements => {
        elements.style.width = 100 / all_images.length + "%";
    });
    mini_news[count].classList.add('active-h');
}
