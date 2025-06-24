const generate = document.getElementById('mybtn-1');
const display = document.getElementById('mydisplay');
let randomNum=0;
generate.onclick = function(){
    randomNum = Math.floor(Math.random()*(6))+1;
    display.textContent = randomNum;

}