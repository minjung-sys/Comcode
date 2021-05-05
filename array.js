'use strict';

//Array
//여러 개의 값을 순차적으로 나열한 자료구조
//object data type

//JS 에서는 배열에 여러가지 자료형을 낳을 수 있음 ->권장하지 않음
///->다른 언어에서처럼 1가지 자료형으로 통일해서 넣기



//1.Declaration
//1)배열 리터럴 : 0개 이상의 요소를 쉼표로 구분해서 대괄호로 묶기

//const arr1=[1,2,3];

//2) Araay 생성자 함수 ->new 키워드 이용
//const arr2=new Array(3); //길이가 3인 array 생성

//3) Array.of(added in ES6)
// const arr3=Array.of(1,2);

//2. Length property
//배열의 가장 큰 특징 -> data에 index로 바로 접근할 수 있다.
//array.length

// cf희소 배열 : 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열

//const sparse= [1,2,,3,4];
//희소배열의 길이 > 배열에 실제로 있는 요소의 수

//3.Index position
// const fruits=['apple','orange','banana'];


//4.Looping over an array
//1)for 문

//2)for of 문
//for (let fruit of fruits){

//}
//3)
//forEach
//array 안에 있는 각 value마다 callback함수 수행 
//fruits.forEach((fruit,index)->console.log(fruit,index));
//fruits.forEach((fruit)->console.log(fruits))

//5.Array Methods

//1)Addition, deletion ,copy
//push: array 끝에 있는 요소 삽입

//pop: array 끝에있는 요소 삭제

//unshift :array 앞에 요소 삽입

//fruits.unshift('lemon');
//console.log('shift->${fruits}');


//shifft: array 앞에 요소 삭제

//push,pop을 쓰는 것을 더 권장

//splice : index부터 트정개수의 요소 삭제
//추가도 가능 


//concat : 두 개의 array 결합

//2)Searching 

//indexOf :index 찾기

//includes : 배열에 있는지 없는지 여부 -> boolean 타입으로 출력 

//lastIndexOf : 인자로 들어온 원소 중 가장 마지막 원소 출력


