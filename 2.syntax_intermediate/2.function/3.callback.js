// 콜백 함수 - 기본
// function greeting(name) {
//     console.log(`Hello ${name}`); //템프릿 리터럴 
//}

// function userInput(myName, callbackFn) {
    //눈에 보이지 않는 코드
    //const myName = 'YJH';
    //const callbackFn = greeting    
    // callbackFn(myName); // greeting('YJH');와 같음.
// }
//userInput 함수의 인자값으로 greeting 함수를 전달 
// userInput('YJH', greeting);

/////////////////////////////////////////////////
/* 쿠팡에서 사과가 도착하길 기다리는 함수 waitCoupang
함수의 파라미터 2개
첫 번째 파라미터 : 쿠팡에서 배송받을 제품, 파라미터명 pkg
두 번째 파라미터 : 아주머니에게 전달하는 함수 파라미터명 callbackFn

동작
1. '쿠팡에서 pkg가 도착했다 !' 를 출력하는 출력문 작성
2. 옆집 아주머니에게 전달하는 함수 호출

아주머니에게 전달하는 함수 bringToNeighbor
별도의 파라미터 없음
동작 : '옆집 아주머니에게 전달 완료!' 출력하는 출력문 작성

출력문 템플릿 리터럴(``, backtick 기호)로 작성
*/
// console.log('쿠팡 문제');

// function waitCoupang(pkg, callbackFn) {
//     console.log(`쿠팡에서 ${pkg} 가 도착했다.`);
//     callbackFn();
// }

// function bringToNeighbor() {
//     console.log('옆집 아주머니에게 전달 완료 !');
// }

// waitCoupang('사과', bringToNeighbor);

// // 클릭 버튼 활성화 
// const button = document.querySelector('button');
// //button.addEventListener('click', function() {
// //   console.log('button clicked!');
// //});

// const buttonFn = function() {
//     console.log('button clicked!');
// }

// button.addEventListener('click', () => console.log('button clicked!'));








// function greeting(name) {
//     console.log(`Hello ${name}`);  
// }

// function userInput(myName, callbackFn) {  
//     callbackFn(myName);
// }

// userInput('YJH', greeting);


function waitCoupang(pkg, callbackFn) {
    console.log(`쿠팡에서 ${pkg} 가 도착했다.`);
    callbackFn();
}

function bringToNeighbor() {
    console.log('옆집 아주머니에게 전달 완료 !');
}

waitCoupang('사과', bringToNeighbor);
















function blueTimer(blue1, callbackTimer) {
    console.log(`${blue1} 가 생성 되었습니다. `);
    callbackTimer('블루2')
}

function blueCheck(blue2) {
    console.log(`${blue2} 사냥하세요`); 
}

blueTimer('블루', blueCheck);












