const container=document.querySelector('section');
let blocks=document.querySelectorAll('.blocks');
const resetBtn=document.getElementById('reset');
const textInfo=document.getElementById('info');
let turn='X';
let isStarted=false;
let hasWon=false;
const changeTurn=()=>{
    return turn=='X'?'0':'X';
}
function main(){
    takeTurn();
}
function takeTurn(){
    Array.from(blocks).forEach((element)=>{
        element.addEventListener('click',()=>{
            if((element.innerText=='' && isStarted) && (!hasWon)){
                element.innerText=turn;
                turn=changeTurn();
                textInfo.innerText=`Turn for ${turn}`;
                winCheck();


            }
        })
    })
    
}
function winCheck(){
    const winPos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ];
        winPos.forEach((e)=>{
            const [a,b,c]=e;
            // console.log(blocks[e[0]].innerText);
            if(
                (blocks[a].innerText===blocks[b].innerText && 
                blocks[c].innerText===blocks[a].innerText) &&
                (blocks[a].innerText != '')
            ){
                winHighLight(a,b,c);
                // blocks[e[0]].style.backgroundColor='hsl(0, 100%, 88%)';
                // blocks[e[1]].style.backgroundColor='hsl(0, 100%, 88%)';
                // blocks[e[2]].style.backgroundColor='hsl(0, 100%, 88%)';

                hasWon=true;
               return textInfo.innerText=`${blocks[e[0]].innerText} has won` ;
            }

        })
}
function winHighLight(a,b,c){
    [a,b,c].forEach((e)=>{
        blocks[e].style.backgroundColor='hsl(0, 100%, 88%)';
    })
}
resetBtn.addEventListener('click',()=>{
    isStarted=true;
    hasWon=false;
    console.log(isStarted,2)
    blocks.forEach(element=>{        
        element.innerText=''
        turn='X';
        textInfo.innerText=`Turn for ${turn}`;
        element.style.backgroundColor='#ece1a9';
    }
)
})
main();

// let arr=[['a','b','c'],['d','e','f'],['g','h','i']];
// arr.forEach((element)=>{
//         console.log(element[0]);
// })