

//1번 함수를 제외한 함수들을 전부 주석 처리하였습니다
//1,2,3 번 함수는 특정 calculate 함수로 돌아가며 1,2,3 함수 실행시 3번 함수 밑에 있는 calculate예시를 이용하여 실행하였습니다.
// 4번함수는 즉시싫행함수 여서 특정값을 미리 넣었고 5번함수는 익명함수로 변수에 값을 반환하는 형태라 변수로 값을 받아온 후 콘솔창에 출력하도록 구현했습니다.

//1.
// Good!
function calculate(command,a,b){
    let result;
    switch(command){
        case 'add' : case '+':
            result=a+b;
            // 굳이 String으로 바꿀 필요는 없어요.
            break;
        case 'substract': case '-':
            result=a-b;
            break;
        case 'multiply' : case '*':
            result=a*b;
            break;
        case 'divide': case '/':
            result=a/b;
            if (b==0){
                result='cannot divide with zero';
            }
            break;
        case 'remainder': case '%':
            result=a%b;
            break;
        default:
            result='Wrong command!';
            break;
        

    }
    console.log('result:'+result);

}

/*
//2.
// Good!
const calculate=function(command,a,b){
    let result=' ';
    switch(command){
        case 'add' : case '+':
            result=String(a+b);
            break;
        case 'substract': case '-':
            result=String(a-b);
            break;
        case 'multiply' : case '*':
            result=String(a*b);
            break;
        case 'divide': case '/':
            result=String(a/b);
            if (b==0){
                result='cannot divide with zero';
            }
            break;
        case 'remainder': case '%':
            result=String(a%b);
            break;
        default:
            result='Wrong command!';
            break;
        

    }
    console.log('result:'+result);
}


//3.
// Good!
const calculate=(command,a,b) =>{
    let result=' ';
    switch(command){
        case 'add' : case '+':
            result=String(a+b);
            break;
        case 'substract': case '-':
            result=String(a-b);
            break;
        case 'multiply' : case '*':
            result=String(a*b);
            break;
        case 'divide': case '/':
            result=String(a/b);
            if (b==0){
                result='cannot divide with zero';
            }
            break;
        case 'remainder': case '%':
            result=String(a%b);
            break;
        default:
            result='Wrong command!';
            break;
        

    }
    console.log('result:'+result);
};
*/


calculate("add", 1, 3);
calculate("-", 1, 3);
calculate("multiply", 1, 3);
calculate("/", 4, 2);
calculate("/", 4, 0);
calculate("%", 5, 3);
calculate("]", 1, 3);

/*
//4.
// Good!
(function calculate(command,a,b){
    let result=' ';
    switch(command){
        case 'add' : case '+':
            result=String(a+b);
            break;
        case 'substract': case '-':
            result=String(a-b);
            break;
        case 'multiply' : case '*':
            result=String(a*b);
            break;
        case 'divide': case '/':
            result=String(a/b);
            if (b==0){
                result='cannot divide with zero';
            }
            break;
        case 'remainder': case '%':
            result=String(a%b);
            break;
        default:
            result='Wrong command!';
            break;
        

    }
    console.log('result:'+result);
})("add",1,3);//즉시 실행 함수여서 특정 값을 바로 넣어 예시로 출력했습니다.
*/


//5.
let cal=function(command,a,b){
    let result=' ';
    switch(command){
        case 'add' : case '+':
            result=String(a+b);
            break;
        case 'substract': case '-':
            result=String(a-b);
            break;
        case 'multiply' : case '*':
            result=String(a*b);
            break;
        case 'divide': case '/':
            result=String(a/b);
            if (b==0){
                result='cannot divide with zero';
            }
            break;
        case 'remainder': case '%':
            result=String(a%b);
            break;
        default:
            result='Wrong command!';
            break;
        

    }
    return result;
};

console.log(cal("add",1,3));
console.log(cal("-",1,3));
console.log(cal("multiply",1,3));
console.log(cal("/",4,0));
console.log(cal("/",4,2));
console.log(cal("%",5,3));
console.log(cal("]",5,3));

// function expression의 호출까지 잘 연습했어요.
// 함수 선언의 경우 앞으로도 쓸 일이 많으니
// 이번 기회에 익숙해지는 시간이 되었길 바랍니다.