// 2. event handler property 방식 html과 js를 분리
const evPropButton = document.getElementById('btn-ev-prop');
console.dir(evPropButton);

evPropButton.onclick = () => console.log('button clicked by event property'); 
// by event property 

console.log(evPropButton.onclick); // 이벤트 핸들러 프로퍼티에 등록된 것 확인
// 하나의 이벤트 밖에 등록 불가.
evPropButton.onclick = () => console.log('또 다른 2번 클릭 이벤트');


// 3.addEventListener method 방식
// 이벤트 핸들러 프로퍼티에 영향을 미치지 않기 때문에 
// 복수의 이벤트 등록이 가능, 등록된 모든 이벤트가 호출됨
const addEvLsnrButton = document.getElementById('btn-add-ev-lsnr');
console.log(addEvLsnrButton);

// 함수 선언문 방식으로 작성
function buttonHandler() {
    console.log('doble clcked!');
}

addEvLsnrButton.addEventListener('dblclick', buttonHandler); // dblclick 인지 어떻게 아셨어요? html Events 참조

// 화살표 함수로 작성
const buttonHandler2 = () => {
    console.log('mouseover');
}

addEvLsnrButton.addEventListener('mouseover', buttonHandler2);
// 버튼에 마우스를 올렸을 때 동작하는 이벤트 작성
addEvLsnrButton.addEventListener('mouseover', () => {
    console.log('mouseover');
});

// 이벤트 핸들러의 제거, 콜백함수의 파라미터로 직접 익명합수를 작성하면 제거
console.log(evPropButton.onclick); // 현재 onclick 프로퍼티에 등록된 이벤트
evPropButton.onclick = null; // null 할당으로 프로퍼티값 초기화
console.log(evPropButton.onclick);

// 3. addEventLisner 방식에서의 이벤트 제거
addEventLisner.removeEventListner('dbclick', buttonHandler);
// 익명함수는 참조할 수 없어서 제거 불가
 
