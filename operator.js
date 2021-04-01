'use strict'

// 1. String concatenation
// : +


//2. Numeric operators
//: +,-,*,/,%,**

//3. Tncrement and decrement operators
// : ++,--

//1)prefix operators

//2) postfix operators


//4.Assignment operators
//: =

//5.Comparison operators
//1)대소 관계 비교 연산자
//: < ,<= ,>,>=

// 2) 동등/일치 비교 연산자
//: ==, ===

//==: Loose equality -> 값이 같으면 같다

// === : Strict equality ->값과 type이 모두 같으면 같다

//6. Logocal operation
// : ||,&&,!


//1) ||(or), finds the first tuthy value

//2) && (and) , finds the first falsy value

//3) !(not)

// 8. Conditional statement
//1)if .. else 문


//2) Switch 문

//9. loop statement
//1)for문
for (let i= 0;i<11;i++){
    if (i%2!=0){
        continue;
    }
    console.log(i);
}

for (let i=0;i<8;i++){
    if(i>7) break;
    console.log(i);
}


