const displayRes=document.getElementById('resultDisplay');
const playerChoice=document.getElementById('playerDisplay');
const compChoice=document.getElementById('computerDisplay');
const playerScore=document.getElementById('playerScore');
const compScore=document.getElementById('computerScore');
let player=0;
let computer=0;


function playGame(pChoice){
    console.log(pChoice);
    const list=['rock','paper','scissors'];
    let cChoice=list[Math.floor(Math.random()*3)];
    playerChoice.textContent=`Player: ${pChoice}`;
    compChoice.textContent=`Computer: ${cChoice}`;
    calculations(pChoice,cChoice);
}

function calculations(pChoice,cChoice){
    displayRes.classList.remove('greenclass','redclass');
    if (pChoice===cChoice){
        displayRes.textContent=`IT'S A TIE!`
    }
    else if(
        (pChoice==='rock' && cChoice==='scissors') ||
        (pChoice==='paper' && cChoice==='rock') ||
        (pChoice==='scissors' && cChoice==='paper')
    ){
        displayRes.classList.add('greenclass');
        player += 1;
        displayRes.textContent = 'YOU WON';
        playerScore.textContent=`Player Score: ${player}`;
        
    }
    else {
        displayRes.classList.add('redclass');
        computer += 1;
        displayRes.textContent = 'COMPUTER WON';
        compScore.textContent=`Computer Score: ${computer}`;
        
    }
    
    
    

}