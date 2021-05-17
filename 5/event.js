'use strict';

function sayHi(name){
    console.log('Hi ${name}'); 
}  

const button =document.querySelector('.btn');
button.onclick=function(){
    console.log('button click');
    console.log('button click 2');
};

//3.addEventListener 메서트 활용
button.addEventListener('click',function(){
    console.log('button click[1]');
});

const mouseOver =() => console.log('mousover');
button.addEventListener('mouseover',mouseOver);

//removeEventListener
button.removeEventListener('mouseover',mouseOver);

//이벤트 객체
const msg =document.querySelector('.msg');

const showCoords = (e) => msg.textContent= `x: ${e.clientX} y: ${e.clientY}`;

document.onclick =showCoords;
