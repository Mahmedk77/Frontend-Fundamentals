
function diceRoll(){
    let inputValue=document.getElementById('myValue').value
    let dispRes=document.getElementById('dispRes')
    let dispImg=document.getElementById('dispImg')

    const values=[];
    const images=[];

    for( let i=0 ; i<inputValue ; i++ ){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        
        images.push(`<img src="./utils/${value}.png" >`);
    }
    console.log(values)
    dispRes.textContent = ` dice ${values.join(', ')}`;
    dispImg.innerHTML = images.join(' ');
}
