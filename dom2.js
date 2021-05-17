'use strict';

//innerHTML
const elem=document.textContent.getElementById('greeting');
console.log(elem.innerHTML);

elem.innerHTML='Hi<span>there!</span>';
console.log(elem.innerHTML);

const fruits =document.getElementById('fruits');

//노드 삽입

fruits.innerHTML += '<li class="banana">Banana</li>';

//노드 ㅡ교체
fruits.innerHTML='<li class="orange">Orange</li>';

//노드 삭제
fruits.innerHTML='';

//insertAdjacentHTML
const text =documet .getElementById('text');
text.insertAdjacentHTML('beforebegin','<p>beforebegin</p>');
text.insertAdjacentHTML('afterbegin','<p>afterbegin</p>');
text.insertAdjacentHTML('beforeend','<p>beforeend</p>');
text.insertAdjacentHTML('afterend','<p>afterend</p>');

console.clear();
//노드 생성 및 추가

const li=document.createElement('li');
const textNode=document.createTextNode('Apple');
li.appendChild(textNode);
console.log(li);
fruits.appendChild(li);

//여러개의 노드 생성 및 추가
['One','Two','Three'].forEach(text =>{
    const li=document.createElement('li');
    const textNode=document.createTextNode(text);
    li.appendChild(textNode);
    numbers.appendChild(li);
});

//비효율적 -> dom 트리를 여러번 갱신
//해결 :컨테이너 요소에 dom 에 삽입할 노드를 추가하고 , 그 컨테이너 요솔ㄹ 기존 노드의 자식노드로 추가

const container =document.createElement('div');
['Four','Five','Six'].forEach(text =>{
    const li=document.createElement('li');
    const textNode=document.createTextNode(text);
    li.appendChild(textNode);
    container.appendChild(li);
});
numbers.appendChild(container);

//DocumentFragment

const languages =document.getElementById('languages');
const fragment =document.createDocumentFragment();
['Python','Java','C'].forEach(text =>{
    const li=document.createElement('li');
    const textNode=document.createTextNode(text);
    li.appendChild(textNode);
    container.appendChild(li);
});

languages.appendChild(fragment);
console.clear();

//노드 삽입
//1.appendChild
//2.insertBefore
{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode('Peach'));
    fruits.insertBefore(li,fruits,lastElementChild);
}

//노드 이동
const [Python,java,]=languages.children;
languages.appendChild(Python);
languages.insertBefore(java,languages.lastElementChild);

//노드 복사
const peach=fruits.firstElementChild;

const shallowClone=peach.cloneNode();
shallowClone.textContent='Mango';
fruits.appendChild(shallowClone);
const deepClone = fruits.cloneNode(true);
fruits.appendChild(deepClone);

//노드 교체
const newChild=document.createElement('li');
newChild.textContent='Melon';

fruits.replaceChild(newChild,fruits.firstElementChild);

//노드 삭제
fruits.removeChild(fruits.lastElementChild);

//속성
const {attributes }=document.getElementById('user');
console.log(attributes);
console.log(attributes);
console.log(attributes);

const input =document.getElementById('user');
const inputValue=input.getAttribute('value');
console.log(inputValue);

input.setAttribute('value','javascript');
console.log(input.getAttribute('value'));


console.log(input.hasAttribute('value'));
console.log(input.hasAttribute('checked'));


input.removeAttribute('value');


