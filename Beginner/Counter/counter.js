const incBtn= document.getElementById('mybtn-1'); //const==> bc we dont want to change them later
const resetBtn= document.getElementById('mybtn-2');
const decBtn= document.getElementById('mybtn-3');
const counter= document.getElementById('myVar');
let number=0; //our counter


document.getElementById("mybtn-1").onclick = function() // for the func to be performed when clicked
{
    number++; //concerned operation
    document.getElementById('myVar').textContent = number; //to pass the value of number to our div where it will be shown 

}
resetBtn.onclick= function(){
    number=0;
    counter.textContent=number
    
}
decBtn.onclick= function(){
    number--;
    counter.textContent=number
    
}


