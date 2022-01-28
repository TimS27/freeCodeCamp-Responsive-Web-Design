let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

btn5.onclick = function()   {
    let arr = [btn1.innerHTML, btn2.innerHTML, btn3.innerHTML, btn4.innerHTML, btn6.innerHTML, btn7.innerHTML, btn8.innerHTML, btn9.innerHTML];
    
    btn1.innerHTML = arr[3];
    btn2.innerHTML = arr[0];
    btn3.innerHTML = arr[1];
    btn6.innerHTML = arr[2];
    btn9.innerHTML = arr[4];
    btn8.innerHTML = arr[7];
    btn7.innerHTML = arr[6]
    btn4.innerHTML = arr[5];
};
