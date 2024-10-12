'use strict'
const webs = Array.from(document.querySelectorAll('.webs'))
const webPicture = document.querySelector('.webDiv')
const appPic = document.querySelector('.appdevpic')
const webPic = document.querySelector('.webdevpic')
const backPic = document.querySelector('.backenddevpic')
const appContent = document.querySelector('.appDevContents')
const webDevContent = document.querySelector('.webDevContents')
const backDevContent = document.querySelector('.backDevContents')

console.log(webs[0].style);
console.log(webPicture.offsetwidth);

let slideNumber = 0;
const slideLength = webs.length;

webs.forEach(function(s,i){
s.style.transform = `translateX( ${100*(i)}% )`
console.log(s.style.transform);
})




const nextSlide = function()
{
    
webs.forEach(function(s,i){
    const dun = Number(String(s.style.transform).slice(11,-2))
    
    
    s.style.transform = `translateX(${100 + 100*(slideNumber +i)}%)`
    console.log(s.style.transform);

})
slideNumber++
}
const next1 =  function(){appContent.style.transform=`translateX(${100*0}%)`
webDevContent.style.transform=`translateX(${100*1}%)`
backDevContent.style.transform=`translateX(${100*2}%)`}
const next2 = function(){appContent.style.transform=`translateX(${100*-1}%)`
webDevContent.style.transform=`translateX(${100*0}%)`
backDevContent.style.transform=`translateX(${100*1}%)`}
const next3 =  function(){appContent.style.transform=`translateX(${100*-2}%)`
webDevContent.style.transform=`translateX(${100*-1}%)`
backDevContent.style.transform=`translateX(${100*0}%)`}

webPic.addEventListener('click',next2)
appPic.addEventListener('click',next1)
backPic.addEventListener('click',next3)


/*
const CreateNewDiv = function(){
    if (window.innerWidth <= 375 ){
        const newDiv = document.createElement('div')
        newDiv.innerHTML = ` <ul>
        <li>
            <img src="facebook.png" class="socialPic fb" style="margin-top: -0.5rem;">
        </li>
        <li> <img src="Twitter.png" class="socialPic twi"> </li>
        <li ><img src="Linkend.png" class="socialPic link"></li>
        <li><img src="discord.png" class="socialPic dis"></li>
    </ul>`
    newDiv.className = ' socialPictures'
    document.body.appendChild(newDiv)
    }
}

window.addEventListener('resize',CreateNewDiv)*/