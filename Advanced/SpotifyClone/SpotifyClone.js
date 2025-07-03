const playBtn=document.querySelectorAll('.playBtn');
const artistsClass=document.querySelectorAll('.c1');
const stopBtn=document.getElementById("houseIcon");
const footer=document.getElementsByClassName('foot');
const footerPlay=document.getElementById('footerPlayBtn');
const progressBar=document.getElementById('progressBar');
const footerImage=document.getElementById('footerImage');
const footerArtist=document.getElementById('artistNameFooter');
const footerSong=document.getElementById('artistSongFooter');

let artistName='';
let start=false;
let audio=new Audio('');
let currentSrc=audio.src;
let currentElementID='';
let theElement='';
let progressBarValue=0;
let min=0;
let flag=false;

playBtn.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.id);
        console.log(currentElementID);  
            if((audio.src!==currentSrc) && (currentElementID===element.id)){
                playFunction(element);
            }
            else{
                artistName=element.nextElementSibling.innerText.split(' ').join('_');
                audio.src=`./Audio/${artistName}.mp3`;
                playBtn.forEach((element)=>element.classList.add('fa-circle-play'));
                theElement=element;
                playFunction(element);

            }
            footerImage.src=element.parentElement.firstElementChild.src;
            footerArtist.innerText=element.parentElement.children[3].innerText;
            footerSong.innerText=element.parentElement.children[2].innerText;
            footer[0].style.visibility='visible';
            currentElementID=element.id;        
    })
    })
function playFunction(element){
    if(audio.paused){
        audio.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        footerPlay.classList.remove('fa-circle-play')
        footerPlay.classList.add('fa-circle-pause');
    }
    else{
        audio.pause();
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        footerPlay.classList.remove('fa-circle-pause');
        footerPlay.classList.add('fa-circle-play');
       
    }
}
footerPlay.addEventListener('click',()=>{
    console.log(theElement)
        if((audio.paused && theElement!='')){
            audio.play();
            footerPlay.classList.remove('fa-circle-play')
            footerPlay.classList.add('fa-circle-pause');
            theElement.classList.remove('fa-circle-play');
            theElement.classList.add('fa-circle-pause');
        }
        else{
            audio.pause();
            footerPlay.classList.remove('fa-circle-pause');
            footerPlay.classList.add('fa-circle-play');

            theElement.classList.remove('fa-circle-pause');
            theElement.classList.add('fa-circle-play');
        }
    });
audio.addEventListener('timeupdate',()=>{
    progressBarValue=parseInt((audio.currentTime/audio.duration)*100);
    progressBar.value=progressBarValue;

    
    console.log(parseInt(audio.currentTime));

    console.log(audio.duration/60);
})
progressBar.addEventListener('change',()=>{
    audio.currentTime=(progressBar.value*audio.duration)/100;
})
