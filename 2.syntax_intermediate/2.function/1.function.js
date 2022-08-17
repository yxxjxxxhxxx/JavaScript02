// 기본적인 함수 정의, 
// 함수 작성 방식 첫번째, 함수 선언문 방식
// 함수 키워드 함수명(parameter파라미터) {}
function add(a, b) { //두 수의 덧셈 함수
    return a+b;
}
//함수 호출 
console.log(add(2,3));

function add3(a, b) {
    const result = a + b;
    console.log('add3');
    console.log(result);
}

//두 수의 곱셈 결과를 변환하는 함수, multiply
function multiply(a, b) {
    return a * b;
}
console.log('multiply 함수 출력');
console.log(multiply(2, 2));

function multiply2(a, b) {
    console.log(a * b);
    // return a * b;
}

// const addResult = add(2 ,3);
// console.log(addResult);

//Javascript featur
//함수 역시 하나의 값 (value)으로 취급할 수 있음
// 함수 작성 방식 두번째 함수 표현식
// 함수를 하나의 값으로써 변수에 할당 
// 넘겨두됨
const div = function division(a, b) {
    return a / b;
}
console.log('나누기');
console.log(div(4,2));
console.log(div);

//ES6 문법, 화살표 함수(Arrow)를 
// 함수 작성 세번째, 화살표 함수
// function 키워드 대신 화살표(arrow)를 사용하여 좀 더 간략하게 표현
// 기본 형태 () => {}
// 익명함수 
const sub = (a, b) => {return a-b;}
console.log('화살표 빼기 함수');
console.log(sub);
console.log(sub(5, 3));

const sub2 = (a, b) => a - b; //코드가 한줄이면 {}, return 생략 가능
console.log('{} return 생략한 화살표 빼기 함수');
console.log(sub2(5,3));

//파라미터가 없는 함수
const greeting = () => console.log('안녕하세요');
greeting();

//즉시 실행 함수 (넘겨두됨) - 함수 정의와 동시에 실행 되는 함수 한번만 실행되고 다시 호출 불가.
const res = function() {
    const a = 5;
    const b = 10;
    return a * b;
}
console.log('그냥 자판기');
console.log(res());

//드래그 하고 쉬프트 누르고 여는 소괄호 뒤에 세미콜론 
const res2 = (function() {
    const a = 5;
    const b = 10;
    return a * b;
}());
console.log('즉시 실행 함수 그냥 이런것도 있다~');
console.log(res2);
console.log(res2);



