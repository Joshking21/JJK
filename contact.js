'use strict';
const mailSlide = document.querySelector('.c2')
const mailClick = document.querySelector('.emailDiv')
const backButton = document.querySelector('.backImg')

const mailSlider = function(){
    mailSlide.style.transform=`translateX(${-110}%)`
}
const backSlide = function(){
        mailSlide.style.transform=`translateX(${110}%)`}


       
        mailClick.addEventListener('click', mailSlider)
        backButton.addEventListener('click', backSlide )





const windowWidth = window.innerWidth;
if (windowWidth <= 425){ 
  
     const mailSliders = function(){
         mailSlide.style.transform=`translateX(${-314}%)`
      console.log('kdk');
    }
    mailClick.addEventListener('click', mailSliders)
}

console.log("mes");
console.log(windowWidth);
console.log(window);


const balls = document.querySelectorAll(
    '.balls'
)
const firstBall = document.querySelector('.rollingBall1')

const randomNumber = Math.trunc((Math.random()*100))*100
const js = function(){
    const randomNumber2 = Math.trunc((Math.random()*100))*10
}
// let randomNumber2 = Math.trunc((Math.random(window.innerHeight)*100))*10

const randomNumber2 = Math.trunc((Math.random()*window.innerHeight-96) +1)

// if (randomNumber2 > window.innerHeight){
// randomNumber2 = Math.trunc((Math.random()*100))*10

// }
console.log(randomNumber2);
// balls.forEach(function (el){
//     const randomNumber = Math.trunc((Math.random()*100))
    
//     const randomNumber2 = Math.trunc((Math.random()*100))
//     el.style.transform = `translate(${randomNumber}rem,${randomNumber2}rem)`
//     console.log(randomNumber);
//     console.log(randomNumber2);
// console.log(el.getBoundingClientRect().top);

// })
// console.log(firstBall.getBoundingClientRect());
// firstBall.addEventListener('change', function(){
//     console.log('w')
// })
const windows = windowWidth;
console.log(windows);

// console.log(firstBall.getBoundingClientRect());
// console.log(window.innerHeight);






// for (let i = 0; i < window.innerHeight-96; i++){
//     firstBall.style.transform = `translateY(${i}px)`;
//     console.log(i);
//     }



// console.log(firstBall.getBoundingClientRect().left, firstBall.getBoundingClientRect().top);
// firstBall.style.backgroundColor ='red';
// console.log(firstBall.getBoundingClientRect());


// const observer = new MutationObserver(
//     () => {console.log('divMoved')}
// ); 

// observer.observe(firstBall,{
//     attributes: true,
//     attributeFilter: [`style`]
// });
// for (let i){}


// // console.log(firstballs);
// const randomx =randomNumber
// let kkkk = 5000
// console.log(randomx);
// const testing =  function(xas){

// for (let i = 0; i < randomNumber; i++){
//     if(i <= windowWidth-96){
//         firstBall.style.transform = `translateX(${i}px ) translateY(${randomNumber2}px)`;
//             }
//         }
//     }
//     testing()

// console.log(xas)

//     setTimeout(testing(4), 144)
// }

// testing(

// const mainBallDiv = document.querySelector(".ballsMainDiv")

// mainBallDiv.style.backgroundColor="#000000";
// console.log('green');
// function movingSidewaysDiv(){
//     // mainBallDiv.style.transform='translateX(1rem)';
//     mainBallDiv.style.backgroundColor="#542300";
//     console.log('yellow');
// }
// movingSidewaysDiv()



const telephonefunction = document.querySelector('.telephoneDiv');
telephonefunction.addEventListener('click', function(){
    window.location.href = 'tel: +23490473130'
})