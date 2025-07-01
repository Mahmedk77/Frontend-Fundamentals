let pass=document.getElementById('passValue');
pass.addEventListener('input',main);
const btn=document.getElementById('btn')
btn.addEventListener('click',privacySetting)
function main(){
    let password=pass.value;
    console.log(password);
    let score=0; 
    score=lengthChecker(score,password);
    strengthChecker(score);
    
}
function privacySetting(){
    if(pass.type==='password'){
        pass.type='text';
        btn.style.color='hsl(240, 100%, 80%)';
    }
    else{
        pass.type='password';
        btn.style.color='hsl(0, 0%, 85%)';
    }
}
function lengthChecker(score,password){
    let passLen=password.length;
    if(passLen<=3){
        return score;
    }
    else if(passLen<=7){
        score=score+2;
    }
    else{
        score=score+5;
    }
    return scoreGenerator(score,password);

}
function scoreGenerator(score,password){
    const lower='abcdefghijklmnopqrstuvwxyz';
    const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers='1234567890';
    const symbols='!@#$%^&*()_+?><()-';
    let incUpper=false;
    let incLower=false;
    let incNum=false;
    let incSym=false;

    for(let i of password){
        if(upper.includes(i) && !incUpper){
            score++;
            incUpper=true;
        }
        else if(lower.includes(i) && !incLower){
            score++;
            incLower=true;
        }
        else if(numbers.includes(i) && !incNum){
            score++;
            incNum=true;
        }
        else if(symbols.includes(i) && !incSym){
            score++;
            incSym=true;
        }
    }
    return score;
}
function strengthChecker(score){
    const textIndicator=document.getElementById('textDiv')
        if(score>7){
            textIndicator.style.color='Green';
            textIndicator.textContent='The password is strong'; 

        }
        else if(score>3){
            textIndicator.style.color='yellow';
            textIndicator.textContent='The password is medium';

        }
        else{
            textIndicator.style.color='red';
            textIndicator.textContent='The password is weak';
        }
}
