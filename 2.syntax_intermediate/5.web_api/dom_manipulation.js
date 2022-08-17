// DOM 객체
console.log(document); // html
console.dir(document); // 좀더 자세한 정보 조회
// -> document 객체의 프로퍼티 조회 가능

console.log(window.document);
// window 객체 내부에 document 가 하나의 프로퍼티로 존재

console.log(window.document === document); //true

// DOM 조작
// console.log(document.querySelector('hi'));

// document.getElementById('main-title');
console.log('바이 아이디');
const h1 = document.getElementById('main-title');
console.dir(h1.innerText);
console.log(h1);

// li element 중에서 class 이름이 list-item인 노드 가져오기
console.log('바이 클래스 네임');
console.log(document.getElementsByClassName('list-title'));

// CSS Selector 를 통한 조회, 선택자 기호 필수.
console.log(document.querySelector('#main-title'));
console.log(document.querySelector('.list-item')); // 가장 첫 번째 노드만 가져오기

console.log(document.querySelectorAll('.list-item')); //NodeList