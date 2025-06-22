const display=document.getElementById('display');
// const value=document.getElementById('values')
function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value=" ";
}

function calculate(){
try{
    display.value=eval(display.value)
    if(display.value=='Infinity')
        throw new Error();

}
catch(error){
    display.value='Error'
    setTimeout(clearDisplay,1000)
}
}