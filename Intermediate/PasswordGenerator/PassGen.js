const displayBar=document.getElementById('inputId');
const btn=document.getElementById('myBtn');


function initialData(){
    let displayText='';
    let upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChar='abcdefghijklmnopqrstuvwxyz';
    let numChar='1234567890';
    let specialChar='!@#$%^&*()_+?~';
    let newChar=upperChar+lowerChar+numChar+specialChar;
    working(newChar,displayText,upperChar,lowerChar,numChar,specialChar)

}
function working(newChar,displayText,upperChar,lowerChar,numChar,specialChar){
    displayText+=upperChar[Math.floor(Math.random()*(upperChar.length))];
    displayText+=lowerChar[Math.floor(Math.random()*(lowerChar.length))];
    displayText+=numChar[Math.floor(Math.random()*(numChar.length))];
    displayText+=specialChar[Math.floor(Math.random()*(specialChar.length))];


    for(let i=displayText.length;i<12;i++){
        let randomIndex=Math.floor(Math.random()*(newChar.length));
        displayText+=newChar[randomIndex];
    }

    displayText= displayText.split('').sort(()=>Math.random()-0.5).join('');
    displayBar.value=displayText;
}

