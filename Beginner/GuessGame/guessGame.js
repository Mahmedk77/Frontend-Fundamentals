const maxNum=100;
const minNum=1;
let inputNum;
let attempts=0;
const ranNum=Math.floor(Math.random()*(maxNum-minNum))+minNum;
while (true) {
    
    console.log(`the random number is ${ranNum}`);
    inputNum=window.prompt('guess the number');
    inputNum=Number(inputNum)
    if (isNaN(inputNum) ){
        window.alert('enter a valid number');
    }
    else if(inputNum > 100 || inputNum < 1){
        window.alert('enter a valid number');
    }
    else{
        attempts++;
        if(inputNum < ranNum){
            window.alert("too low!")

        }
        else if(inputNum > ranNum){
            window.alert("too high!")
        }
        else{
            window.alert(`you won in ${attempts} attempts`)
            break
        }
    }
    




}