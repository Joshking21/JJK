'use strict'

const facebookButton = document.querySelector('.Facebook')

const qr = document.querySelector('.QRSec')
const instagramButton = document.querySelector('.Instagram ')
const twitterButton = document.querySelector('.Twitter')
const linkendButton = document.querySelector('.Linkend')
const socialSec = document.querySelectorAll('.Soctext')
const profileLink = document.querySelector('.pro')
const expertiseLink = document.querySelector('.ex')
const portfolioLink = document.querySelector('.port')
const contactLink = document.querySelector('.con')
const sections = document.querySelectorAll('.sections')
const profileSection = document.querySelectorAll('.sections')
const linkChangedDisplay = document.querySelectorAll('.lin')
const linkChangedDisplayArray = Array.from(linkChangedDisplay)

const profileLink1 = document.getElementById('pro')

const expertiseLink1 = document.getElementById('ex')
const portfolioLink1 = document.getElementById('port')
const contactLink1 = document.getElementById('con')

console.log(sections);





  

console.log(profileLink);
console.log(socialSec);


// Profile Changing code
const socialSecArray = Array.from(socialSec)
const sectionsArray = Array.from(sections);
console.log(sectionsArray[0].classList[0]);
console.log(sectionsArray.classList);

console.log(socialSecArray);

const links = Array.from(document.querySelectorAll('a'))



console.log(sectionsArray[0].classList[0]);

const changeDisplay = function(){
   sectionsArray.forEach(function(element,index){  
      const changeButton = document.querySelector(`.${element.classList[0]}`) 
      changeButton.style.display='none'
      console.log(element.classList);
   
   
document.querySelector(`.${sectionsArray[0].classList[0]}`).style.display = 'flex'
document.querySelector('.body2').style.backgroundColor='#5b8291'
})}

const changeDisplay4 = function(){
   sectionsArray.forEach(function(element,index){  
      const changeButton = document.querySelector(`.${element.classList[0]}`) 
       changeButton.style.display= 'none'
      console.log('josh');})
      document.querySelector(`.${sectionsArray[1].classList[0]}`).style.display = 'flex'
      document.querySelector('.body2').style.backgroundColor='#5b8291'  
      links.forEach(function(e,i){
         e.style.color='#2e424d'
      })
      changeColors()
   }
   const changeDisplay2 = function(){
      sectionsArray.forEach(function(element,index){  
            const changeButton = document.querySelector(`.${element.classList[0]}`) 
             changeButton.style.display= 'none'
            console.log('josh');})
            document.querySelector(`.${sectionsArray[3].classList[0]}`).style.display = 'flex'
            document.querySelector('.body2').style.backgroundColor='#5b8291'  
            links.forEach(function(e,i){
               e.style.color='#2e424d'
            })
   }

   const changeDisplay3 = function(){
  
      sectionsArray.forEach(function(element,index){  
         const changeButton = document.querySelector(`.${element.classList[0]}`) 
          changeButton.style.display= 'none'
         console.log(element.classList[0]);})
         document.querySelector(`.${sectionsArray[2].classList[0]}`).style.display = 'inline-flex'
         document.querySelector('.body2').style.backgroundColor='#5b8291'
         links.forEach(function(e,i){
            e.style.color='#2e424d'
         })

        

}
console.log(sectionsArray[1]);
      
      const changeDisplay5 = function(){
         sectionsArray.forEach(function(element,index){  
            const changeButton = document.querySelector(`.${element.classList[0]}`) 
             changeButton.style.display= 'none'

            console.log('josh');})
            document.querySelector(`.${sectionsArray[4].classList[0]}`).style.display = 'flex';
            document.querySelector('.body2').style.backgroundColor='#5b8291'
            changeColors()
         }



console.log(sectionsArray[2].style);
        
profileLink.addEventListener('click', changeDisplay)
profileLink1.addEventListener('click', changeDisplay)


expertiseLink.addEventListener('click', changeDisplay2)
expertiseLink1.addEventListener('click', changeDisplay2)

contactLink.addEventListener('click',changeDisplay3)
contactLink1.addEventListener('click',changeDisplay3)

portfolioLink.addEventListener('click',changeDisplay4)

portfolioLink1.addEventListener('click',changeDisplay4)







const slide = Array.from(document.querySelectorAll('.slide'))
console.log(slide);
console.log(slide[0]);



 



















const text = 'Front-End Developer';
const text2 = ''
const textArray = Array.from(text)
console.log(textArray);

const typeWriter = document.querySelector('.web')
console.log(typeWriter);
let i=0;

let typeWriterTextContents= typeWriter.textContent='';
console.log(typeWriterTextContents);
 const type = function(){
   
  typeWriterTextContents = typeWriter.textContent +=text[i];
if( i >= 19){
typeWriter.textContent = '';
i=0;
} else{ i++}

setTimeout(type  ,250)

}



type()



text[19]
