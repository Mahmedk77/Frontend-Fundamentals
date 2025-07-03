const textInput=document.getElementById('textInput');
const addBtn=document.getElementById('addBtn');
const completedBtn=document.getElementById('completedBtn');
const displayText=document.getElementById('displayText');
const clearBtn=document.getElementById('clearBtn');
let repDiv=document.getElementsByClassName('repetitive-div')
let block2=document.getElementsByClassName('block-2')

let count=0;
function valuePick(){
    let str='';
    str += textInput.value;
    valueDisplay(str);
    textInput.value='';
}
function valueDisplay(str){
   
    if(str!=''){
            console.log('hello')
            let newEntry=document.createElement('div');
            newEntry.classList.add('repetitive-div');

            const newBtn=document.createElement('button');
            newBtn.classList.add('completedBtn');
            newEntry.appendChild(newBtn)

            const newPara=document.createElement('p');
            newPara.classList.add('displayText');
            newEntry.appendChild(newPara)

            const newBtn2=document.createElement('button');
            newBtn2.textContent='⨯';
            newBtn2.classList.add('clearBtn');

            newEntry.appendChild(newBtn2)
            block2[0].appendChild(newEntry)

            newPara.textContent=str;

            valueRemove(newEntry,newBtn2);
            valueCompleted(newPara,newBtn)
    }
}
function valueRemove(newEntry,newBtn2){

    newBtn2.addEventListener('click',()=>{
        newEntry.remove();
    })
}

function valueCompleted(newPara,newBtn){

    let clicked=false;

    newPara.addEventListener('click',()=>{

        if(!clicked){
        newPara.style.textDecoration= 'line-through';
        newBtn.style.backgroundColor='#ff643b';
        newBtn.style.color='white';
        newBtn.style.border='none';
        newBtn.style.textAlign='center';
        newBtn.textContent='✓';
        clicked=true;
        
    }else{
        clicked=false;
        newPara.style.textDecoration= 'none';
        newBtn.style.backgroundColor='#fefefe';
        newBtn.style.textContent='';
        newBtn.style.border='2.1px solid hsl(200, 8%, 80%)';
    }

})
}