'use strict';

//class : 관심있는 변수나 함수를 묶어 놓은 것
// 캡슐화, 상속, 다형성

//class 와 object 의 관계
//class : dataa 가 없이 틀만 정의
//object: class 를 토대로 data를 넣은 것

//class -> 틀
//->1번만 선언

//object ->틀에 맞춘 data
//->여러개 생성 가능

//1. Class delaration
//constructor :생성자 -> object를 만들 때 필요한 data를 전달
class Person{
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;

    }
    //methods (함수)
    speak(){
        console.log('${this.name}, hello');
    }
}

const comcode =new Person('comcode',29);

//3. Fields (public , private)
//생성자를 쓰지 않고도 Field 정의 가능

//default -> public :외부에서 접근가능
//field->private :class 내부에서만 접근 /변경가능

class Test {
    publicField=2;
    #privateField =0;
    accessPrivate(){
        return this.#privateField+1;

    }
}

//4.Static properties and methods
//fields, method -> 새로운 object를 만들 때마다 복제되어 값만 할당된 값으로 변경
//object data 에 상관없이 class 가 가진 고유의 값 , 동일하게 반복적으로 사용되는 method
//->static 으로 지정 -> object 에 상관엇이 class에 연결
//메모리 사용량 절약 가능 

class University{
    static uniName='Sookmyung';
    constructor(uniNumber){
        this.uniNumber=uniNumber;
    }   
    static printPublisher(){
        console.log(University.uniName);
    }
}

//5.Inheritance (상속)

class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;

    }
    draw(){
        console.log('drawing ${this.color} color');
    }
    getArea(){
        return this.width *this.height;
    }
}

