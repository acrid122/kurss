window.onload = () => {
    function isEmpty(strIn)
    {
        if (strIn === undefined)
        {
            return true;
        }
        else if(strIn == null)
        {
            return true;
        }
        else if(strIn == "")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function generate_word() {
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += symbols[Math.floor(Math.random() * symbols.length)];
        }
        return result;
    }
    function set_old_color_on_box(){
        let form_change = document.getElementsByClassName('login-box')[0];
        form_change.classList.remove('login-box-ch');
        window.location.href = "main.html";
    }
    function change_percent(){
        let amount_perc = document.getElementsByClassName('percent')[0];
        let amount = 0;
        let all_inputs = document.querySelectorAll('input');
        let strip_progress = document.getElementById('progress-bar');
        let strip_width = strip_progress.offsetWidth;
        for(let i = 0; i < all_inputs.length; ++i){
            if(!isEmpty(all_inputs[i].value)){
                amount += 33;
                strip_progress.style.width = all_inputs[i].offsetWidth * amount / 100 + "px";
                strip_progress.classList.remove('progress-bar-active');
            }
        }
        if (amount == 99){
            ++amount;
            strip_progress.style.width = all_inputs[0].offsetWidth + "px";
            strip_progress.classList.add('progress-bar-active');
        }
        if (amount == 0){
            strip_progress.style.width = all_inputs[0].offsetWidth * amount / 100  + "px";
        }
        amount_perc.textContent = amount + "%";
    }
    function change_auth_form_color(){
        let sign_up_text = document.getElementById('sign-up-text');
        sign_up_text.style.color = "black";
        sign_up_text.textContent = "Ваша форма отправлена!";
        let form_change = document.getElementsByClassName('login-box')[0];
        form_change.classList.add('login-box-ch');
        setTimeout(set_old_color_on_box, 2000);
        let all_labels = document.querySelectorAll('label');
        for(let i = 0; i < all_labels.length; ++i){
            all_labels[i].remove();
        }
        let all_inputs = document.querySelectorAll('input');
        for(let i = 0; i < all_inputs.length; ++i){
            all_inputs[i].remove();
        }
        let submit_but = document.getElementById('submit_1');
        submit_but.remove();
        let amount_perc = document.getElementsByClassName('percent')[0];
        amount_perc.remove();
    }

    //Main
    var send_form = document.getElementById('submit_1');
    send_form.onclick = function(){
        let kapcha = generate_word();
        let result = prompt('Введите символы ' + kapcha);
        if (result === kapcha) {}
        else{
            if (isEmpty(result)) {
                alert('Вы ничего не ввели, попробуйте еще раз');
            }
            let num1, num2;
            do {
                num1 = Math.ceil(Math.random() * 10);
                num2 = Math.ceil(Math.random() * 10);
                result = prompt('Вычислите сумму чисел ' + num1 + ' + ' + num2);
                if (isEmpty(result)){
                    alert('Вы ничего не ввели, попробуйте еще раз');
                }
                result = parseInt(result);
            } while (result != num1 + num2);
        }
        change_auth_form_color();
    }
    setInterval(change_percent, 100);
}
