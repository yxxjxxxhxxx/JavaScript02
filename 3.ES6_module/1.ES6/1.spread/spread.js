/**
 * ...(spread syntax)
 * 
 * 하나로 뭉쳐있는 여러 값들의 집함을 펼쳐서(전개, 분산, spreading)
 * 개별적인 값들의 목록으로 바꿔줌
 * 
 * spread 문법 적용 가능한 대상은 Array, String, Map, Set, Dom Collection 등으로 한정됨
 *
 */

// 1. Spread with Arrays
const fruits = ['apple', 'banana'];
const otherFruits = ['kiwi', 'podo'];

// 위의 두 배열을 연결해서 하나의 배열로 출력, concat();

const allFruits = fruits.concat(otherFruits);
console.table(allFruits);

// Spread 활용 방식
const myFruits = [...fruits, ...otherFruits];
console.table(myFruits);

const users =[
    {id: 1, userName: 'Coo'}, 
    {id: 2, userName: 'Kie'}
];
console.log(users[0]);

// 기존 방식
const newUser = {id: 3, userName: 'Run'}
users.push(newUser);
console.table(users);

//spread 방식
const secondUser = {id :4, userName: 'zzang'}
const updatedUsers = [...users, secondUser];
//[scecondUsers, ...users] -> 요소의 맨 앞에 추가
console.log(updatedUsers);
console.log(users.length); // 3. spread 연산을 해도 원본 배열을 바뀌지 않음

// 배열의 복사
const originalArray = ['one', 'two', 'three'];
const secondArray = originalArray;
console.log(secondArray);
secondArray.pop();
console.log(originalArray); // (shallow copy) 얕은 복사원본이 변함, 같은 참조값을 참조하고 있기 때문에

// Spread 를 활용한 shallow copy
const originalArrayWithSpread = ['four', 'five', 'six'];
const secondArrayWithSpred = [...originalArrayWithSpread];
secondArrayWithSpred.pop();
console.log(originalArrayWithSpread);
console.log(secondArrayWithSpred);

// 2. 문자열도 가능
const aString = 'hello';
const strArray = [...aString];
console.log(strArray); // 배열의 각 요소들로 분해한다.

// 3. Spread with Objects
// 기존의 방식을 사용한 object의 shallow copy
// const originalObject = {enabled: true, darkMode: false};
// const secondObject = Object.assign({}, originalObject); // 복사해줘 object.assign();
// secondObject.enabled = false;
// console.log(originalObject.enabled);
// console.log(originalObject === secondObject);// 참조값 비교

//spread를 활용한 object shallow copy
const originalObject = {enabled: true, darkMode: false};
const secondObject = {...originalObject};
secondObject.enabled = false;
console.log(originalObject.enabled);