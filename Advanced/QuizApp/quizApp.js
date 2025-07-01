// DOM Elements
let options = document.querySelectorAll('.option');
let optionBank = document.getElementById('optionBank');
let question = document.getElementById('question');
const container = document.getElementById('container');
const newBtn = document.createElement('button');
const playAgain = document.createElement('button');

// Quiz Data
const questions = ['1. Which is the largest animal in the world?',
    '2. Which is the smallest country in the world?',
    '3. Which is the largest desert in the world?',
    '4. Which is the smallest continent in the world?'
];
const bank = [['Shark','Blue whale','Elephant','Giraffe'],
    ['Vatican City', 'Bhutan', 'Nepal', 'Sri Lanka'],
    ['Kalahari', 'Gobi', 'Sahara', 'Antarctica'],
    ['Asia', 'Australia', 'Arctic', 'Africa']
];
const ans = ['Blue whale','Vatican City', 'Antarctica', 'Australia'];
let score = 0;
let page = -1;

// Initialize the quiz
function start() {
    page = 0;
    score = 0;
    loadPage();
    options.forEach((element, index) => {
        element.addEventListener('click', () => {
            selection(element);
        });
    });
}

// Load the current question and options
function loadPage() {
    if (page < questions.length) {
        question.textContent = questions[page];
        options.forEach((element, index) => {
            element.textContent = bank[page][index];
            element.style.backgroundColor = 'white';
        });
    } else {
        submissionPage();
    }
}

// Handle option selection
function selection(element) {
    const correctAnswer = ans[page];
    if (element.textContent === correctAnswer) {
        element.style.backgroundColor = 'hsl(120, 100%, 95%)';
        score++;
    } else {
        element.style.backgroundColor = 'hsl(0, 100%, 75%)';
    }
    newBtn.classList.add('nextBtn');
    newBtn.textContent = 'Next';
    container.appendChild(newBtn);
    newBtn.removeEventListener('click', nextPage); // Remove any previous event listener
    newBtn.addEventListener('click', nextPage); // Add the event listener for the next page
}

// Go to the next question
function nextPage() {
    page++;
    loadPage();
    newBtn.remove(); // Remove the "Next" button after moving to the next page
}

// Display the final score
function submissionPage() {
    question.textContent = `You scored ${score} out of ${questions.length}!`;
    optionBank.remove();
    newBtn.remove();
    playAgain.classList.add('nextBtn');
    playAgain.textContent = 'Play Again';
    container.appendChild(playAgain);
    playAgain.addEventListener('click', resetQuiz);
}

// Reset the quiz to start over
function resetQuiz() {
    container.appendChild(optionBank); // Reattach the options container
    options.forEach(option => {
        option.style.backgroundColor = 'white';
    });
    page = -1;
    start(); // Restart the quiz
    playAgain.remove(); // Remove the "Play Again" button
}

// Start the quiz for the first time
start();






















// let options= document.querySelectorAll('.option');
// let optionBank=document.getElementById('optionBank');
// let question=document.getElementById('question');
// const nextBtn=document.getElementById('nextBtn');
// const container=document.getElementById('container');
// const newBtn=document.createElement('button');
// const playAgain=document.createElement('button');


// const questions=['2. Which is the smallest country in the world?',
//                 '3. Which is the largest desert in the world?',
//                 '4. Which is the smallest continent in the world?'];
// const bank=[['Vatican City','Bhutan','Nepal','Sri Lanka'],
//             ['Kalahari','Gobi','Sahara','Antarctica'],
//             ['Asia','Australia','Arctic','Africa']];
// const ans=['Vatican City','Antarctica','Australia'];
// let score=0;
// let page=-1;
// let count=-1;


// function start(){

//     options.forEach((element,index)=>{
//         element.addEventListener('click',()=>{
//         console.log(element.textContent);
//         selection(element);
//     })
// })
// }

// function selection(element){

//     if(element.textContent=='Blue whale'){
//         element.style.backgroundColor='hsl(120, 100%, 95%)';
//         score++;
//     }
//     else if(page!=-1){
//         if(element.textContent==ans[count]){
//         element.style.backgroundColor='hsl(120, 100%, 95%)';
//         score++;
//         }
//         else{
//             element.style.backgroundColor='hsl(0, 100%, 75%)';

//         }
//     }
//     else{
//         element.style.backgroundColor='hsl(0, 100%, 75%)';
//         // element[1].style.backgroundColor='hsl(120, 100%, 95%)';
        
//     }

