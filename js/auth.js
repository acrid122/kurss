//Перенаправление на регистрацию, если нет аккаунта
window.onload = () => {
    var need_acc = document.getElementById("no_acc_inf");
    var forget_pass = document.getElementById("forget_pass_inf");
    var login_box = document.querySelector(".login-box");
    var new_pass = document.querySelector(".new_pass");
    var sub_email = document.querySelector(".sub_email");
    var check_email = document.querySelector(".check_email");
    var sub_to_main = document.querySelector(".sub_to_main");
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!№;%:?*()_+@#$^:<>,.{}[]?/|";
    function generate_pass() {
        let result = "";
        for (let i = 0; i < 12; i++) {
            result += symbols[Math.floor(Math.random() * symbols.length)];
        }
        return result;
    }
    sub_to_main.onclick = function(){
        main_wind = window.open("main.html", "main");
    }
    need_acc.onclick = function(){
        window.location.href = "sign_up.html";
    }
    forget_pass.onclick = function(){
        login_box.style.display = "none";
        new_pass.style.display = "block";
    }
    sub_email.onclick = function(){
        let EmRe =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!EmRe.test(check_email.value)){
            alert("Вы неверно ввели почту. Попробуйте еще раз");
        }
        else{ 
            alert("Сообщение с новым паролем было отправлено Вам на почту. Ваш новый пароль " + generate_pass());
            login_box.style.display = "block";
            new_pass.style.display = "none";
        }
    }
}
