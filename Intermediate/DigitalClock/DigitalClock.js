const displayText=document.getElementById('displayText')

function updateClock(){
    let date = new Date();
    let hours=date.getHours();
    let med= hours >=12 ? 'PM' : 'AM';
    hours=hours%12||12; //using OR is hours%12==0, as 0 so it means false, it goes to right side (12)
    //'0' happens at noon and morning
    hours=hours.toString().padStart(2,'0');

    let mins=date.getMinutes().toString().padStart(2,0); //to add the 00 format to string
    let secs=date.getSeconds().toString().padStart(2,0);
    displayText.textContent=`${hours}:${mins}:${secs} ${med}`;

}
updateClock();
setInterval(updateClock,1000)//calls infinitely after the delay i.e 1000ms