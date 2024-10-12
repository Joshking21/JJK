'use strict'
const button = document.querySelector('.contactButton');
const button1 = document.querySelector('.contactButton1');
const gmail = document.querySelector('.gmailContact')
const phonecon = document.querySelector('.phoneNumber')
const whatsappcon = document.querySelector('.whatsappNumber')
const contactSec = document.querySelector('.ContactSec')
const contactSec1 = document.querySelector('.ContactSec2')
const phoneSec = document.querySelector('.phoneSection')
const whatsappSec = document.querySelector('.whatsappSection')
const gmailPic = document.querySelector('.gmailPic')
const concSlide = document.querySelector('.conc')
const concSlide2 = document.querySelector('.conc2')
const stopAni = document.querySelector('.ccb')



const buttonFunction = function(){
    concSlide.style.transform= `translateX(150%)`
    button1.style.transform = `translateX(450%)`
concSlide2.style.transform = `translateX(0%)`
button.style.transform = `translateX(0%)`

}
const buttonFunction2 = function(){
    concSlide.style.transform= `translateX(0%)`
    button1.style.transform = `translateX(0%)`
concSlide2.style.transform = `translateX(-100%)`
button.style.transform = `translateX(-450%)`;
button1.classList.remove('ccb')}

/*
const buttonFunction = function(){
    button.style.display = 'none'
    button1.style.display = 'flex'
    phoneSec.style.display = 'flex'
    whatsappSec.style.display = 'flex'
    gmail.style.display= 'none'
    gmailPic.style.display = 'none'
    contactSec.style.backgroundColor = '#48636f'
    contactSec1.style.backgroundColor= '#5b8291'
}
const buttonfunction2 = function(){
    button1.style.display='none'
    button.style.display = 'flex'
    phoneSec.style.display= 'none'
    whatsappSec.style.display = 'none'
    gmail.style.display= 'flex'
    gmailPic.style.display = 'flex'
    contactSec.style.backgroundColor = '#5b8291'
    contactSec1.style.backgroundColor= '#48636f'
}*/
button.addEventListener('click', buttonFunction2)
button1.addEventListener('click', buttonFunction)