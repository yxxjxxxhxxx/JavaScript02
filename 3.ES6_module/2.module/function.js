/**
 * Modular Programming
 * 
 * 코드를 여러 파일로 쪼개서 모듈화 시키는 방식
 * 서로 관계가 있는 기능끼리, 파일끼리 서로 module의 형태로 불러와서
 * 필요한 코드만 사용하는 방식
 * 
 * ES6(2015)에서 모듈화를 할 수 있는 import, export라는 키워드 사용
 */

// 함수 선언문으로 sum(x, y), sub(x, y), mul(x, y), div(x, y) 작성
export function sum(x, y) {  //export 다른곳으로 보낼 수 있게 해줌  html script에 type="module" 추가
    return x + y;
}

export function sub(x, y) {
    return x - y;
}

export function mul(x, y) {
    return x * y;
}

export function div(x, y) {
    return x / y;
}

export const number = 100;
export const string ='string';
export const undef = undefined;
export const empty = null;

// export 한 번에 작성
const obj = { name: 'homer'};
const array = ['bart', 'lisa', 'maggie'];

export { obj, array}

