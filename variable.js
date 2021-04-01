
//1. use strict (added in ESS)
// use strict 를 사용하는 이유
// 1) JavaScript -> flexible =>  비상식적인 코드 사용가능
// ex) 선언되지 않은 변수에 값 할당 

'use strict';

// 2. Variable(변수):변경될 수 없는 값
// 하나의 값을 지정하기 위해 확보한 메모리 공간 그 자체 또는 그 메모리 공간을 식별하기 ㅜ이해 붙인 이름
// 변수를 선언한다 ->변수를 생성한다.
// var, let,const 

// var (Before ES6)
// : 선언과 초기화가 동시에 진행 

//var 를 권장하지 않는 이유
// 1) 변수의 중복 선언이 허용

// 2) 변수 hoisting 
// : 변수를 어디에 선언했던 상관없이 변수선언을 가장 위로 끌어 올리는 것 


//3) block level scape 

// var의 단점을 보완하기 위해 등장한 키워드 (added in ES6)
// let , const

//let
// mutable data type ->ㅏ값을 변경할 수 있음

//const
// imutable data type =>재할당 금지 , 불변을 이야기 하는 것은 아님
// 상수(<-> 변수) 를 선언할 떄 사용하는 키워드

//const 를 권장하는 이유
//1) 보안
//2) 다양한 thread가 동시에 값을 변경할 수 없음 
//3) 개발자의 실수를 줄일 수 있음


// 3. Scope : 유효 범위
// local scope : 함수 몸체 내부
// global scope : 코드 전체 
//global 변수 -> 권장하지 않음!
//1) 생명 주기가 길다 -> 메모리 공간을 항상 차지 
//-> class , function ,if for문 등 필요할 떄 정의
//2) 값이 변경될 위험이 크다.


//var -> function level scope 
// : 오로지 함수의 코드 블록만을 local scope 로 인정

//block level scope ->let , const
// : 모든 코드 블록을 local scope로 인정
//->block 안에 적힌 내용은 block 밖에서 볼 수 없음 

//4.Data Types -> 7가지
//1) primitive type 
//: number , string , boolean, undefined, null, symbol
//2) object / reference type
//:6가지 제외한 나머지 data type
// ex) object , function, array 등

// -number
//  JavaScript 는 변수를 선언할 떄 data type을 따로 명시하지 않아도 됨


//special numeric values :Infinity , -Infinity , NaN , bigint

//bigint (added in ES11)
//숫자 마지막에 n


// -string
// char 타입 없음


// cf) template literal
// ``(패틱) 이용
// 1) `` 안에 있는 문자열 그대로 출력 '\n'사용안해도 됨

//2) 표현식 삽입

//-boolean
// : true, false
// false 나타낼 수 있는 값 
// ->0, null, undefined , NaN, ''


//-undefinde 
// : 값이 할당되지 않은 것 


// -null
// :변수에 값이 없다-> 의도적으로 명시

// -symbol (added in ES6)
// :고유의 key 값을 부여
// Symbol()-> symbol값은 외부로 노출되지 않음


// object 


//5. Dynamic Typing
//C,Java ->정적 타입 언어
//JavaScript ->동적 타입 언어


