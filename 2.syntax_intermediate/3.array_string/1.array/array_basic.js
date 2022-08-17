// 배열 작성 방식 [element, element];
// element : 배열에 들어갈 요소들 (HTML의 element가 아님) 
const arr = ['orange', 'cookie', 'orange-cookie']; // [] 배열을 arr 이라는 변수에 할당 (저장)
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr.length); // 길이구하는 함수 arr가 가지고 있는 프로퍼티(property, 보라색 글씨)를 조회(refer)
//console.log(ironman.motive); 아이언맨의 정보 중 모티브 조회 -> 일론머스크

//요소 조회(참조)
console.log(`${arr[0]}, ${arr[1]}`);

//요소의 추가
//변수명[추가할 인덱스 번호, 위치] = 할당할 값(리터럴)
arr[3] = 'new cookie';
console.log(arr);

const melonCookie = 'melon cookie';
arr[4] = melonCookie; //변수로 할당 가능

//요소의 갱신 (update)
arr[3] = 5;
console.log(arr);

//요소의 삭제
const fruits = ['apple', 'orange', 'kiwi'];
console.log(fruits);
// 1.fruit
// 2.fruits
delete fruits[1];
console.log(fruits); //empty 같이 요소의 실제 값은 없지만, 공간은 유지된 형태
console.log(fruits[1]); // undefined
console.log(fruits.length);

const nuts = ['walnut', 'almond', 'pinenut'];
console.log(nuts);
nuts.splice(1, 2); //Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
console.log(nuts);
console.log(nuts.length);

