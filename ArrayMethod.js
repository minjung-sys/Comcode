//배열을 하나의 문자열로 변환하기
{
    const fruits=['apple','banana','orange'];

    const result=fruits.join();
}

//문자열을 배열로 변환하기 
{
    const fruits='apple,banana,orange,melon,lemon';
    const arr=fruits.split(",");
    console.log(arr);

}

//배열 요소 순서를 거꾸로 바꾸기
{
    const array=[1,2,3,4,5];
    array.reverse();
    console.log(array);
}
//처음 두 요소를 제외한 새 배열 만들기 
{
    const array=[1,2,3,4,5];
    const newarr=array.splice(2,3);
    console.log(newarr);
}

//05~11
class Student{
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;

    }
}
const students =[
    new Student('A',22,true,45),
    new Student('B',20,false,80),
    new Student('C',24,true,90),
    new Student('D',21,false,65),
    new Student('E',22,true,85)
];

//score 가 90


for(let i=0;i<5;i++){
    if(students[i].score==90){
        console.log(students[i].name);
    }
}

const enrolledstu=[];
for(let i=0;i<5;i++){
    if(students[i].enrolled==true){
        enrolledstu.push(students[i].name);
    }
}
console.log(enrolledstu);

//enrolled 인 student 배열

const scores=[];

for(let j=0;j<5;j++){
    scores.push(students[j].score);
}
console.log(scores);

for(let j=0;j<5;j++){
    if (students[j].score<50){
        console.log(students[j].name+'50점 미만입니다');
    }
}

let avg;
let all;
for(let j=0;j<5;j++){
    all+=parseInt(students[j].score);
    
}
avg=all/5;
console.log(all);
console.log('평균:'+avg);

const strscore=scores.join();
console.log('문자열score'+strscore);

const rescore= scores.sort();
const final=rescore.join();
console.log("정렬된 score"+final);