//     newBtn.classList.add('nextBtn');
//     newBtn.textContent='Next';
//     container.appendChild(newBtn);
// }
// function nextPage(){
//     options.forEach((element)=>{
//         element.style.backgroundColor='white';
//     })
//     page++;
//     question.textContent=questions[page]; 
//     for(let i=0;i<=3;i++){
//         try{
//         options[i].textContent=bank[page][i];        
//         }
//         catch{
//             newBtn.removeEventListener('click',nextPage);
//             submissionPage();
//         }
//     }

//         count++;
// }

// newBtn.addEventListener('click',nextPage);

// function submissionPage(){
//     question.textContent=`You scored ${score} out of 4!`
//     optionBank.remove();
//     newBtn.remove();
//     playAgain.classList.add('nextBtn');
//     playAgain.textContent='Play Again';
//     container.appendChild(playAgain);

// }

// start();







// function startNew(){
//     score=0;
//     page=-1;
//     count=-1;
//     playAgain.remove();
//     options.forEach((element)=>{
//         element.classList.add('option');
//         optionBank.appendChild(element);
//     })
//     const temp=['Shark','Blue Whale','Elephant','Giraffe']
//     for(let i=0;i<=3;i++){
//         options[i].textContent=temp[i];
//     }
//     container.appendChild(optionBank);

//     start();
// }

















// options.forEach((element,index)=>{
//     element[`element${index}`]=element;
//     element.addEventListener('click',()=>{
//         console.log( element[`element${index}`]);
//         selection(element[`element${index}`])
//         nextPage(element[`element${index}`])
//         // console.log(element.textContent);
//     })
// })
// function selection(element){
//     if(element.textContent=='Blue whale'){
//         element.style.backgroundColor='black';
//     }
//     else if(page!=-1){
//         if(element.textContent==ans[count]){
//         element.style.backgroundColor='black';
//         }
//         else{
//             element.style.backgroundColor='red';

//         }
//     }
//     else{
//         element.style.backgroundColor='red';
//     }

//     newBtn.classList.add('nextBtn');
//     newBtn.textContent='Next';
//     container.appendChild(newBtn);

// }

// function nextPage(element){

// element.style.backgroundColor='white';
// console.log('clicked');
// if(page<2){
//     newBtn.addEventListener('click',()=>{
//         element.style.backgroundColor='white';
//         console.log('clicked');
//         page++;
        
//         for(let i=0;i<=3;i++){
//             options[i].textContent=bank[page][i];
//         }   
        
//         question.textContent=questions[page]; 
//         console.log('PAGE VALUE',page);
        
                
//         console.log('hello');

//     })
    
//     count++;

//         }
// else{
//     submissionPage();
// }

// }


// function submissionPage(){
//     console.log('SUBMISSION PAGE');

// }








// options.forEach((var element)=>{
//     element.addEventListener('click',()=>{
//         selection(element);
//         console.log(element.textContent);
//     })
// })
// if(element.textContent=='Blue whale'){
//     element.style.backgroundColor='black';
// }
// else if(page!=-1){
//     if(element.textContent==ans[count]){
//     element.style.backgroundColor='black';
//     }
//     else{
//         element.style.backgroundColor='red';

//     }
// }
// else{
//     element.style.backgroundColor='red';
// }

// newBtn.classList.add('nextBtn');
// newBtn.textContent='Next';
// container.appendChild(newBtn);
// console.log('hello');
// if(page<2){
   
//     newBtn.addEventListener('click',()=>{
//     element.style.backgroundColor='white';
//     console.log('clicked');
    
//     page++;
//     for(let i=0;i<=3;i++){
        
//         options[i].textContent=bank[page][i];
//     }   
   
//     question.textContent=questions[page]; 
//     console.log('PAGE VALUE',page);

    
// })
//     count++;
      
//         }

//         else{
       
//             submissionPage();
//         }
    
// function submissionPage(){
//         console.log('SUBMISSION PAGE');
        
//     }
        



























// nextBtn.addEventListener('click',nextPage)
// function nextPage(){
//     for(let i=0;i<options.length;i++){
//         options[i].textContent=bank[count][i];
//         console.log(options[i].textContent);
//         if(count==2)
//             nextBtn.removeEventListener('click',nextPage);
//     }
//     count++;

// }
// function select(count){
//     options.forEach((element)=>{
//         element.addEventListener('click',()=>{
//             const btnText=element.textContent;
//             console.log('click value',btnText);
//             console.log('count value',count);

//             if(btnText==ans[count]){
//                 alert('CONGRATS');
//                 options.forEach((element)=>{
//                     element.style.cursor='not-allowed';
//                 })
//                 optionBank.style.cursor='not-allowed';

//         }
//         })
//         options.forEach((element)=>{
//             element.style.cursor='pointer';
//         })
//         optionBank.style.cursor='default';
    
//     })
// }

